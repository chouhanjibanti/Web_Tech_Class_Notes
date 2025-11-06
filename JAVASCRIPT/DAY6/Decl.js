// 1. Function Declaration :- hoisting 
// 2. Function Expression :- 
// 3. Arrow Function :- by using this we can reduces the code.
// 4. nested function :- function inside function
// 5. IIFE(immediate invoke function expression ) :- self executing :- one time use the throw
// 6. Higher order function [HOF]
// 7. Call back function [CBF]

// Function Declaration :- 

// Syntax :- 

// function functName(){
    // Statement
// }

// implicit function declaration
// function Demo(){
//     console.log("hy debugshala");
// }
// Demo()

// // explicit function declaration
// function Demo1(){
//     return "hy debugshala"
// }
// console.log(Demo1());

// ========================================

// function declaration :-  implicit and explicit  
// // implicit
// function demo(){
//    console.log("hy debugshala");
// }
// demo()

// // explicit
// function demo1(){
//     return "hy debug"
// }
// console.log(demo1());


// Arithmetic Operation :- + , - , / , *

// add

// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,20)



// ==================================

// function expression  :- 

// let demo = function(){
//     console.log("hy indore");
// }
// demo()

// print the multiplication of three number. where numbers are 10,12,20

// Arrow function :- code reduces 

// let demo2 = () =>{
//     console.log("hy arrow function");
// }
// demo2()

// print the sum of any three number using the explicit arrow function.
// Find the factorial of the 4 using the arrow function.
//3.  Write a Function to	Print	REVERSE	of	100	to	1 numbers?
//  Write	a	Function	to	check	given	number	is	EVEN	or	ODD?	
//  Write	a	Function	to	display	MULTIPLICATION	table?
// Write	a	program	to	check	the	given	number	is	PALINDROME	or	not?

// let sum = (a,b,c) =>{
//     return a+b+c
// }
// console.log(sum(10,20,30));

// factorial number
// let fact = (num) =>{
//    let fact1 =1;
//    for(let i=1;i<=num;i++){
//       fact1 = fact1 * i;// 1*1 = 1*2 = 2 *3 = 6 *4 24
//    }
//    console.log(fact1);
// }
// fact(4)


// =======================================

// Nested Function :- function inside function
// function Parent(){
   
//    console.log("hy i am parent function...");

//    let Child = function(){
//       console.log(" i am function expression ");
//    }


//    let Child1 = () =>{
//       console.log("i am arrow  function");
//    }
//       Child();
//    Child1()
// }
// Parent()


// Create the Parent function[Declaration] , sum of the two number 10 and 20 , inside this
// create the Multiply function[Arrow function] , multiply of three number 3,5 & 2 and also 
// create the Subtract function[expression] , subtract of the two number 100 and 70.


// ==============================================================

// IIFE :-  self executing function
// Syntax :- ()()   // one time use throw


// (function(){
//    console.log("hy i am IIFE Example");
// })()

// ============================================

// HOF :- Higher order function
// CBF : call Back function


// HOF :- Higher order function :- 
// it is a function which accept function as an parameter.
// CBF : call back function :- 
// it is a function who passed as an arguments.
// function HOF(CBF){
//    console.log("hy i am higher oder function");
//    CBF();
// }
// function Child(){
//    console.log("hy i am call back function");
// }
// HOF(Child);

// ==========================================

// example 1 

// function Print(n,cbf){
//    console.log(n);//10
//    cbf();
// }
// function Print1(){
//    console.log("hy goodmorning.....");
// }
// Print(10,Print1)

// ===================================

// i want to print he goodmorning 100 times

// function MultipleGreet(n,cbf){
//   for(let i=1;i<=n;i++){
//      cbf();
//   }
// }
// function Greet(){
//    console.log("GoodEvening........");

// }
// MultipleGreet(100,Greet)

// Write the program using the HOF and CBF in this create the GreetG[Goodrmorning] and 
// GreetA[GoodAfterNoon] function  and print he 50 times  Goodrmorning and 50 times GoodAfterNoon.


function MultipleGreet(n,cbf,cbf1){
  for(let i=1;i<=n;i++){
    if(i<=n/2){
      cbf();
    }else{
      cbf1();
    }
  }
}
function GreetG(){
   console.log("GoodEvening........");
}
function GreetA(){
   console.log("GoodAfterNoon........");
}
MultipleGreet(100,GreetG, GreetA)




// 1. Write a Higher-Order Function checkNumber(num, callback) that checks if a given number is prime using a callback function.
// 2. Write a HOF checkNumber(num, callback) that checks if a number is perfect using a callback function.2. 
// 3. Write a HOF checkNumber(num, callback) to check if a number is Armstrong.


// Array 
// String 
// Object 
// DOM 
// Events 
// LocalStorage and sessionStorage 
// closure
// promises
// Async and Await 
// setTimeOut and setInterval 
// Event Loop


