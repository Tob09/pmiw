class Personaje{
  constructor(posX, posY, imagen){
  this.posX = posX;
  this.posY = posY;
  this.imagen = imagen;
  this.moverIzquierda = false;
  this.moverDerecha = false;
 }

 dibujar(){
   image(this.imagen, this.posX, this.posY, 150, 150);
 }
 

 
mover(){
  let anchoPersonaje = 150;
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
}
