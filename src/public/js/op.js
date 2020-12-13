const path = require('path');
const {set,url,folderFiles,removeFol, getMusicJson} = require(__dirname.substring(0,__dirname.length-5)+"ctrl/folder");
let listaDeMusica = [];

setListaMusica();


let vaciar =document.getElementById("va");
let setFolder = document.getElementById("add");
let tDir = document.getElementById("t-dir");
let re = document.getElementById("re");


const contMensaje= document.getElementById("cont-mensaje-1");

const m1= document.getElementById("m1");
let m1Aceptar = document.getElementById("m1-aceptar");
let m1Cancelar =document.getElementById("m1-cancelar");

const m2= document.getElementById("m2");

let m2Aceptar = document.getElementById("m2-aceptar");


setFolder.addEventListener('click',()=>{
    if (set()) {
        contMensaje.classList.remove("inv");
        m2.classList.remove("inv");
        tDir.innerHTML = url.get("folder"); 
        folderFiles();       
    }
});

function setListaMusica() {
    for (let i = 0; i < Object.keys(getMusicJson.data).length; i++) {
        listaDeMusica[i] =  url.get("folder") + "/" + getMusicJson.data[i].nombre;
        let fila = document.getElementById("table-lib").insertRow(i);
        let cell1 = fila.insertCell(0);
        let cell2 = fila.insertCell(1);
        let cell3 = fila.insertCell(2);
        let cell4 = fila.insertCell(3);
        cell1.innerHTML = i+1;
        cell2.innerHTML = getMusicJson.data[i].nombre;
        cell3.innerHTML = getMusicJson.data[i].tipo;
        cell4.classList.add("repro");
        cell4.classList.add("repro-"+i);
    }
}



m1Aceptar.addEventListener('click', ()=>{
    tDir.innerHTML = "";     
    url.set("folder", "");
    url.save();
    removeFol();
    console.log("delete")
    
    contMensaje.classList.add("inv");
    m1.classList.add("inv");
})

m1Cancelar.addEventListener('click', ()=>{
    contMensaje.classList.add("inv");
    m1.classList.add("inv");
})

m2Aceptar.addEventListener('click', ()=>{
    contMensaje.classList.add("inv");
    m2.classList.add("inv");
})


vaciar.addEventListener('click', ()=>{
    contMensaje.classList.remove("inv");
    m1.classList.remove("inv");
})

re.addEventListener('click', ()=>{
    location.reload();
})
