const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 700,
    height: 500,
    resizable: false,
    webPreferences:{
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        enableRemoteModule: true
    }
  })

  win.setMenu(null);
  win.loadFile('index.html')
  //win.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})