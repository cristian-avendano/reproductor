const {dialog} = require('electron').remote
let setFolder = document.getElementById("add");
let vaciar =document.getElementById("va");
let tDir = document.getElementById("t-dir");

tDir.innerHTML = raiz.getFolder;

let re = document.getElementById("re");

const contMensaje= document.getElementById("cont-mensaje-1");

const m1= document.getElementById("m1");
let m1Aceptar = document.getElementById("m1-aceptar");
let m1Cancelar =document.getElementById("m1-cancelar");

const m2= document.getElementById("m2");

let m2Aceptar = document.getElementById("m2-aceptar");



setFolder.addEventListener('click', ()=>{
    const dir = dialog.showOpenDialogSync( {
        properties: ['openFile', 'openDirectory']
    })  
    if (undefined === dir) {
        console.log("vacio");
    } else {
        tDir.innerHTML = dir[0];
        refrescar(dir[0]);
        console.log(raiz.getFolder);
        console.log(raiz.getMusic);

    }
});

m1Aceptar.addEventListener('click', ()=>{
    tDir.innerHTML = "";
    raiz.removeData();
    refrescar("");
    console.log(raiz.getFolder);
    console.log(raiz.getMusic);
    
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
});

vaciar.addEventListener('click', ()=>{
    contMensaje.classList.remove("inv");
    m1.classList.remove("inv");
})

re.addEventListener('click', ()=>{
    location.reload();
});