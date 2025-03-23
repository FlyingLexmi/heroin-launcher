const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    myFunction: () => ipcRenderer.send('run')
});
