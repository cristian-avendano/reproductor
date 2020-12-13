const {dialog} = require('electron').remote
const fs = require('fs');
const json = require('edit-json-file'); 
const ruta = require('../ruta');
const { promises } = require('dns');
const { urlMusic } = require('../ruta');
const jsonConfig = json(ruta.urlConfig);
const jsonMusic = json(ruta.urlMusic);

function setFolderPath() {
    const dir = dialog.showOpenDialogSync( {
        properties: ['openFile', 'openDirectory']
    })  
    if (undefined === dir) {
        console.log("vacio");
        return false;
    } else {
        console.log(dir[0]);
        jsonConfig.set("folder",dir[0]);
        jsonConfig.save();
        return true;
    }
}

function setFolderFiles() {
    fs.readdir(jsonConfig.get("folder"), function (err, archivos) {
    if (err) {
        console.log("error");
    }
    for (let i = 0; i < archivos.length; i++) {
        jsonMusic.set(i+"",{"nombre":archivos[i],"tipo":archivos[i].substr(archivos[i].length-3)})
    }
    jsonMusic.save();
    });
}

async function removeFolder() {
    var fd = fs.openSync(urlMusic, 'w'); 
}



module.exports  = {"set":setFolderPath,"url":jsonConfig, "folderFiles":setFolderFiles, "removeFol":removeFolder, "getMusicJson":jsonMusic};