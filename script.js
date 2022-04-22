// KEY PLAY
window.addEventListener('keydown', function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = e.key.toLowerCase();
    
    if(!audio){
        return;
    }
    else{
        css(key);
        audio.currentTime = 0;
        audio.play();
    }
});

function css(key) {
    if(key == 'a'){
        cssA();
    }
    else if(key == 's'){
        cssS();
    }
    else if(key == 'd'){
        cssD();
    }
    else if(key == 'f'){
        cssF();
    }
    else if(key == 'g'){
        cssG();
    }
    else if(key == 'h'){
        cssH();
    }
    else if(key == 'j'){
        cssJ();
    }
    else if(key == 'k'){
        cssK();
    }
    else if(key == 'l'){
        cssL();
    }
}

// MOUSE PLAY
const playingNote = "playing-note";

const keyA = document.querySelector(".key-note-A");
keyA.addEventListener("click", function(){
    cssA();
});

const keyS = document.querySelector(".key-note-S");
keyS.addEventListener("click", function(){
    cssS();
});

const keyD = document.querySelector(".key-note-D");
keyD.addEventListener("click", function(){
    cssD();
});

const keyF = document.querySelector(".key-note-F");
keyF.addEventListener("click", function(){
    cssF();
});

const keyG = document.querySelector(".key-note-G");
keyG.addEventListener("click", function(){
    cssG();
});

const keyH = document.querySelector(".key-note-H");
keyH.addEventListener("click", function(){
    cssH();
});

const keyJ = document.querySelector(".key-note-J");
keyJ.addEventListener("click", function(){
    cssJ();
});

const keyK = document.querySelector(".key-note-K");
keyK.addEventListener("click", function(){
    cssK();
});

const keyL = document.querySelector(".key-note-L");
keyL.addEventListener("click", function(){
    cssL();
});

// PLAYING KEY CSS
function cssA() {
    let playingNoteA = "playing-note-A";
    keyA.classList.add(playingNote);
    keyA.classList.add(playingNoteA);

    let dataKeyA = 65;
    let audioA = document.querySelector(`audio[data-key="${dataKeyA}"]`);

    audioA.currentTime = 0;
    audioA.play();

    removeTransition(keyA, playingNote);
    removeTransition(keyA, playingNoteA);
}

function cssS() {
    let playingNoteS = "playing-note-S";
    keyS.classList.add(playingNote);
    keyS.classList.add(playingNoteS);
    
    let dataKeyS = 83;
    let audioS = document.querySelector(`audio[data-key="${dataKeyS}"]`);
    
    audioS.currentTime = 0;
    audioS.play();

    removeTransition(keyS, playingNote);
    removeTransition(keyS, playingNoteS);
}

function cssD() {
    let playingNoteD = "playing-note-D";
    keyD.classList.add(playingNote);
    keyD.classList.add(playingNoteD);
    
    let dataKeyD = 68;
    let audioD = document.querySelector(`audio[data-key="${dataKeyD}"]`);
    
    audioD.currentTime = 0;
    audioD.play();

    removeTransition(keyD, playingNote);
    removeTransition(keyD, playingNoteD);
}

function cssF() {
    let playingNoteF = "playing-note-F";
    keyF.classList.add(playingNote);
    keyF.classList.add(playingNoteF);
    
    let dataKeyF = 70;
    let audioF = document.querySelector(`audio[data-key="${dataKeyF}"]`);
    
    audioF.currentTime = 0;
    audioF.play();

    removeTransition(keyF, playingNote);
    removeTransition(keyF, playingNoteF);
}

function cssG() {
    let playingNoteG = "playing-note-G";
    keyG.classList.add(playingNote);
    keyG.classList.add(playingNoteG);
    
    let dataKeyG = 71;
    let audioG = document.querySelector(`audio[data-key="${dataKeyG}"]`);
    
    audioG.currentTime = 0;
    audioG.play();

    removeTransition(keyG, playingNote);
    removeTransition(keyG, playingNoteG);
}

function cssH() {
    let playingNoteH = "playing-note-H";
    keyH.classList.add(playingNote);
    keyH.classList.add(playingNoteH);
    
    let dataKeyH = 72;
    let audioH = document.querySelector(`audio[data-key="${dataKeyH}"]`);
    
    audioH.currentTime = 0;
    audioH.play();

    removeTransition(keyH, playingNote);
    removeTransition(keyH, playingNoteH);
}

function cssJ() {
    let playingNoteJ = "playing-note-J";
    keyJ.classList.add(playingNote);
    keyJ.classList.add(playingNoteJ);
    
    let dataKeyJ = 74;
    let audioJ = document.querySelector(`audio[data-key="${dataKeyJ}"]`);
    
    audioJ.currentTime = 0;
    audioJ.play();

    removeTransition(keyJ, playingNote);
    removeTransition(keyJ, playingNoteJ);
}

function cssK() {
    let playingNoteK = "playing-note-K";
    keyK.classList.add(playingNote);
    keyK.classList.add(playingNoteK);
    
    let dataKeyK = 75;
    let audioK = document.querySelector(`audio[data-key="${dataKeyK}"]`);
    
    audioK.currentTime = 0;
    audioK.play();

    removeTransition(keyK, playingNote);
    removeTransition(keyK, playingNoteK);
}

function cssL() {
    let playingNoteL = "playing-note-L";
    keyL.classList.add(playingNote);
    keyL.classList.add(playingNoteL);

    let dataKeyL = 76;
    let audioL = document.querySelector(`audio[data-key="${dataKeyL}"]`);

    audioL.currentTime = 0;
    audioL.play();
   
    removeTransition(keyL, playingNote);
    removeTransition(keyL, playingNoteL);
}

// PLAYING KEY TRANSITIONS
function removeTransition(keyNote, playingKeyNote){
    keyNote.addEventListener("transitionend", function(){
        keyNote.classList.remove(playingKeyNote);
    });
}