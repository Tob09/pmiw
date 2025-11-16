// FUNCIÓN PARA VERIFICAR SI EL MOUSE ESTÁ SOBRE UNA OPCIÓN
function Decidir () {
    // botón opción A
    if (mouseX > 100 && mouseX < 300 && mouseY > 440 && mouseY < 470) {
      avanzarPorDecision("A");
    }
    // botón opción B 
    if (mouseX > 300 && mouseX < 500 && mouseY > 440 && mouseY < 470) {
      avanzarPorDecision("B");
    }
}


// FUNCIÓN PARA AVANZAR DESPUÉS DE UNA DECISIÓN
function avanzarPorDecision(opcion) { 
  if (estado === 5) {
    if (opcion === "A") estado = 17; 
    else estado = 6; 
  }
  else if (estado === 11) {
    if (opcion === "A") estado = 21; 
    else estado = 12; 
  }
  modoDecision = false;
}


// FUNCIÓN PARA AVANZAR Y VERIFICAR SI SE ESTÁ EN UNA DIAPOSITIVA CON DECISIÓN
function Siguiente() {
  if (mouseX > 570 && mouseX < 630 && mouseY > 440 && mouseY < 470) {
    estado++;
    //Si el número guardado en estado está dentro del arreglo pantallasConDecision, entonces se entra en modo decisión
    if (pantallasConDecision.includes(estado)) {
      modoDecision = true;
     } else {
      modoDecision = false;
     }
  }
}
