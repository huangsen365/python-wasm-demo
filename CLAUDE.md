# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Run Commands

```bash
# Build Docker image
docker build -t python-wasm-demo .

# Run container
docker run -d -p 8080:80 --name python-wasm-demo python-wasm-demo

# Stop and remove container
docker stop python-wasm-demo && docker rm python-wasm-demo

# Rebuild and restart (one command)
docker stop python-wasm-demo && docker rm python-wasm-demo && docker build -t python-wasm-demo . && docker run -d --name python-wasm-demo -p 8080:80 python-wasm-demo

# Access application
# Terminal Mode: http://localhost:8080
# IDE Mode: http://localhost:8080/editor.html
# Test Interface: http://localhost:8080/test_gui.html
```

## Architecture Overview

This is a browser-based Python development environment using Python compiled to WebAssembly (Pyodide). The entire application runs client-side with no backend server.

### Core Components

**User Interfaces:**
- `public/index.html` - Simple terminal interface with Python REPL
- `public/editor.html` - Full IDE with Monaco Editor, file management, and split-pane layout
- `public/test_gui.html` - Test interface for verifying example loading functionality
- `public/editor-old.html` - Legacy version

**Infrastructure:**
- Alpine nginx container serves static files
- Pyodide v0.24.1 provides Python WebAssembly runtime
- Virtual filesystem stores files in browser memory at `/home/user`
- CORS headers and WASM MIME types configured in `nginx/nginx.conf`

**Key Technical Details:**
- Python stdout/stderr redirected to web terminal via custom JSConsole class
- Monaco Editor provides VSCode-like editing experience
- Files persist only during browser session
- Memory optimization with lazy loading of example files (max 3 tabs, 500 terminal lines)

## Critical Configuration

The nginx configuration in `nginx/nginx.conf` is essential for Pyodide to work:
- `Cross-Origin-Embedder-Policy: require-corp`
- `Cross-Origin-Opener-Policy: same-origin`
- WASM MIME type: `application/wasm`

These headers are required for SharedArrayBuffer support that Pyodide needs.

## Development Patterns

**File Management:**
- Files stored in JavaScript Map with filename as key
- Tab management limits memory usage (3 max open tabs)
- `loadFile()` function handles on-demand loading of example content
- `cleanupFile()` removes unused files from memory

**Python Integration:**
- Pyodide initialization in `initPython()` function
- Code execution via `pyodide.runPythonAsync()`
- Virtual filesystem operations using `pyodide.FS.writeFile()`
- Terminal commands handled in `executeTerminalCommand()`

**Example System:**
- 11 tutorial files defined in `exampleTemplates` object (welcome.py through 10_modules.py)
- Templates use both direct assignment and `addTemplate()` helper function for proper formatting
- Lazy loading prevents all examples from consuming memory at startup
- Files load when clicked in sidebar, showing 📋 (unloaded) or 📄 (loaded) icons

## Memory Management

The IDE implements several memory optimization strategies:
- Example files load on-demand rather than at startup
- Maximum 3 tabs open simultaneously (oldest auto-closes)
- Terminal history limited to 500 lines with auto-truncation
- `clearMemory()` function resets everything except current file
- Memory usage indicator shows approximate KB usage

## Troubleshooting

**CDN Dependencies:**
Application requires internet access for:
- Monaco Editor: `https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/`
- Pyodide: `https://cdn.jsdelivr.net/pyodide/v0.24.1/full/`

**Common Issues:**
- "Failed to load Pyodide" indicates network/CDN access problems
- SharedArrayBuffer errors indicate missing CORS headers
- Python execution errors appear in terminal with red text
- "exampleTemplates object not found" indicates JavaScript syntax errors in template loading
- Files not clickable usually means template initialization failed

## Recent Fixes

**JavaScript Template Loading (December 2024):**
Fixed critical JavaScript errors that prevented example files from loading:
- Corrected escaped backtick syntax error in template literal assignment
- Removed premature empty `exampleTemplates = {}` assignment that was clearing loaded templates
- Added proper initialization order and error handling
- Enhanced fallback editor for when Monaco CDN fails
- All 11 Python example templates now load correctly with proper line formatting

**Template Structure:**
- `welcome.py` uses direct template literal assignment
- Other templates use `addTemplate()` helper function with escaped newlines
- Important: Never add empty `window.exampleTemplates = {}` after template assignments

## File Locations

- Static assets: `public/` directory
- Web server config: `nginx/nginx.conf`
- Container definition: `Dockerfile`
- All code is frontend JavaScript - no backend services