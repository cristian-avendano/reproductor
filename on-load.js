const root = require('./ctrl/main')

let raiz = new root.root;
let list = raiz.getMusic;
var sound = [];
let pos = 0;

function refrescar(url) {
    raiz.setFolder(url);
    raiz.setMusic(url);
    list = raiz.getMusic;
    setListaMusica(list);
    for (let i = 0; i < list.length; i++) {
        list[i] = raiz.getFolder + "/" +list[i];
    }
    sound = [];
    pos = 0;        
    location.reload()
}

function setListaMusica(music) {
    for (let i = 0; i < music.length; i++) {
        let fila = document.getElementById("table-lib").insertRow(i);
        let cell1 = fila.insertCell(0);
        let cell2 = fila.insertCell(1);
        let cell3 = fila.insertCell(2);
        let cell4 = fila.insertCell(3);
        cell1.innerHTML = i+1;
        cell2.innerHTML = music[i];
        cell3.innerHTML = "mp3";
        cell4.classList.add("repro-2");
        //cell4.classList.add("repro-"+i);
    }
}