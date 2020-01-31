var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

export default 
class Tubo {
  constructor(initial_x_pos) {
    //set the initial size and position of the pipes.
    this.width = 50;
    this.initial_x_pos = initial_x_pos;
    this.x = initial_x_pos;
    this.height = Math.random() * (300 - 80) + 80;
    this.space = Math.random() * (120 - 90) + 80;
  }
  restart() {
    //Reset the size and position of the pipes.
    this.x = this.initial_x_pos;
    this.height = Math.random() * (300 - 80) + 80;
    this.space = Math.random() * (120 - 90) + 80;
  }
  mover(new_pos) {
    //Move the pipes 2px to the left.
    this.x -= 2;
    // Reset the position after the pipes disappear from the screen.
    if (this.x + this.width < 0) {
      this.space = Math.random() * (120 - 90) + 80;
      this.height = Math.random() * (300 - 80) + 80;
      this.x = new_pos + 200;
    }
  }
  dibujar() {
    //Draw the Pipes.
    context.fillStyle = "#689f38";
    context.fillRect(this.x, 0, this.width, this.height);
    context.fillRect(this.x, this.height + this.space, this.width, canvas.height);
    context.fillRect(this.x - 2, this.height - 20, 54, 20);
    context.fillRect(this.x - 2, this.height + this.space, 54, 20);
  }
}
