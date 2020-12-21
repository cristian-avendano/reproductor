const fs = require('fs');
const json = require('edit-json-file');
const urlJson = require('../conf/url');

function verifyJsonConfDataFolder() {
    let urlJsonFiles = new urlJson.UrlJsonFiles();
    const jsonConf = json(urlJsonFiles.getUrlJsonConf).data.folder;
    
    if (verifyExistFolder(jsonConf)) {
        return true;
    } else {
        return false;
    }
}

function verifyJsonMusicDataFolder() {
    let urlJsonFiles = new urlJson.UrlJsonFiles();
    const jsonMusic = json(urlJsonFiles.getUrlJsonConf).data.files;

    for (let i = 0; i < jsonMusic.length; i++) {
        if (verifyExistFolder(jsonMusic[i])) {
        } else {       
            return false;
        }    
    }
    return true;
}

function verifyExistFolder(url) {
    try {
        fs.statSync(url);
        return true;
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        return false;
      }
    }
}

module.exports = {
    verifyJsonMusicDataFolder,verifyJsonConfDataFolder,verifyExistFolder
}