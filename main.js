const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Функция, вызываемая при нажатии кнопки
function myNodeFunction() {
    console.log('Функция myNodeFunction выполнена!');
}

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    win.loadFile(path.join(__dirname, 'interface/index.html'));
}

ipcMain.on('run-my-function', () => {
    pass;
});

app.whenReady().then(createWindow);
