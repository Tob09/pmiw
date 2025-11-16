// FUNCIÓN PARA IDENTIFICAR SI SE ESTÁ EN UNA PANTALLA FINAL
function finales () {
  if (pantallasFinales.includes(estado)) {
    modoFinal = true;
   } else {
    modoFinal = false;
   }
  }


// FUNCIÓN PARA DIBUJAR EL BOTÓN DE REINICIO
function dibujarReinicio () {
  fill(100, 150, 255);
  rect(260, 320, 120, 40);
  fill(0);
  textSize(17);
  text("Volver al inicio", 320, 344);
}


// FUNCIÓN PARA VOLVER A LA PANTALLA DE INICIO
function volverInicio () {  
  if (mouseX>260 && mouseX<360 && mouseY>320 && mouseY<360) {
    estado = 0;
    modoFinal = false;
  }

}
