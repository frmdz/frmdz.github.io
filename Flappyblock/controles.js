document.addEventListener("keydown", kdown);
document.addEventListener("keyup", kup);

let tap = false;

function kdown(e) {
  if (e.keyCode == 32 ) {
    if (!tap && !GAMEOVER){
      tap = true;
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
    tap = false;
  }
}
