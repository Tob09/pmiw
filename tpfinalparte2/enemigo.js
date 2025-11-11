class Enemigo{
  constructor(posX, posY){
  this.posX = posX;
  this.posY = posY;
  this.miColor = color(0);
  this.manzanas = [];
  let posicionesX = [80, 140, 200, 260, 320];
  let distanciaY = 350;
  for (let i = 0; i < 12; i++) { 
   let x = random(posicionesX);
   let y = -i * distanciaY - 100;
   this.manzanas[i] = new Manzana(x, y);
  }
 }


 dibujar(){
  fill(this.miColor);
  ellipse(this.posX, this.posY, 50, 50);
   for(let i = 0; i<12; i++){
    this.manzanas[i].mover();
    this.manzanas[i].dibujar();
  }
 }
}
