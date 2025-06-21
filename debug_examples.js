// Debug script to inject into the browser console
console.log('=== DEBUGGING EXAMPLES LOADING ===');

// Check if examples data exists
console.log('exampleFiles:', typeof exampleFiles !== 'undefined' ? exampleFiles : 'UNDEFINED');
console.log('exampleTemplates keys:', typeof exampleTemplates !== 'undefined' ? Object.keys(exampleTemplates) : 'UNDEFINED');

// Check current state
console.log('currentFile:', typeof currentFile !== 'undefined' ? currentFile : 'UNDEFINED');
console.log('files Map size:', typeof files !== 'undefined' ? files.size : 'UNDEFINED');
console.log('openTabs:', typeof openTabs !== 'undefined' ? openTabs : 'UNDEFINED');

// Check if functions exist
console.log('loadFile function:', typeof loadFile !== 'undefined' ? 'EXISTS' : 'UNDEFINED');
console.log('updateFileTree function:', typeof updateFileTree !== 'undefined' ? 'EXISTS' : 'UNDEFINED');

// Check DOM elements
console.log('file-tree element:', document.getElementById('file-tree') ? 'EXISTS' : 'MISSING');
console.log('sidebar element:', document.getElementById('sidebar') ? 'EXISTS' : 'MISSING');
console.log('editor element:', document.getElementById('editor') ? 'EXISTS' : 'MISSING');

// Check file tree content
const fileTree = document.getElementById('file-tree');
if (fileTree) {
    console.log('File tree children count:', fileTree.children.length);
    for (let i = 0; i < fileTree.children.length; i++) {
        console.log(`  File ${i}:`, fileTree.children[i].textContent);
    }
} else {
    console.log('File tree element not found!');
}

// Test loadFile manually
if (typeof loadFile !== 'undefined') {
    console.log('Testing loadFile manually...');
    loadFile('welcome.py');
    console.log('After loadFile - currentFile:', currentFile);
    console.log('After loadFile - files size:', files.size);
    
    // Check if editor has content
    if (typeof editor !== 'undefined' && editor) {
        const content = editor.getValue();
        console.log('Editor content length:', content.length);
        console.log('Editor content preview:', content.substring(0, 100));
    }
}

// Test updateFileTree manually
if (typeof updateFileTree !== 'undefined') {
    console.log('Testing updateFileTree manually...');
    updateFileTree();
    console.log('After updateFileTree - file tree children:', fileTree ? fileTree.children.length : 'NO TREE');
}