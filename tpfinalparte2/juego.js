class Juego{
 constructor(){
 this.estado = 0;
 }
 
 /*
 Estados:
 0 = inicio
 1 = instrucciones
 2 = jugando
 3 = ganaste
 4 = perdiste
 */
 
 iniciar(){
   image(imgFondo, 0, 0, width, height);
   this.crearPersonaje();
   this.crearEnemigo();
   this.manzanasEsquivadas = 0;
   this.estado = 2;
 }
 
 crearEnemigo(){
  this.enemigo = new Enemigo (380, 90, imgEnemigo);
 }
 
 crearPersonaje(){
  this.personaje = new Personaje(310, 350, imgPersonaje);
 }
 
  dibujar(){ 
    image(imgFondo, 0, 0, width, height);
   if (this.estado === 0){
     this.dibujarPantallaInicio();
   }else if(this.estado === 1){
     this.dibujarPantallaInstrucciones();
     this.dibujarBotonVolver();
   }else if(this.estado === 2){
     this.personaje.dibujar();
     this.personaje.mover();
     this.enemigo.dibujar();
     this.controlarColisiones();
   }else if(this.estado === 3){
     this.dibujarPantallaFinalBueno();
     this.dibujarBotonVolver();
   }else if(this.estado === 4){
     this.dibujarPantallaFinalMalo();
     this.dibujarBotonVolver();
   }
  }
 
 dibujarPantallaInicio(){
  image(imgFondo, 0, 0, width, height);
  
  //título
  fill(246, 182, 64);
  textAlign(CENTER, CENTER);
  textSize(50);
  text("BlancaNieves", width/2, 100);
  
  //botón jugar
  rectMode(CENTER);
  fill(163, 56, 56);
  rect(width/2, 220, 200, 60);  
  fill(246, 182, 64);
  textSize(22);
  text("Jugar", width/2, 220);
  
  //botón instrucciones
  fill(163, 56, 56);
  rect(width/2, 310, 200, 60);  
  fill(246, 182, 64);
  text("Instrucciones", width/2, 310);
  
  //créditos
  textSize(13);
  text("Juego creado por Tobías Kai Aguado y Carolina Porreca", width/2, 470 );
  rectMode(CORNER);
 }
 
 dibujarPantallaInstrucciones(){
  fill(0, 0, 0, 150); 
  rect(0, 0, width, height);
  fill(255);
  textSize(32);
  textAlign(CENTER, TOP);
  text("La bruja malvada no deja de insistirle a blancanieves para que acepte las manzanas que le ofrece! Esquiva las manzanas con las flechas del teclado. ¡No dejes que te alcancen!", 50, 120, 540, 300);
 }
 
 dibujarPantallaFinalBueno(){
  fill(0, 0, 0, 150); 
  rect(0, 0, 640, 480);
  fill(246, 182, 64);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("¡Ganaste!", width/2, height/2);
 }
 
 dibujarPantallaFinalMalo(){
  fill(0, 0, 0, 150); 
  rect(0, 0, width, height);
  fill(246, 182, 64);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("¡Perdiste!", width / 2, height / 2);
}

 dibujarBotonVolver() {
  fill(163, 56, 56);
  rect(480, 420, 140, 40);
  fill(246, 182, 64);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("VOLVER", 550, 440);
}
 
 manzanaEsquivada(){
  if (this.estado !== 2) return;
  this.manzanasEsquivadas++;
  if (this.manzanasEsquivadas >= 40) {
    this.estado = 3;
  }
}
 
 click(mouseX, mouseY){
   if(this.estado === 0){
    if(mouseX > 220 && mouseX < 420 && mouseY > 190 && mouseY < 250){
      if (sonidoBoton.isLoaded()){
             sonidoBoton.play();
          }
      this.iniciar();
      }
      if (mouseX > 220 && mouseX < 420 && mouseY > 280 && mouseY < 340){
        if (sonidoBoton.isLoaded()){
             sonidoBoton.play();
          }
      this.estado = 1;  
    }
  }
   if (this.estado !== 2){
   if (mouseX > 480 && mouseX < 620 && mouseY > 420 && mouseY < 460) {
     this.estado = 0; 
     if (sonidoBoton.isLoaded()){
         sonidoBoton.play();
    }
   }
  }
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
    let distancia = dist(this.enemigo.manzanas[i].posX, this.enemigo.manzanas[i].posY, this.personaje.posX, this.personaje.posY + 25);
    if(distancia < 30){
      this.estado = 4;
    }
   }
  }
 }
