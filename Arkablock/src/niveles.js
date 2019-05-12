import {context} from './main.js';

export let FILAS, NIVEL;

export function setLvl(lvlnumber) {
  switch(lvlnumber){
    case 1:
      NIVEL = [[2, 2, 2 ,2 ,2 ,2 ,2 ,2 ,2, 2 ,2 ,2 ,2],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1]];
      FILAS = NIVEL.length;
      break;
    
    case 2:
      NIVEL = [[2, 2, 2 ,2 ,2 ,2 ,2 ,2 ,2, 2 ,2 ,2 ,2],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1]];

      FILAS = NIVEL.length;
      break;

    case 3:
      NIVEL = [[2, 2, 2 ,2 ,2 ,2 ,2 ,2 ,2, 2 ,2 ,2 ,2],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 0, 0, 1, 0, 0, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 0, 0, 1, 0, 0, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 0, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 0, 1, 1, 1, 0, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 0, 0, 0, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [2, 2, 2 ,2 ,2 ,2 ,2 ,2 ,2, 2 ,2 ,2 ,2],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [2, 2, 2 ,2 ,2 ,2 ,2 ,2 ,2, 2 ,2 ,2 ,2],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1],
              [2, 2, 2 ,2 ,2 ,2 ,2 ,2 ,2, 2 ,2 ,2 ,2],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1 ,1]];

      FILAS = NIVEL.length;
      break;
  }
}

export function dibujarBloques() {
    for (let i=0; i<FILAS; i++) {
      for (let j=0; j<13; j++) {
        if (NIVEL[i][j]) {
          if (NIVEL[i][j] == 2) {
              context.fillStyle = "#bdbdbd";
            }else {
              context.fillStyle = "white";
            }
          context.fillRect(2+(46*j), 50+(19*i), 44, 17);
        }
      }
    }
  }