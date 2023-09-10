//1
// var city = prompt("Write the city name please").toLowerCase()

// if(city==="karachi"){
//     alert("Welcome to city of lights")
// }
//2
// var gender=prompt("Write your gender").toLowerCase()

// if(gender==="male"){
//     alert("Good Morning Sir")
// }
// else if(gender==="female"){
//     alert("Good Morning Ma'am")
// }
//3
// var trafficLight=prompt("What color of traffic Light").toLowerCase()
// if(trafficLight==="red"){
//     alert("Must stop")
// }
// else if(trafficLight==="yellow"){
//     alert("Ready to move")
// }
// else(alert("Move now"))
//4
// var fuel=Number(prompt("Please tell your fuel in litres"))
// if(fuel<0.25){
//     alert("Please refill the fuel in your car")
// }
//5a
// var a=4;
// if(++a===5){
//     alert("given condition for variable a is true")  //working
// }
//5b
// var b=82;
// if(b++===83){
//     alert("given condition for variable b is true") //not working
// }
//5c
// var c=12;
// if(c++ === 13){
//     alert("Condition 1 is true")    //wrong
// }
// if(c === 13){
//     alert("Condition 2 is true")    //correct
// }
// if(++c < 14){
//     alert("Condition 3 is true")    //wrong
// }
// if(c === 14){
//     alert("Condition 4 is true")     //correct

// }
//5d
// var materialCost = 2000;
// var laborCost = 2000;
// var totalCost = materialCost - laborCost;
// if(totalCost === laborCost + materialCost){    //not working
//     alert("The cost equals")
// }
//5e

// if(true){
//     alert("True");
// }
// if(false){
//     alert("False");          //unreachable command
// }
//5f
// if("car" < "cat"){
//     alert("car is smaller than cat")         //oh wow its working its compare alphabets
// }

//6
// var obtainedMarks= Number(prompt("Write your obtaining marks in 3 subject"))
// var totalMarks= Number(prompt("Write total marks of three subjects"))
// var percentage = (obtainedMarks/totalMarks)*100

// var grade
// var remarks
// if(percentage >= 80){
//      grade="A-one"
//      remarks="Excellent"
// }
// else if(percentage >= 70){
//      grade="A"
//      remarks="Good"
// }
// else if(percentage >= 60){
//     grade="B"
//     remarks="You need to improve"
// }
// else if(percentage < 60){
//     grade="Fail"
//     remarks="Sorry"
// }

// document.write("Marks Sheet".bold()+ "<br>"+ "<br>"+ "<br>")
// document.write("<br>"+ "Total Marks : "+ totalMarks)
// document.write("<br>"+ "Marks Obtained : "+ obtainedMarks)
// document.write("<br>"+ "Percentage : "+ percentage+ "%")
// document.write("<br>"+ "Grade : "+ grade)
// document.write("<br>"+ "Remarks : "+ remarks)

//7
// var secretNum = 5
// var guessNum = Number(prompt("Guess the secret number ranging from 1 to 10"))
// if(guessNum===secretNum){
//     alert("Bingo! Correct answer")
// }
// else if(guessNum === ++secretNum || guessNum=== (secretNum-2)){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Wrong! Try again")
// }
//8
// var num=Number(prompt("Type any number to check Is it divisible by 3?"))
// var remainder=num % 3;
// if(remainder===0){
//     alert("Yes your number is divisible by 3")
// }
// else{
//     alert("No its not divisible by 3")
// }
//9
// var num=Number(prompt("Type any number, To check Is it Even or Odd"))
// var remainder=num % 2;
// if(remainder===0){
//     alert("Your number is Even")
// }
// else{
//     alert("Your number is Odd")
// }
//10
// var temperature= Number(prompt("Type your city temperature"))

// if(temperature > 40){
//     alert("It's too hot outside")
// }
// else if(temperature > 30){
//     alert("The Weather today is Normal")
// }
// else if(temperature > 20){
//     alert("Today's weather is cood")
// }
// else if(temperature > 10){
//     alert("OMG! Today weather is so Cool")
// }
//11
// var firstNum = Number(prompt("Write the first number"))
// var operator =  prompt("Write an operator e.g +,-,*,/ or %")
// var secondNum = Number(prompt("Write the second number"))
// if(operator==='+'){
//     result= firstNum + secondNum
// }
// else if(operator==='-'){
//     result= firstNum - secondNum
// }
// else if(operator==='*'){
//     result= firstNum * secondNum
// }
// else if(operator==='/'){
//     result= firstNum / secondNum
// }
// else if(operator==='%'){
//     result= firstNum % secondNum
// }
// else (
//     alert("your input is incorrect")
// )

// alert("Your result is: "+ result)