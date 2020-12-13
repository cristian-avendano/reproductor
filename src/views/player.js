const how = require('howler');
const ID3 = require('node-id3');
const { getMusic } = require('../ctrl/folder');

const list = listaDeMusica;
var sound = [];
let pos = 0;

const tituloCover  =document.getElementById("titulo-cover"); 
const izq  =document.getElementById("izq"); 
const play  =document.getElementById("play"); 
const stop  =document.getElementById("stop");
const der  =document.getElementById("der"); 
const vol  =document.getElementById("vol"); 

if (list.length>0) {
    sound = createSound();
    setCover(list[0]);
}

function createSound() {
    let aux = [];
    for (let i = 0; i < list.length; i++) {
        aux[i] = new how.Howl({
            src: [list[i]]
        });
    }
    return aux;
}

function setCover(url) {
    var tags = ID3.read(url);
    var image = tags.image;
    tituloCover.innerHTML = tags.title;
    var arr = new Uint8Array(image.imageBuffer);
    var blob = new Blob( [ arr ], { type: "image/png" } );
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL( blob );
    document.getElementById("imagen").src = imageUrl;
}
function changeIconPause() {
    console.log("work")
    play.style.background = "url('../public/iconos/pause-1.png')";
    play.style.backgroundSize = "cover";
    play.style.backgroundPosition = "center";
}

function changeIconPlay() {
    console.log("work")
    play.style.background = "url('../public/iconos/play-button-1.png')";
    play.style.backgroundSize = "cover";
    play.style.backgroundPosition = "center";
}



izq.addEventListener('click', ()=>{
    if (pos > 0 ) {
        sound[pos].stop();
        pos = pos -1;
        sound[pos].play();
        console.log("izq")
        setCover(list[pos])
        play.value = "Pause"
    }
    else{
        sound[pos].stop();
        sound[pos].play();
        console.log("same")
    }
    changeIconPause();
})


play.addEventListener('click', ()=>{
    if (sound[pos].playing()) {
        sound[pos].pause();
        changeIconPlay();
    }
    else{
        sound[pos].play();
        play.value = "Pause"
        console.log('work');
        changeIconPause();
    }
})

stop.addEventListener('click', ()=>{
    if (sound[pos].playing()) {
        sound[pos].stop();
        changeIconPlay();
    }
})

der.addEventListener('click', ()=>{
    if (pos < list.length-1 ) {
        sound[pos].stop();
        pos = pos +1;
        sound[pos].play();
        console.log("next")
        setCover(list[pos])
        play.value = "Pause"
    }
    else{
        console.log("same")
        sound[pos].stop();
        sound[pos].play();
    }
    changeIconPause();
})

vol.addEventListener ('input',()=>{
    how.Howler.volume(vol.value/10);
})


