const urlJson = require('../conf/url');
const json = require('edit-json-file');
const guar = require('./save-data');
const { saveJsonDataMusic} = require('./save-data');

class root{
    constructor(){
        this.jsonData = new urlJson.UrlJsonFiles();
        this.jsonConf = json(this.jsonData.getUrlJsonConf);

        if (!this.jsonConf.get("folder")=='' && !this.jsonConf.get("files")=='') {
            this.folder = this.jsonConf.get("folder");
            this.music = this.jsonConf.get("files");
        }
        else{
            this.folder = '';
            this.music = [];
        }
    }

    get getFolder(){
        return this.folder;
    }

    setFolder(url){
        guar.saveJsonDataConf(url);
        this.setJson();
        this.folder = this.jsonConf.get("folder");;
    }

    get getMusic(){
        return this.music;
    }
    setJson(){
        this.jsonData = new urlJson.UrlJsonFiles();
        this.jsonConf = json(this.jsonData.getUrlJsonConf);
    }

    getSong(pos){
        if(pos < this.music.length){
            return this.music[pos];
        }
        else{
            return -1;
        }
    }

    setSong(pos,song){
        if(pos < this.music.length){
            this.music[pos] = song;
        }
        else{
            return false;
        }
        return true;
    }

    setMusic(url){
        saveJsonDataMusic(url);
        this.setJson();
        this.music = this.jsonConf.get("files");
    }

    removeData(){
        this.jsonConf.set("folder","")
        this.jsonConf.set("files",[])
        this.jsonConf.save();
    }
}

module.exports = {root}