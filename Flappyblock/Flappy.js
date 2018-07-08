
let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

let GAMEOVER = false;
let START = false;

class Tubos {
  constructor() {
    this.ancho = 50;
    this.posx =canvas.width;
    this.altura = Math.random() * (300-80) + 80;
    this.espacio = Math.random() * (120-90) + 80;
    this.posx_2 = this.posx + 200;
    this.altura_2 = Math.random() * (300-80) + 80;
    this.espacio_2 = Math.random() * (120-90) + 80;
  }
  restart() {
    this.posx = canvas.width;
    this.altura = Math.random() * (300-80) + 80;
    this.espacio = Math.random() * (120-90) + 80;
    this.posx_2 = this.posx + 200;
    this.altura_2 = Math.random() * (300-80) + 80;
    this.espacio_2 = Math.random() * (120-90) + 80;
  }
  mover() {
    this.posx -= 2;
    this.posx_2 -=2;
    if (this.posx+this.ancho < 0) {
      this.espacio = Math.random() * (120 - 90) + 80;
      this.altura = Math.random() * (300- 80) + 80;
      this.posx = this.posx_2 + 200;
    }
    if (this.posx_2+this.ancho < 0) {
      this.espacio_2 = Math.random() * (120 - 90) + 80;
      this.altura_2 = Math.random() * (300- 80 ) + 80;
      this.posx_2 = this.posx + 200;
    }
  }
  dibujar() {
    context.fillStyle = "#689f38";
    context.fillRect(this.posx, 0, this.ancho, this.altura);
    context.fillRect(this.posx, this.altura+this.espacio, this.ancho, canvas.height);
    context.fillRect(this.posx_2, 0, this.ancho, this.altura_2);
    context.fillRect(this.posx_2, this.altura_2+this.espacio_2, this.ancho, canvas.height);
    context.fillRect(this.posx-2, this.altura-20, 54,20);
    context.fillRect(this.posx-2, this.altura+this.espacio, 54,20);
    context.fillRect(this.posx_2-2, this.altura_2-20, 54,20);
    context.fillRect(this.posx_2-2, this.altura_2+this.espacio_2, 54,20);
  }
}

class Pajaro {
  constructor() {
    this.tam = 20;
    this.radio = this.tam/2;
    this.x = canvas.width/4;
    this.y = canvas.width/3;
    this.gravedad = .35;
    this.velocidad = -4.5  ;
  }
  aletear() {
      pajaro_1.velocidad = -4.5;
      pajaro_1.y -= 35;
  }
  dibujar() {
    context.fillStyle = "#ffea00";
    context.fillRect(this.x-this.radio, this.y-this.radio, this.tam, this.tam);
  }
  mover() {
    this.velocidad += this.gravedad;
    this.y += this.velocidad;
  }
  restart(){
    this.y = canvas.width/3;
    this.velocidad = -4.5;
  }
}

function colision() {
  //1er tubo
  if (pajaro_1.x+pajaro_1.radio >= tubos_1.posx &&  pajaro_1.x-pajaro_1.radio <= tubos_1.posx+tubos_1.ancho) {
    if (pajaro_1.y-pajaro_1.radio <= tubos_1.altura || pajaro_1.y+pajaro_1.radio >= tubos_1.altura+tubos_1.espacio) {
      GAMEOVER = true;
    }
  }
  //2do tubo
  if (pajaro_1.x+pajaro_1.radio >= tubos_1.posx_2 &&  pajaro_1.x-pajaro_1.radio <= tubos_1.posx_2+tubos_1.ancho) {
    if (pajaro_1.y-pajaro_1.radio <= tubos_1.altura_2 || pajaro_1.y+pajaro_1.radio >= tubos_1.altura_2+tubos_1.espacio_2) {
      GAMEOVER = true;
    }
  }
  //caida
  if (pajaro_1.y+pajaro_1.radio >= canvas.height) {
    GAMEOVER = true;
  }
}

function restart() {
  tubos_1.restart();
  pajaro_1.restart();
  GAMEOVER = false;
  START = false;
}

function Principal() {
  context.clearRect(0,0,canvas.width,canvas.height);
  if (!START) {
    //start screen
  }
  else if (START && !GAMEOVER) {
    //game
    colision();
	pajaro_1.dibujar();
    tubos_1.dibujar();
	pajaro_1.mover();
    tubos_1.mover();
  }
  else if (GAMEOVER) {
    //gamover screen
    tubos_1.dibujar();
    pajaro_1.dibujar();
  }
  requestAnimationFrame(Principal);
}

let pajaro_1 = new Pajaro();
let tubos_1 = new Tubos();

Principal();
