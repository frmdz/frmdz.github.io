import Pajaro from './Pajaro.js';
import Tubos from './Tubos.js';

let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

let GAMEOVER = false;
let START = false;
let TAP = false;

document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

//"Spacebar"
function kdown(e) {
  if (e.keyCode == 32 ) {
    if (!TAP && !GAMEOVER){
      TAP = true;
      pajaro_1.aletear();
    }
    if (!START) {
      START = true;
    }
  }
  if (e.keyCode == 13 && GAMEOVER) {
      restart();
  }
}

//"Intro"
function kup(e) {
  if (e.keyCode == 32 ) {
    TAP = false;
  }
}

//Detect Collision
function colision() {
  //TODO: Re-implement this.
  //1st group pipes
  if (pajaro_1.x+pajaro_1.radio >= tubos_1.posx && pajaro_1.x-pajaro_1.radio <= tubos_1.posx+tubos_1.ancho) {
    if (pajaro_1.y-pajaro_1.radio <= tubos_1.altura || pajaro_1.y+pajaro_1.radio >= tubos_1.altura+tubos_1.espacio) {
      GAMEOVER = true;
    }
  }
  //2nd group of pipes
  if (pajaro_1.x+pajaro_1.radio >= tubos_1.posx_2 &&  pajaro_1.x-pajaro_1.radio <= tubos_1.posx_2+tubos_1.ancho) {
    if (pajaro_1.y-pajaro_1.radio <= tubos_1.altura_2 || pajaro_1.y+pajaro_1.radio >= tubos_1.altura_2+tubos_1.espacio_2) {
      GAMEOVER = true;
    }
  }
  //Falling
  if (pajaro_1.y+pajaro_1.radio >= canvas.height) {
    GAMEOVER = true;
  }
}

//Restart the game.
function restart() {
  tubos_1.restart();
  pajaro_1.restart();
  GAMEOVER = false;
  START = false;
}

//Draw the screens.
function pantallas() {
  if (GAMEOVER) {
    context.fillStyle = "#fff";
    context.font = "40px Arial";
    context.fillText("Game Over", 50, canvas.height/3);
    context.font = "25px Arial";
    context.fillText("Press Enter to re-start", 40, (canvas.height/3)+40);
  }else if (!START) {
    context.fillStyle = "#fff";
    context.font = "25px Arial";
    context.fillText("Tap Space to fly", pajaro_1.x + 25, pajaro_1.y + pajaro_1.radio);
  }
}

let pajaro_1 = new Pajaro();
let tubos_1 = new Tubos();

//Main loop
function Principal() {
  //Clear the screen.
  context.clearRect(0,0,canvas.width,canvas.height);

  if (!GAMEOVER && START) {
    colision();
    pajaro_1.mover();
    tubos_1.mover();
  }
  tubos_1.dibujar();
  pajaro_1.dibujar();
  pantallas();
  //Loop.
  requestAnimationFrame(Principal);
} Principal();