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
let fact = (num) =>{
   let fact1 =1;
   for(let i=1;i<=num;i++){
      fact1 = fact1 * i;// 1*1 = 1*2 = 2 *3 = 6 *4 24
   }
   console.log(fact1);
}
fact(4)


