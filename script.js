console.log(`Hello World`);

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

//The next 2 sections are CONDITIONAL STATEMENTS. The first one is for only 2 options, while the second one is for 3 or more options.//

let EC = 1.2;
if (EC > 1.8){
    console.log("Your Plant Is Dying!");
}else{
    console.log("Congratulations! Your Plant Is Healthy!...for now.");
}


//let age = prompt("Enter Your Age");
if (age < 18){
    alert("You are a Minor.");
}else if(age < 60){
    alert("You are an Adult.");
}else{
    alert("Wow! You're old.");
}//