console.log(`Hello World`);

//JAVASCRIPT: LESSON 1
//The basic structure of variable has the name((the name of the variable)(before the equal sign)), &
//the value((what the name is equal to)(after the equal sign)).//
//3 VARIABLES: let & var= CAN be interchanged at any time; And const = CANNOT be changed at all, is contant.//
//4 PRIMITIVE DATA TYPES (3 MAIN ONES + 1 LESS USED ONE): String(myString)[Characters], Number(myNumVar)[Numbers], Boolean(myBoolean(#))[True Or False], & Undefined.//


//EX of String data & Number data:
let myString = "a2b3c";
console.log(myString);
console.log(typeof myString);

let myNumVar = "123";
console.log(myNumVar);
console.log(typeof myNumVar);

console.log(10 + " eggs");
console.log(10 + 5 + " eggs");
console.log("eggs " + 10 + 5);


//console.log only prints out statements in the devloper(dev) tools.//
//alert ony prints out statements in the top box.//

//
//The next 2 sections are CONDITIONAL STATEMENTS. The first one is for only 2 options, while the second one is for 3 or more options.//

let EC = 1.2;
if (EC > 1.8){
    console.log("Your Plant Is Dying!");
}else{
    console.log("Congratulations! Your Plant Is Healthy!...for now.");
}


//let age = prompt("Enter Your Age");
//if (age < 18){
 //   alert("You are a Minor.");
//}else if(age < 60){
 //   alert("You are an Adult.");
//}else{
  //  alert("Wow! You're old.");
//}



var animals = ['lion', 'elephant', 'giraffe', 'zebra', 'monkey', 'bison', 'bear'];
//for(i=0; i<animals.length; i++){
  //  console.log(animals[i]);
//}

//for(let i=0; i<animals.length; i+=2){
//    console.log(animals[i]);
//}

for (i=0; i<animals.length; i++){
console.log(animals[i], .toUpperCase());
}



//JAVASCRIPT: LESSON 3
    //An API is a data storage retrieval application, that responds with a HTTP(Hypertext Transfer Protocol) response.//
    //There are 4 OPERATIONS to retrieve data: (CRUD) Create, Read, Update, Delete; with 
    //4 REQUESTS that correlate with each one as so: (PGPD) Post, Get, Put, Delete.//
    //The http RESPONSE that is retrieved from the request consists of 3 parts: Response Status Code/Line, Response Header, & Response Body(the information that shows up on the page).//

    //Each API has ENDPOINTS that are coded for your API to organize the type of information the client wishes to recieve (EX: /health_assessment) (FULL EX: https://www.plant.id/api/v3/health_assesment?healthy).
    //FULL EX: (Base Url/Endpoint?Parameters) <----- 3 PARTS OF A URL.//
    //If there are Multiple Parameters in One URL, there are separated by "&" or "#" (with NO SPACES!).//
//
