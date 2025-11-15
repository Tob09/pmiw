class Enemigo{
  constructor(posX, posY, imagen){
  this.posX = posX;
  this.posY = posY;
  this.imagen = imagen;
  this.manzanas = [];
  for (let i = 0; i < 7; i++) { 
   this.manzanas[i] = new Manzana(this.posX, this.posY, imgManzana);
  }
 }


 dibujar(){
  image(this.imagen, this.posX, this.posY, 180, 150);
  
   for(let i = 0; i<7; i++){
    this.manzanas[i].mover();
    this.manzanas[i].dibujar();
  }
 }
}
