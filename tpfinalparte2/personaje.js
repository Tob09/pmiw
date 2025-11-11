class Personaje{
  constructor(posX, posY){
  this.posX = posX;
  this.posY = posY;
  this.miColor = color (0, 0, 255);
  this.moverIzquierda = false;
  this.moverDerecha = false;
 }

 dibujar(){
   fill(this.miColor);
   rect(this.posX, this.posY, 70, 60);
 }
 

 
mover(){
  let anchoPersonaje = 70;
 if(this.moverIzquierda){
  this.posX -= 5;
 }else if(this.moverDerecha){
  this.posX += 5;
}

 if(this.posX < 0){
  this.posX = 0;
 }
 if(this.posX > width - anchoPersonaje){
  this.posX = width - anchoPersonaje;
 }
}
 
 sigueEnJuego(){
  }
 }
