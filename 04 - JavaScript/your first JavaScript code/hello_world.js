console.log("Hello, world!");
console.log(  "This needs to be in quotes or it won't work!"  );
console.log(  "Help! I'm trapped in the computer."  );// this is a comment
//this is a second comment
console.log(555);
//MATH AND OTHER OPERATIONS
// Addition +
console.log(  10 + 5  );

// Subtraction -
console.log(  7 - 3  );

// Multiplication *
console.log(  6 * 7  );

// Division /
console.log(  8 / 2  );
console.log(  5 / 2  );

// Remainder %
console.log(  6 % 3  );
console.log(  8 % 3  );

//TEXT COncatenation
console.log(  "Iron" + "hack"  );
console.log("Chris"+25);
var city;
city ="orihuela";
console.log(city);
var country123 =1;
console.log(country123);
//
////////
var country;
country = "Australia";
if (country < "Belgium") {
    console.log(country + " is less than Belgium!");
}
country = "!Australia";
if (country > "Australia") {
    console.log(country + " is greater than Australia!");
}
////
var number;
number = 101;
if (number !== 101 && number < 25 || number > 100) {
    console.log(number + " isn't 101 AND is less than 25 OR is greater than 100.");
}
//---- LOOPS
var text ="la"
for (i = 1;  i <= 10;  i++) {
    console.log(text);
    text +="la";
}
///
var isTrue = true;
var count = 5;
while (isTrue) {
    console.log(count);
    if (count < 3) {
            isTrue = false;
    }
    count--;
}
function claimForCountry (country, thing) {
    var claim;

    claim = "In the name of " + country + " I claim this " + thing + "!";

    return claim;
}
var message;
message = claimForCountry("Spain", "land");
console.log(message);
message = claimForCountry("Italy", "pizza");
console.log(message);
////////7
// No parameters
function hi () {
    return "Hi!";
}
console.log( hi() );

// Five parameters
function addFiveNumbers (n1, n2, n3, n4, n5) {
    return n1 + n2 + n3 + n4 + n5;
}
console.log( addFiveNumbers(10, 20, 30, 5, 7) );

console.log("A",12,"porquesi");
/////// EXERCISE///////
function countDown(number){
    while (number>0){
        console.log(number);
        number--;
    }
    console.log("Blast off!");
}
countDown(10);
///--- ARRAYS
var countries, i;

countries = [ "Russia", "Finland", "Morocco", "Brazil" ];

console.log(countries);
// Russia
console.log("The first country is " + countries[0] + "!");
// Finland
console.log("The second country is " + countries[1] + "!");
for (i = 0; i < countries.length; i = i + 1) {
    console.log(countries[i]);
}
countries.push( "Canada" );
countries.push( "Mexico", "Japan" );

console.log(countries);

//------OBJETOS
var country;

country = {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo"
};

console.log(country);
console.log( country["name"] );
console.log( country.continent );

country["language"] = "Spanish";
country.population = 3324460;
country.name = "Eastern Republic of Uruguay";

console.log(country);
// recorriendo un objeto
var key;
for (key in country) {
    console.log("This country's " + key + " is " + country[key] + ".");
}

//// EXERCISE
var names,tam,text;
text="";
names =["Joan","Syndi","mandy","Eli"];
tam=names.length-1;
function girls (names){
    for(i=0;i<=tam;i++){
        if(i<=tam-2){
            text= text+names[i]+", ";
        }
        else if(i==tam-1){
            text +=names[i]+" and ";
        }
        else{
            text +=names[i];
        }
    }
    console.log(text);
}
girls(names);
///
var pc;
var item = [];
pc = {
    system: "windows 10",
    processor: "i7",
    memory: "16GB ram",
    hd: "SSD 256GB"
};

function makingAnArrayFromAObjet(personalcomputer){
    for(key in personalcomputer){
        item.push(personalcomputer[key]);
    }
    console.log("Config: "+item);
}
makingAnArrayFromAObjet(pc);