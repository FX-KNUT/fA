// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {

  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    frame : false // 2021 03 11 12:48, 테두리 바 삭제를 위해 추가, 신이종
  });

  mainWindow.loadURL('http://localhost:3000');
  mainWindow.resizable = false;
};

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});