document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

let tap = false;

function kdown(e) {
  if (e.keyCode == 32 ) {
    if (!tap && !gameover){
      tap = true;
      pajaro_1.aletear();
    }
    if (!start) {
      start = true;
    }
  }
  if (e.keyCode == 13 && gameover) {
      restart();
  }
}

function kup(e) {
  if (e.keyCode == 32 ) {
    tap = false;
  }
}
