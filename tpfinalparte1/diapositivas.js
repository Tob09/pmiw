// FUNCIÓN PARA CARGAR LAS IMÁGENES
function cargarImagen () {
for (let i=0; i<total; i++) {
    imagen [i] = loadImage('data/pantalla' + i + '.jpg');
  }
}


// FUNCIÓN PARA DIBUJAR LAS IMÁGENES
function dibujarImagen () {
 image(imagen[estado], width/2, height/2);
 cajaTexto (10, 400);
 dibujarBoton (600, 440);
 textAlign(CENTER);
 textSize (17);
 fill(255);
 text(textos[estado], 15, 405, 600, 80);
 }


// FUNCIÓN PARA DIBUJAR CAJA DE TEXTO
function cajaTexto(){
fill (0, 150);
rect (10, 400, 620, 70);
}


// FUNCIÓN PARA DIBUJAR BOTÓN "SIGUIENTE"
  function dibujarBoton() {
  stroke(5);
  if (modoDecision || modoFinal) {
    fill(150); // se muestra gris al estar desactivado
  } else {
    fill(100, 150, 255);
  }
  rect(570, 440, 60, 30);
  fill(255);
  noStroke();
  rect(590, 451, 15, 7);
  triangle(605, 447, 605, 462, 615, 455);
  stroke(5);
}


// TEXTOS EN BOTONES DE DECISIÓN
let textosOpciones = {
  5: ["Seguir por el bosque", "Entrar a la casa"],
  11: ["Rechazar la manzana", "Aceptar la manzana"]
};


// FUNCIÓN PARA DIBUJAR EL CARTEL CON DECISIONES
function dibujarCartelOpciones(){
fill (100, 150, 255);
rect (100, 440, 200, 30);
rect (300, 440, 200, 30);
let opciones = textosOpciones[estado]; 
fill  (0);
text(opciones[0], 200, 460);
text(opciones[1], 400, 460);
}
