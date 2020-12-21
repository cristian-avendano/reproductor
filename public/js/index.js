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
});

libOp.addEventListener('click', ()=>{
    setCont.style.display = "none";
    libCont.style.display = "flex";
    playCont.style.display = "none";
});

playOp.addEventListener('click', ()=>{
    setCont.style.display = "none";
    libCont.style.display = "none";
    playCont.style.display = "block";
});