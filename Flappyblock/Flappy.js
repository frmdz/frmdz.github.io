let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

let tap = false;

function kdown(e) {
  if (e.keyCode === 32 && tap==false){
    tap=true;
    pajaro_1.velocidad = -4.5;
    pajaro_1.y -= 35;

  }
}

function kup(e) {
  tap = false;
}


class Tubos {
  constructor() {
    this.ancho = 50;
    this.posx = 180;
    this.altura = 150;//80-220
    this.espacio = 150;// 110-160;
    this.altura_2 = 150;//100-220
    this.posx_2 = this.posx+200;
    this.espacio_2 = 140;// 110-140;
  }

  dibujar() {
    context.fillStyle = "#689f38";
    context.fillRect(this.posx, 0, this.ancho, this.altura);
    context.fillRect(this.posx, this.altura+this.espacio, this.ancho, canvas.height);
    context.fillRect(this.posx-5, this.altura-20, 60,20);
    context.fillRect(this.posx-5, this.altura+this.espacio, 60,20);
    context.fillRect(this.posx_2-5, this.altura_2-20, 60,20);
    context.fillRect(this.posx_2-5, this.altura_2+this.espacio_2, 60,20);
    context.fillRect(this.posx_2, 0, this.ancho, this.altura_2);
    context.fillRect(this.posx_2, this.altura_2+this.espacio_2, this.ancho, canvas.height);
  }
  mover(){
    this.posx -= 2;
    this.posx_2 -=2;

    if (this.posx+this.ancho < -25) {
      this.espacio = Math.random() * (160 - 100) + 100;
      this.altura = Math.random() * (290- 40) + 40;
      this.posx = this.posx_2+200;
    }
    if (this.posx_2+this.ancho < 0) {
      this.espacio_2 = Math.random() * (160 - 100) + 100;
      this.altura_2 = Math.random() * (290- 40 ) + 40;
      this.posx_2 = this.posx+200;
    }
  }

}

class Pajaro {
  constructor() {
    this.tam = 20;
    this.radio = this.tam/2;
    this.x = canvas.width/4;
    this.y = canvas.height/3;
    this.gravedad = .35;
    this.velocidad = -5  ;
  }
  dibujar() {
    context.fillStyle = "#ffea00";
    context.fillRect(this.x-this.radio, this.y-this.radio, this.tam, this.tam);
  }
  mover() {
    if (pajaro_1.y+this.radio < canvas.height) {
      this.velocidad += this.gravedad;
      this.y += this.velocidad;
    }
  }

}


let pajaro_1 = new Pajaro();
let tubos_1 = new Tubos();

function Principal() {
  context.clearRect(0,0,canvas.width,canvas.height);
  tubos_1.dibujar();
  tubos_1.mover();
  pajaro_1.dibujar();
  pajaro_1.mover();

  requestAnimationFrame(Principal);
}

Principal();
