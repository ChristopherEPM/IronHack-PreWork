  var myRover = {
  position: [0,0],
  tempPosition:[0,0], 
  direction: 'N',
  status: 'OK'
};
var theRock = {
    blockPosition : [Math.floor((Math.random() * 10) ), Math.floor((Math.random() * 10) )]
};
var theMap ={
  grid: array2D(10,10,0),
  rover: '[0,0]',
  roverNew: '[0,0]',
  roverP0: 0,
  roverP1: 0,
  roverP0New: 0,
  roverP1New: 0
};
theMap.grid[theRock.blockPosition[0]][theRock.blockPosition[1]]= "Block";
theMap.grid[0][0]= "Rovers";
function secureRock(){// Nos aseguramos que el obstaculo no se genera en la posicion inicial del rovers
  if(theRock.blockPosition[1]=== 0 && theRock.blockPosition[0]==theRock.blockPosition[1]){
    theRock.blockPosition[1]= Math.floor((Math.random() * 10) );
    if(theRock.blockPosition[1]=== 0){
       return secureRock();
    }
  }
}

//////FIRST ITERATION
// function roverToN(rover){
//   console.log("rovers moving to N");
//   myRover.direction ="N";
//   goForward(myRover);
// }
// function roverToS(rover){
//   console.log("rovers moving to S");
//   myRover.direction ="S";
//   goForward(myRover);
// }
// function roverToW(rover){
//   console.log("rovers moving to W");
//   myRover.direction ="W";
//   goForward(myRover);
  
// }
// function roverToE(rover){
//   console.log("rovers moving to E");
//   myRover.direction ="E";
//   goForward(myRover);
// }
// function goForward(rover) {
//   switch(rover.direction) {
//     case 'N':
//       if(rover.position[0]==9){
//         rover.position[0]=-1;
//         //temporalPosition=rover.position[0]=-1;
//       }
//       rover.position[0]++;
//       break;
//     case 'E':
//       if(rover.position[1]==9){
//           rover.position[1]=-1;
//         }
//       rover.position[1]++;
//       break;
//     case 'S':
//       if(rover.position[0]==0){
//         rover.position[0]=10;
//       }
//       rover.position[0]--;
//       break;
//     case 'W':
//       if(rover.position[1]==0){
//         rover.position[1]=10;
//       }
//       rover.position[1]--;
//       break;
//   };

//   console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
// }
function array2D(numrows, numcols, initial){//generamos un array bidimensional
   var arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var x = 0; x < numcols; ++x){
         columns[x] = "["+i+","+x+"]"; // si quisiera el valor incial solo sustituir por initial
      }
      arr[i] = columns;
    }
    return arr;
}
function refreshGrid(){
  theMap.grid[theMap.roverP0][theMap.roverP1]= theMap.rover;
  theMap.grid[theMap.roverP0New][theMap.roverP1New]= "Rover";
  theMap.rover = theMap.roverNew;
  theMap.roverP1 = theMap.roverP1New;
  theMap.roverP0 = theMap.roverP0New;
}

// console.log(array2D); // -> array dimensional completo
// console.log("------");
// console.log(array2D[1][3]); //-> contenido de la posicion  1,3 del array multimensional
// console.log("------");
// console.log(array2D[3,3]);//->devuelve el array completo de la posicion [3]-> [3][0],[3][1],[3][2],[3][3],[3][4].......



function questionForMoves() { // solicita los movimientos para el rovers
  var moves= prompt("Please , enter the rover moves, in format 'f b l r'. Exampl: fffrfflfffbb Exampl: fffrfflfffbb \n f:forward \n b: back \n l: left\n r:right");
  verifyMoves(moves);
  for(var i=0; i< moves.length; i++){
    var instruction = moves[i];
    if(instruction === "f" || instruction ==="b" ){ 
      if (!goMove(instruction)){
          break;
      }
    } 
    else if (instruction === 'l' || instruction === 'r') 
      {
        goTurn(instruction);
      }
  }
 
}
function verifyMoves(comand){ //verifica si  se han introducido correctamente los comandos de movimientos
  if(comand === "" || comand === null){
    return questionForMoves();
  }
  for(var i = 0; i < comand.length; i++){
    if(comand[i] != "f" && comand[i] != "b" && comand[i] != "l" && comand[i] != "r"){
      alert("Please write ONLY in format 'f b l r'. ");
      return questionForMoves();
    }
  }
  myRover.comands=comand;
}

function goMove(move){ //cambiamos la posición del rovers segun su orientación
  var pos0 = 0, pos1 = 0;
    // NORTH
    if (myRover.direction === 'N'){ 
      pos0 = 1;
    }
    // SOUTH
    else if (myRover.direction === 'S'){ 
      pos0 = -1;
    }
    // EAST
    else if (myRover.direction === 'E'){ 
      pos1 = 1;
    }
    // WEST
    else if (myRover.direction === 'W'){
      pos1 = -1;
    }
    // BACK
    if (move === 'b'){ 
      pos0 *= -1;
      pos1 *= -1;
    }
    if(myRover.position[0] == 9 && pos0 == 1){
      myRover.tempPosition[0] = 0;
    }
    else if(myRover.position[0] == 0 && pos0 == -1){
      myRover.tempPosition[0] = 9;
    }
    else{
      myRover.tempPosition[0] += pos0;
    }
    if(myRover.position[1] == 9 && pos1 == 1){
      myRover.tempPosition[1] = 0;
    }
    else if(myRover.position[1] == 0 && pos1 == -1){
      myRover.tempPosition[1] = 9;
    }
    else{
      myRover.tempPosition[1] += pos1;
    }
    if (existAObstacle(myRover.empPosition)){  //comporbamos si hay algun obstaculo en la posicion a la que se va a desplazar, si no lo hay, se desplaza.
      return false;
    }
    else{
      myRover.position[0] = myRover.tempPosition[0];
      myRover.position[1] = myRover.tempPosition[1];
      theMap.roverP0New =myRover.position[0];
      theMap.roverP1New =myRover.position[1];
      theMap.roverNew= "["+myRover.position[0]+","+myRover.position[1]+"]";

      return true;
    }
}

function goTurn(move){ //cambiamos la orientación del rovers segun su orientación actual (N,S,E,W) y el giro indicado (l-Left,r-Right)
  // TURN LEFT
    if (move === 'l') {
      // NORTH --> WEST
      if (myRover.direction === 'N'){ 
        myRover.direction = 'W';
      }
      // SOUTH --> EAST
      else if (myRover.direction === 'S'){ 
        myRover.direction = 'E';
      }
      // EAST --> NORTH
      else if (myRover.direction === 'E'){ 
        myRover.direction = 'N';
      }
      // WEST --> SOUTH
      else if (myRover.direction === 'W'){ 
        myRover.direction = 'S';
      }
    } 
    // TURN RIGHT
    else if (move === 'r'){
      // NORTH --> EAST
      if (myRover.direction === 'N'){ 
        myRover.direction = 'E';
      }
      // SOUTH --> WEST
      else if (myRover.direction === 'S'){ 
        myRover.direction = 'W';
      }
      // EAST --> SOUTH
      else if (myRover.direction === 'E'){
        myRover.direction = 'S';
      }
      // WEST --> NORTH
      else if (myRover.direction === 'W'){    
        myRover.direction = 'N';
      }  
    }

}
function existAObstacle(TempPosition){
  if ((theRock.blockPosition[0] === myRover.tempPosition[0]) && (theRock.blockPosition[1] === myRover.tempPosition[1])){
    myRover.status = 'BLOCKED';
    return true;
  }
  return false;
} 
function wantContinue(){
  var option= prompt("Want to move rover another time? type 'yes' or 'no'");
  option = option.toLowerCase();
  if(option !="yes" && option !="no"){
    alert("Please, just type 'yes' or 'no'");
    return wantContinue();
  }
  if(option =="yes"){
    return option;
  }
  else if(option =="no"){
    return option;
  }

}
function printOutPut(){
  console.log("Last rover position : ["+ myRover.position[0] + ", " + myRover.position[1] + "]");
  console.log("Block position : ["+ theRock.blockPosition[0] + "," + theRock.blockPosition[1] + "]");
  console.log("------");
  questionForMoves();
  console.log("Final rover position: [" + myRover.position[0] + ", " + myRover.position[1] + "], Status: "+myRover.status);
  refreshGrid();
  console.log("The grid Map :\n"+ theMap.grid);
  console.log("------");
  
  var finish = wantContinue();  

  if(finish == "yes" ) {
    printOutPut();
  }
}
secureRock();
console.log("The Initial grid Map :\n"+ theMap.grid);
printOutPut();
//first iteration
// goForward(myRover);
// roverToW();
// roverToW();
// roverToS();
// roverToE();
// roverToN();

