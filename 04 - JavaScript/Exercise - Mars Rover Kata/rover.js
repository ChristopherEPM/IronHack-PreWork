  var myRover = {
  position: [0,0],
  tempPosition:[0,0], 
  direction: 'N',
  status: 'OK',
  command: undefined
};
var theRock = {
    blockPosition : [Math.floor((Math.random() * 9)+1), Math.floor((Math.random() * 10))] // this secure that rock dont generate in [0,0] (the initial rover position)
};
var theMap ={
  grid: array2D(10,10,0)
};


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
// console.log(array2D); // -> array dimensional completo
// console.log("------");
// console.log(array2D[1][3]); //-> contenido de la posicion  1,3 del array multimensional
// console.log("------");
// console.log(array2D[3,3]);//->devuelve el array completo de la posicion [3]-> [3][0],[3][1],[3][2],[3][3],[3][4].......
function mapIni(){ // this initiate the objet map values
  theMap.grid[theRock.blockPosition[0]][theRock.blockPosition[1]]= "Block";
  theMap.grid[0][0]= "Rovers";
  theMap.rover = '[0,0]';
  theMap.roverNew= '[0,0]';
  theMap.roverP0 = 0;
  theMap.roverP1= 0;
  theMap.roverP0New= 0;
  theMap.roverP1New= 0;
}
function refreshGrid(){ //refresh the grid for the output. That mean the rover position, and coming back the string that indicates the array position. where was rover las time ex: '[2,2]'
  theMap.grid[theMap.roverP0][theMap.roverP1]= theMap.rover;
  theMap.grid[theMap.roverP0New][theMap.roverP1New]= "Rover";
  theMap.rover = theMap.roverNew;
  theMap.roverP1 = theMap.roverP1New;
  theMap.roverP0 = theMap.roverP0New;
}

function questionForMoves() { // solicita los movimientos para el rovers
  var moves= prompt("Please , enter the rover moves, in format 'f b l r'. Exampl: fffrfflfffbb\n f:forward \n b: back \n l: left\n r:right");  
  if(!verifyMoves(moves)){
    return false;
  }
  else{
    myRover.command = moves;
    console.log(myRover.command);
  }
  for(var i=0; i< moves.length; i++){
    var instruction = moves[i];
    if(instruction === "f" || instruction ==="b" ){ 
      if (!goMove(instruction)){
          break;
      }
    } 
    else if (instruction === 'l' || instruction === 'r'){
        goTurn(instruction);
      }
  }
  return true;
}
function verifyMoves(command){ // This verify if we input correctly the commands 
  if(command === undefined || command == "" ){
    return questionForMoves();
  }
  else if(command === null){
    return false;
  }
  else{
    for(var i = 0; i < command.length; i++){
      if(command[i] != "f" && command[i] != "b" && command[i] != "l" && command[i] != "r"){
        alert("Please write ONLY in format 'f b l r'. ");
        return questionForMoves();
      }
    }
    return true;
  }
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

function goTurn(move){ //we change the rover orientation, on base in to actual rover´s orientation (N,S,E,W), writting the indicated turn 'l'(left) or 'r' (right)
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
function existAObstacle(TempPosition){ //this compares the rover´s temporal position (before it moves with the last 'f' or 'b' command) with the "rock" position, if there is the same,we change the rover´s status to 'blocked'
  if ((theRock.blockPosition[0] === myRover.tempPosition[0]) && (theRock.blockPosition[1] === myRover.tempPosition[1])){
    myRover.status = 'BLOCKED';
    return true;
  }
  return false;
} 
function wantContinue(){ // this question if we want to continue moving rovers, if we type "yes" or "Yes" we launch another time
  var option= prompt("Want to move rover another time? type 'yes' or 'no'");
  if(option === null || option.toLowerCase() !="yes" && option.toLowerCase() !="no"){
    alert("Please, just type 'yes' or 'no'");
    return wantContinue();
  }
  else{
    return option;
  }
}
function printOutPut(){
  console.log("Last rover position : ["+ myRover.position[0] + ", " + myRover.position[1] + "]");
  console.log("Block position : ["+ theRock.blockPosition[0] + "," + theRock.blockPosition[1] + "]");
  if(myRover.command === undefined){
    console.log("Command : No command introduced");
  }
  else{
    console.log("Command :"+ myRover.command);
  }
  console.log("------");
  if(questionForMoves()){
    console.log("Final rover position: [" + myRover.position[0] + ", " + myRover.position[1] + "], Status: "+myRover.status);
    refreshGrid();
    console.log("The grid Map :\n"+ theMap.grid);
    console.log("------");
    
    if(wantContinue() == "yes" ) {
      printOutPut();
    }
    else{
      return;
    }
  }
  else{
    console.log("Not command introduced:  Mars Rover shuting down...");
    return;
  }
  
}
mapIni();
console.log("The Initial grid Map :\n"+ theMap.grid);
printOutPut();


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
//first iteration
// goForward(myRover);
// roverToW();
// roverToW();
// roverToS();
// roverToE();
// roverToN();