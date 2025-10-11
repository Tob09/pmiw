//Tobías Kai Aguado y Carolina Porreca
//Links: 
//video de YouTube de Tobías:
//video de Youtube de Carolina:

let imagen = [];
let estado = 0;
let textos;
let total = 24;
let modoDecision = false;
let modoFinal = false;
let pantallasConDecision = [5, 11];
let pantallasFinales = [16, 20, 23];
let musicaFondo;
let sonidoClick;
let musicaIniciada = false;

function preload(){
  cargarImagen ();
  textos = loadStrings('data/textos.txt');
  soundFormats('mp3', 'ogg');
  musicaFondo = loadSound('data/musica.mp3');
  sonidoClick = loadSound('data/click.mp3');
}

function setup() {
 createCanvas(640, 480)
 imageMode(CENTER);
  musicaFondo.amp(0.3);
  musicaFondo.loop();
}

function draw(){
  background (255);
  dibujarImagen ();
  if (modoDecision) {
  dibujarCartelOpciones();
 }
  if (modoFinal) {
  dibujarReinicio ();
 }
}

function mousePressed() {
  if (sonidoClick && sonidoClick.isLoaded()) {
    sonidoClick.amp(0.3);
    sonidoClick.play();
  }

  if (modoDecision) {
    Decidir();
  } else if (modoFinal) {
    volverInicio();
  } else {
    Siguiente();
  }

  finales();
}
