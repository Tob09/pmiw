function cambiarOpacidadBlancos(cantidad) {
  opacidadBlanco -= cantidad;
  if (opacidadBlanco < 0) {
    opacidadBlanco = 0;
  }
}


function calcularOpacidad(posicionDeY) {
  return int(map(posicionDeY, 0, height, 255, 0));
}
