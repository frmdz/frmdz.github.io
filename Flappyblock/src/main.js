import Pajaro from './Pajaro.js';
import Tubo from './Tubo.js';

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

function kup(e) {
  if (e.keyCode == 32 ) {
    TAP = false;
  }
}

//Restart game
function restart() {
  tubo_1.restart();
  tubo_2.restart();
  pajaro_1.restart();
  GAMEOVER = false;
  START = false;
}

//Draw screens.
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
let tubo_1 = new Tubo(canvas.width);
let tubo_2 = new Tubo(canvas.width + 200);

//Main loop
function Principal() {  
  context.clearRect(0,0,canvas.width,canvas.height);//Clear the screen.
  if (!GAMEOVER && START) {
    pajaro_1.mover();
    tubo_1.mover(tubo_2.x);
    tubo_2.mover(tubo_1.x);
    GAMEOVER = pajaro_1.detectarcaida()
            || pajaro_1.detectarcolision(tubo_1)
            || pajaro_1.detectarcolision(tubo_2);
  }
  tubo_1.dibujar();
  tubo_2.dibujar();
  pajaro_1.dibujar();
  pantallas();
  requestAnimationFrame(Principal);//Loop.
} Principal();