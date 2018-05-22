
let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

class Tubos {
  constructor() {
    this.ancho = 50;
    this.posx =canvas.width;
    this.altura = Math.random() * (300-80) +80;
    this.espacio = Math.random() * (120 -80) + 80;
    this.altura_2 = Math.random() * (300- 80) + 80;
    this.posx_2 = this.posx+200;
    this.espacio_2 = Math.random() * (120 - 80) + 80;
  }

  mover(){
    this.posx -= 2;
    this.posx_2 -=2;

    if (this.posx+this.ancho < -25) {
      this.espacio = Math.random() * (120 - 80) + 80;
      this.altura = Math.random() * (300- 80) + 80;
      this.posx = this.posx_2+200;
    }
    if (this.posx_2+this.ancho < 0) {
      this.espacio_2 = Math.random() * (120 - 80) + 80;
      this.altura_2 = Math.random() * (300- 80 ) + 80;
      this.posx_2 = this.posx+200;
    }
  }

  dibujar() {
    context.fillStyle = "#689f38";
    context.fillRect(this.posx, 0, this.ancho, this.altura);
    context.fillRect(this.posx, this.altura+this.espacio, this.ancho, canvas.height);
    context.fillRect(this.posx-2, this.altura-20, 54,20);
    context.fillRect(this.posx-2, this.altura+this.espacio, 54,20);
    context.fillRect(this.posx_2-2, this.altura_2-20, 54,20);
    context.fillRect(this.posx_2-2, this.altura_2+this.espacio_2, 54,20);
    context.fillRect(this.posx_2, 0, this.ancho, this.altura_2);
    context.fillRect(this.posx_2, this.altura_2+this.espacio_2, this.ancho, canvas.height);
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
    if (!gameover) {
      pajaro_1.velocidad = -4.5;
      pajaro_1.y -= 35;
    }
  }

  dibujar() {
    context.fillStyle = "#ffea00";
    context.fillRect(this.x-this.radio, this.y-this.radio, this.tam, this.tam);
  }

  mover() {
    if (pajaro_1.y+this.radio < canvas.height) {
      this.velocidad += this.gravedad;
      this.y += this.velocidad;
    }else {
      gameover = true;
    }
  }

  colicion() {

    if (this.x+this.radio >= tubos_1.posx && this.x-this.radio <= tubos_1.posx+tubos_1.ancho) {
      if (this.y+this.radio >= tubos_1.altura+tubos_1.espacio) {
        gameover = true;
      }else if (this.y-this.radio <= tubos_1.altura) {
        gameover = true;
      }
    }
    if (this.x+this.radio > tubos_1.posx_2 && this.x-this.radio <= tubos_1.posx_2+tubos_1.ancho) {
      if (this.y-this.radio <= tubos_1.altura_2) {
        gameover = true;
      }else if (this.y+this.radio >= tubos_1.altura_2+tubos_1.espacio_2) {
        gameover = true;
      }
    }


  }
}

function restart() {
  tubos_1.posx = canvas.width;
  tubos_1.posx_2 = tubos_1.posx+200;
  pajaro_1.y = canvas.width/3;
  pajaro_1.velocidad = -4.5;
  gameover = false;
  start = false;
}

function Principal() {
  context.clearRect(0,0,canvas.width,canvas.height);
  if (start && !gameover) {
    tubos_1.dibujar();
    tubos_1.mover();
    pajaro_1.dibujar();
    pajaro_1.colicion();
    pajaro_1.mover();
  }else if (gameover) {
    tubos_1.dibujar();
    pajaro_1.dibujar();
    //note: add a gameover screen
  }
  requestAnimationFrame(Principal);
}

let pajaro_1 = new Pajaro();
let tubos_1 = new Tubos();

let gameover = false;
let start = false;

Principal();
