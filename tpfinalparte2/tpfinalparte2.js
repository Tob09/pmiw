//Link de Youtube (Tobías Kai Aguado):  

let objJuego;
let sonidoBoton;
function setup() {
 createCanvas(640,480);
  objJuego = new Juego();
}

function preload(){
  imgPersonaje = loadImage("data/personaje.png");
  imgEnemigo = loadImage("data/enemigo.png");
  imgManzana = loadImage("data/manzana.png");
  imgFondo = loadImage("data/fondo.jpg");
  sonidoBoton = loadSound('data/boton.mp3');
}

function draw(){
 objJuego.dibujar();
}

function keyPressed(){
  objJuego.teclaPresionada(keyCode);
}

function keyReleased(){
  objJuego.teclaSoltada(keyCode);
}

function mousePressed(){
  objJuego.click(mouseX, mouseY);
}
