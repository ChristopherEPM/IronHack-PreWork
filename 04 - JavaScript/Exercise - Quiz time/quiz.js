var user = {}
var responses = []

function question1() {
  var name = prompt('What is your name?')
  user.name = name
}



function question2() {

  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true;
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false;
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}


function question3() {
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js) {
    // your own answers
    case "java":
    	secondQuestion = false;
    break;
    case "livescript":
    	secondQuestion = true;
    break;
    case "javalive":
    	secondQuestion = false;
    break;
    case "scriptyscript":
    	secondQuestion = false;
    break;
    default:
    	alert("Please answer Java,LiveScript,JavaLive or ScriptyScript");
    	return question3();
    break;
  }
  responses.push(secondQuestion);
}
function question4(){
	var simpsons = prompt("How many sons have Homer simpson?");
	simpsons = Math.floor(simpsons);
	if(isFinite(simpsons) === false){
		alert("Please answer with a numeber (1,2,3,4.....");
    return question4();
	}
	else if((isFinite(simpsons) === true) && simpsons===3){
		thirdQuestion = true;	
	}
	else{
		thirdQuestion = false; 	
	}
	responses.push(thirdQuestion);
}
function question5(){
	var evenNumbers= prompt("Write five different even numbers separated by ','.Ex: 2,4,6,8,10");
	var arrayNumeros = evenNumbers.split(",").map(Number);
	if(arrayNumeros.length!=5 || isNumber(arrayNumeros) === false || isDiff(arrayNumeros) === false){
		alert("Please write only FIVE DIFFERENT NUMBERS separated by ','");
		return question5();
	}
	else{
		responses.push(isEven(arrayNumeros));
	}
}
function isNumber(array){
	for (var i=0; i<array.length; i++){
		if(isFinite(array[i]) === false){
			return false;	
		}
	}
	return true;
}
function isEven(array){
	for (var i=0; i<array.length; i++){
		if(array[i] %2 !=0){
			return false;	
		}
	}
	return true;
}
function isDiff(array){
	for(var i=0; i< (array.length -1); i++){
		for(var x=i+1; x< array.length; x++){
			if(array[i]==array[x]){
				return false;
			}
		}	
	}
	return true;
}
function countResponses(array,comparison){
	var count=0;
	for (var i=0; i<array.length; i++){
		if(array[i]===comparison){
			count +=1;
		}
	}
	console.log(count);
	return count;
}
function showResult(){
	user.fails = countResponses(responses,false);
	user.success = countResponses(responses,true);
	console.log(user);
	alert (user.name +":\n - Correct answers = "+user.success+"\n - Incorrect answers = "+user.fails+"");
}
question1();
question2();
question3();
question4();
question5();
showResult();