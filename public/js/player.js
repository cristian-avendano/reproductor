const how = require('howler');
const ID3 = require('node-id3');

const tituloCover  =document.getElementById("titulo-cover");
const time  =document.getElementById("time");  
const izq  =document.getElementById("izq"); 
const play  =document.getElementById("play"); 
const stop  =document.getElementById("stop");
const der  =document.getElementById("der"); 
const vol  =document.getElementById("vol"); 

function iniciar() {
    setListaMusica(list)
    if (list.length>0) {
        for (let i = 0; i < list.length; i++) {
            list[i] = raiz.getFolder + "/" +list[i];
        }
        sound = createSound();
        setCover(list[0]);
    }
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
    play.classList.remove('play');
    play.classList.add('pause');
}

function changeIconPlay() {
    play.classList.remove('pause');
    play.classList.add('play');
}

function getTime() {
    if (sound[pos].seek()<parseInt(sound[pos].duration(),10)) {

        time.value = parseInt(sound[pos].seek(),10)
        console.log(time.value)
        var t = setTimeout(function(){ getTime() }, 1000);
    }else{
        console.log('finish');
    }
}

function changePosRangeBar() {
    sound[pos].on('play',()=>{
        time.min=0;
        time.max = parseInt(sound[pos].duration(),10);
        time.value=0;
        getTime()
    })
}



izq.addEventListener('click', ()=>{
    if (pos > 0 ) {
        sound[pos].stop();
        pos = pos -1;
        sound[pos].play();
        setCover(list[pos])
    }
    else{
        sound[pos].stop();
        sound[pos].play();
    }
    changeIconPause();
    changePosRangeBar();
})


play.addEventListener('click', ()=>{
    if (sound[pos].playing()) {
        sound[pos].pause();
        changeIconPlay();
    }
    else{
        sound[pos].play();
        changePosRangeBar();
        changeIconPause();
    }
})

stop.addEventListener('click', ()=>{
    if (sound[pos].playing()) {
        sound[pos].stop();
        time.value = 0;
        changeIconPlay();
    }
})

der.addEventListener('click', ()=>{
    if (pos < list.length-1 ) {
        sound[pos].stop();
        pos = pos +1;
        sound[pos].play();
        setCover(list[pos])
    }
    else{
        sound[pos].stop();
        sound[pos].play();
    }
    changeIconPause();
    changePosRangeBar();
})

vol.addEventListener ('input',()=>{
    how.Howler.volume(vol.value/10);
})

iniciar()


