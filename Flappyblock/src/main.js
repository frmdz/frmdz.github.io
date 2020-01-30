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

function kup(e) {
  if (e.keyCode == 32 ) {
    TAP = false;
  }
}

//Detect Collision
function colision() {
  const helper = (p_x, p_y, p_r, t_x, t_w, t_h, t_e) => (p_x+p_r >= t_x && p_x-p_r <= t_x+t_w) && (p_y-p_r <= t_h || p_y+p_r >= t_h+t_e)
  GAMEOVER = (pajaro_1.y+pajaro_1.radio >= canvas.height)
            || helper(pajaro_1.x, pajaro_1.y, pajaro_1.radio, tubos_1.posx, tubos_1.ancho, tubos_1.altura, tubos_1.espacio)
            || helper(pajaro_1.x, pajaro_1.y, pajaro_1.radio, tubos_1.posx_2, tubos_1.ancho, tubos_1.altura_2, tubos_1.espacio_2)
}

//Restart game
function restart() {
  tubos_1.restart();
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
let tubos_1 = new Tubos();

//Main loop
function Principal() {  
  context.clearRect(0,0,canvas.width,canvas.height);//Clear the screen.
  if (!GAMEOVER && START) {
    colision();
    pajaro_1.mover();
    tubos_1.mover();
  }
  tubos_1.dibujar();
  pajaro_1.dibujar();
  pantallas();
  requestAnimationFrame(Principal);//Loop.
} Principal();