let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

export default class Pajaro {//Bird
  constructor() {
    //Set the initial properties.
    this.tam = 20;
    this.radio = this.tam / 2;
    this.x = canvas.width / 4;
    this.y = canvas.width / 3;
    this.gravedad = .35;
    this.velocidad = -4.5;
  }
  //Flap
  aletear() {
    this.velocidad = -4.5;
    this.y -= 35;
  }
  //Draw
  dibujar() {
    context.fillStyle = "#ffea00";
    context.fillRect(this.x - this.radio, this.y - this.radio, this.tam, this.tam);
  }
  //Move
  mover() {
    this.velocidad += this.gravedad;
    this.y += this.velocidad;
  }
  //Restart
  restart() {
    this.y = canvas.width / 3;
    this.velocidad = -4.5;
  }
}


