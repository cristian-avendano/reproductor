const url = require('path');


class UrlJsonFiles{
    constructor(){
        this.urlJsonConf=__dirname+"/conf.json";
    }

    get getUrlJsonConf(){
        return this.urlJsonConf;
    }
}

module.exports = {UrlJsonFiles}