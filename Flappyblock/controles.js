document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

let tap = false;

function kdown(e) {
  if (e.keyCode == 32 && tap == false && gameover == false ){
    tap=true;
    pajaro_1.aletear();
  }
  if (e.keyCode == 32 && start == false) {
    start = true;
  }
  if (e.keyCode == 32 && gameover == true) {
    restart();
  }
}

function kup(e) {
  tap = false;
}
