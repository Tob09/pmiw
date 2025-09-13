function dibujarPatron() {
  let tamCuadrado = 50;
  let espacio = 0;

  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++) {
      let x = 400 + i * (tamCuadrado + espacio);
      let y = j * (tamCuadrado + espacio);
      noStroke();

      if (modificarColor) {
        fill(179);
      } else {
        fill(0);
      }
      rect(x, y, tamCuadrado, tamCuadrado);

      if (modificarColor) {
        fill(0);
      } else {
        fill(50);
      }
      rect(x, y + tamCuadrado - 25, 25, 25);

      triangle(x + 25, y, x, y + 25, x + 25, y + 25);
      triangle(x + 25, y + 25, x, y + 25, x + 25, y + 50);
      triangle(x + 25, y + tamCuadrado, x + 50, y + tamCuadrado - 25, x + 25, y + tamCuadrado - 25);

      fill(255, opacidadBlanco);
      rect(x + 25, y + desplazarBlanco, 25, 25);
      noFill();
    }
  }
}
