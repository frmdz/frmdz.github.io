var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

export default 
class Tubos {
  constructor() {
    //set the initial size and position of the pipes.
    this.ancho = 50;
    this.posx = canvas.width;
    this.altura = Math.random() * (300 - 80) + 80;
    this.espacio = Math.random() * (120 - 90) + 80;
    this.posx_2 = this.posx + 200;
    this.altura_2 = Math.random() * (300 - 80) + 80;
    this.espacio_2 = Math.random() * (120 - 90) + 80;
  }
  restart() {
    //Reset the size and position of the pipes.
    this.posx = canvas.width;
    this.altura = Math.random() * (300 - 80) + 80;
    this.espacio = Math.random() * (120 - 90) + 80;
    this.posx_2 = this.posx + 200;
    this.altura_2 = Math.random() * (300 - 80) + 80;
    this.espacio_2 = Math.random() * (120 - 90) + 80;
  }
  mover() {
    //Move the pipes 2px to the left.
    this.posx -= 2;
    this.posx_2 -= 2;
    // Reset the position after the pipes disappear from the screen.
    if (this.posx + this.ancho < 0) {
      this.espacio = Math.random() * (120 - 90) + 80;
      this.altura = Math.random() * (300 - 80) + 80;
      this.posx = this.posx_2 + 200;
    } else if (this.posx_2 + this.ancho < 0) {
      this.espacio_2 = Math.random() * (120 - 90) + 80;
      this.altura_2 = Math.random() * (300 - 80) + 80;
      this.posx_2 = this.posx + 200;
    }
  }
  dibujar() {
    //Draw the Pipes.
    context.fillStyle = "#689f38";
    context.fillRect(this.posx, 0, this.ancho, this.altura);
    context.fillRect(this.posx, this.altura + this.espacio, this.ancho, canvas.height);
    context.fillRect(this.posx_2, 0, this.ancho, this.altura_2);
    context.fillRect(this.posx_2, this.altura_2 + this.espacio_2, this.ancho, canvas.height);
    context.fillRect(this.posx - 2, this.altura - 20, 54, 20);
    context.fillRect(this.posx - 2, this.altura + this.espacio, 54, 20);
    context.fillRect(this.posx_2 - 2, this.altura_2 - 20, 54, 20);
    context.fillRect(this.posx_2 - 2, this.altura_2 + this.espacio_2, 54, 20);
  }
}
