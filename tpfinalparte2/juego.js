class Juego{
 constructor(){
 this.crearPersonaje();
 this.crearEnemigo();
 this.jugando = true;
 }
 
 crearEnemigo(){
  this.enemigo = new Enemigo (width/2, 50)
 }
 
 crearPersonaje(){
  this.personaje = new Personaje(width/2, 300);
 }
 
  dibujar(){ 
    if(this.jugando){
   this.personaje.dibujar();
   this.personaje.mover();
   this.enemigo.dibujar();
   this.controlarColisiones();
    }
  }
 
 iniciar(){
 }
 
 personajeGano(){
 }
 
 personajePerdio(){
  this.jugando = false;
  fill(0, 0, 0, 150); 
  rect(0, 0, width, height);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("¡Perdiste!", width / 2, height / 2);
}
 
 reiniciarJuego(){
 }
 
 
 teclaPresionada(keyCode){
  if(keyCode == LEFT_ARROW){
    this.personaje.moverIzquierda = true;
  }else if(keyCode == RIGHT_ARROW){
    this.personaje.moverDerecha = true;
  }
}

teclaSoltada(keyCode){
  if(keyCode == LEFT_ARROW){
    this.personaje.moverIzquierda = false;
  }else if (keyCode == RIGHT_ARROW){
    this.personaje.moverDerecha = false;
  }
 }
 
 controlarColisiones(){
   for(let i = 0; i < this.enemigo.manzanas.length; i++){
    let distancia = dist(this.enemigo.manzanas[i].posX, this.enemigo.manzanas[i].posY, this.personaje.posX, this.personaje.posY);
    if(distancia < 40){
      this.personajePerdio();
      this.jugando = false;
    }
   }
  }
 }
