const setOp = document.getElementById("set-op");
const libOp = document.getElementById("lib-op");
const playOp = document.getElementById("play-op");

const setCont = document.getElementById("set-cont");
const libCont = document.getElementById("lib-cont");
const playCont = document.getElementById("play-cont");

setOp.addEventListener('click', ()=>{
    setCont.style.display = "block";
    libCont.style.display = "none";
    playCont.style.display = "none";

    setOp.style.borderLeft="solid 2px deeppink";
    libOp.style.borderLeft="0px";
    playOp.style.borderLeft="0px";
});

libOp.addEventListener('click', ()=>{
    setCont.style.display = "none";
    libCont.style.display = "flex";
    playCont.style.display = "none";

    setOp.style.borderLeft="0px";
    libOp.style.borderLeft="solid 2px deeppink";
    playOp.style.borderLeft="0px";
});

playOp.addEventListener('click', ()=>{
    setCont.style.display = "none";
    libCont.style.display = "none";
    playCont.style.display = "block";

    setOp.style.borderLeft="0px";
    libOp.style.borderLeft="0px";
    playOp.style.borderLeft="solid 2px deeppink";
});