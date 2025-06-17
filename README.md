# Python WASM Online IDE

A web-based Python development environment with both CLI and full IDE modes, powered by Pyodide (Python compiled to WebAssembly).

## Docker Build and Run Commands

### Build the Docker image:
```bash
cd python-wasm-demo
docker build -t python-wasm-demo .
```

### Run the container:
```bash
docker run -d -p 8080:80 --name python-wasm-cli python-wasm-demo
```

### Access the application:
- **Terminal Mode**: http://localhost:8080
- **IDE Mode**: http://localhost:8080/editor.html

### Stop and remove the container:
```bash
docker stop python-wasm-cli
docker rm python-wasm-cli
```

## Features

### Terminal Mode (index.html)
- Interactive Python REPL in the browser
- Terminal-like interface with syntax highlighting
- Direct Python command execution

### IDE Mode (editor.html)
- **Monaco Editor** (VSCode's editor) for code editing
- **File Management**: Create, edit, and save multiple Python files
- **Virtual File System**: Files stored in browser memory using Pyodide's filesystem
- **Split-pane Layout**: Code editor on the left, terminal on the right
- **Tabbed Interface**: Work with multiple files simultaneously
- **Integrated Terminal**: Run your code and see output immediately
- **Syntax Highlighting**: Full Python syntax highlighting and IntelliSense
- **Resizable Panes**: Drag to resize editor and terminal panels

### Technical Features
- Uses Pyodide for Python WebAssembly support
- Nginx server with proper WASM MIME types and CORS headers
- Lightweight Alpine-based Docker image
- No server-side code execution - everything runs in the browser

## Usage Instructions

### IDE Mode
1. Click "New File" to create a new Python file
2. Write your Python code in the editor
3. Click "Run" (or use the green play button) to execute the code
4. View output in the integrated terminal on the right
5. Use the terminal for interactive Python commands
6. Files are saved in the browser's virtual filesystem

### Terminal Commands
- `clear` - Clear the terminal output
- `ls` - List all created files
- Any valid Python code

### Tips
- The editor supports multiple tabs - work on several files at once
- Drag the divider between editor and terminal to resize panels
- Files persist only during the current session (browser memory)
- All Python standard library modules are available via Pyodide