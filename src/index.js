const {app, BrowserWindow} = require('electron');
const url = require('url')
const path = require('path')
const ejse = require('ejs-electron')
let main;

ejse.data('username', 'Some Guy')

app.on('ready', ()=>{
    main = new BrowserWindow({
        width: 700,
        height: 500,
        resizable: false,
        webPreferences:{
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            enableRemoteModule: true
        }
    });
    main.setMenu(null);
    
    main.loadURL(url.format({
        pathname: path.join(__dirname,'views/index.ejs'),
        protocol: 'file',
        slashes: true
    }))
    main.on('close',()=>{
        app.quit();
    })
    main.webContents.toggleDevTools();
});