
const rain = prompt("How many inches of rain fell?");

let rainFall = rain;

let bushelAmt = null;

const avgYield = 50;
let totalYield = null;
let fertType = null;
let appFert = prompt("Did you use fertilizer?");
if(appFert == "yes"){
  if ( !(fertType == "regular" || fertType == "premium")) {
    fertType = prompt("Did you use regular or premium fertilizer?");
    }

}


function repeatStringNumTimes(str, num){
  return str.repeat(rainFall);
}
console.log(repeatStringNumTimes('*', rainFall));

//function bushelAmt(){     put this "}"curly at the end of the function 
if (rainFall >= 20) {
  bushelAmt = avgYield * 0.9;
}
else if (rainFall < 10) {
  bushelAmt = avgYield * 0.8;
} 
else {
  bushelAmt = 50;
}
//console.log("fertType is" + fertType);
//function newBushelAmt (){      put this "}"curly at the end of the function
if (fertType == "premium"){
  totalYield = bushelAmt * 1.15;
//console.log("you chose premium");
}
else if(fertType == "regular"){
  totalYield = bushelAmt * 1.1;
//console.log("you chose regular");
}
else {
  totalYield = bushelAmt;
//console.log("you chose neither")
}

console.log ("The yield should be " + totalYield + " bushels per acre");
