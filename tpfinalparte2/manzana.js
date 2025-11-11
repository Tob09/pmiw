class Manzana{
  constructor(posX, posY){
  this.posX = posX;
  this.posY = posY;
  this.miColor = color (150, 0, 0);
  this.enPantalla = true;
 }

 dibujar(){
   fill(255,0,0);
   ellipse(this.posX, this.posY, 60, 60);
 }
 
 mover(){
   this.posY += 3; //velocidad de la caida de la manzana
  }
}
