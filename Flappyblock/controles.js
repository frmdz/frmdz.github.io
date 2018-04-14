document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

let tap = false;

function kdown(e) {
  if (e.keyCode == 32 ) {
    if (tap == false && gameover == false ){
      tap=true;
      pajaro_1.aletear();
    }

    if (start == false) {
      start = true;
    } else if (gameover == true) {
      restart();
    }
  }
}

function kup(e) {
  if (e.keyCode == 32 ) {
    tap = false;
  }
}
