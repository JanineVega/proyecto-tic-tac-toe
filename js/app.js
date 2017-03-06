var turno="X";
var turno2="O";
var ready=1;
var opciones=new Array (9);

function marcar(id){
  var celda=document.getElementById(id);
  if(ready%2!=0 && opciones[id]!=0){
    celda.value=turno;
    opciones[id]=1;
    document.getElementById("1").disabled="true";
  }else if (ready%2==0 && opciones[id]!=1) {
    celda.value=turno2;
    opciones[id]=0;
  }
  ready++;
  jugadorX();
  jugadorO();
}

function jugadorX(){
if(opciones[1]==1 && opciones[2]==1 && opciones[3]==1){
  ;//Horizontal
  alert("Felicidades jugador" + " "+ turno +" "+"ganaste!.");
}else if (opciones[4]==1 && opciones[5]==1 && opciones[6]==1) { //Horizontal
  alert("Felicidades jugador" + " "+ turno +" "+"ganaste!.");
}else if (opciones[7]==1 && opciones[8]==1 && opciones[9]==1) {//Horizontal
  alert("Felicidades jugador" + " "+ turno +" "+"ganaste!.");
}else if (opciones[1]==1 && opciones[5]==1 && opciones[9]==1) {//Diagonal
  valert("Felicidades jugador" + " "+ turno +" "+"ganaste!.");
}else if (opciones[3]==1 && opciones[5]==1 && opciones[7]==1) {//Diagonal
  alert("Felicidades jugador" + " "+ turno +" "+"ganaste!.");
}else if (opciones[1]==1 && opciones[4]==1 && opciones[7]==1) {//vertical
  alert("Felicidades jugador" + " "+ turno +" "+"ganaste!.");
}else if (opciones[2]==1 && opciones[5]==1 && opciones[8]==1) {//vertical
  alert("Felicidades jugador" + " "+ turno +" "+"ganaste!.");
}else if (opciones[3]==1 && opciones[6]==1 && opciones[9]==1) {//vertical
  alert("Felicidades jugador" + " "+ turno +" "+"ganaste!.");
}

}

function jugadorO(){
if(opciones[1]==0 && opciones[2]==0 && opciones[3]==0){//Horizontal
  alert("Felicidades jugador" + " "+ turno2 +" "+"ganaste!.");
}else if (opciones[4]==0 && opciones[5]==0 && opciones[6]==0) { //Horizontal
  alert("Felicidades jugador" + " "+ turno2 +" "+"ganaste!.");
}else if (opciones[7]==0 && opciones[8]==0 && opciones[9]==0) {//Horizontal
  alert("Felicidades jugador" + " "+ turno2 +" "+"ganaste!.");
}else if (opciones[1]==0 && opciones[5]==0 && opciones[9]==0) {//Diagonal
  alert("Felicidades jugador" + " "+ turno2 +" "+"ganaste!.");
}else if (opciones[3]==0 && opciones[5]==0 && opciones[7]==0) {//Diagonal
  alert("Felicidades jugador" + " "+ turno2 +" "+"ganaste!.");
}else if (opciones[1]==0 && opciones[4]==0 && opciones[7]==0) {//vertical
  alert("Felicidades jugador" + " "+ turno2 +" "+"ganaste!.");
}else if (opciones[2]==0 && opciones[5]==0 && opciones[8]==0) {//vertical
  alert("Felicidades jugador" + " "+ turno2 +" "+"ganaste!.");
}else if (opciones[3]==0 && opciones[6]==0 && opciones[9]==0) {//vertical
  alert("Felicidades jugador" + " "+ turno2 +" "+"ganaste!.");
}
}

function reiniciar(){
location.reload();
}
