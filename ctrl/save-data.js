const fs = require('fs');
const verify = require('./verify-data');
const json = require('edit-json-file');
const urlJson = require('../conf/url');

function saveJsonDataConf(url){
    if (verify.verifyExistFolder(url)) {
        let urlJsonFiles = new urlJson.UrlJsonFiles();
        const jsonConf = json(urlJsonFiles.getUrlJsonConf);
        jsonConf.set("folder",url)
        jsonConf.save();
    }
}

function saveJsonDataMusic(url){
    const testFolder = url;
    let urlJsonFiles = new urlJson.UrlJsonFiles();
    const jsonMusic = json(urlJsonFiles.getUrlJsonConf);    
    
    let a = [];
    try {
        files = fs.readdirSync(testFolder);
        files.forEach(file => {
            if (file.substr(file.length-3)==="mp3") {
                a.push(file);
            }            
        });
        jsonMusic.set("files",a)
        jsonMusic.save();
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        console.log('file or directory does not exist');
      }
    }
}

module.exports = {saveJsonDataConf,saveJsonDataMusic};