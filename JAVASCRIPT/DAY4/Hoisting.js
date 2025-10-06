// hoisting :-  hoisting means we can call the function or variable on the top before the declaration and initilization.
// HOISTING: JS allows a programmer to use a member (variable) before the  declaration statement.This characteristic is known as Hoisting. 

// let a = 10;
// clg(a) // 10


// // hoisting example 
// clg(a) 
// let a = 10;


// hoisting possible in variable and function:- 
// variable :- var/let/const  -> var -> undefined , let/const -> Tdz
// function :- declaration and expression 


//  # in the concept of the variable

// var  -> undefined
// console.log(a);
// var a =10;

// in JS , if we talk about the let and const -> TDz Temporarl dead zone

// let example :- ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a = 10;


// const example  : ReferenceError: Cannot access 'b' before initialization
// console.log(b);
// const b = 30;


// ==============================================


// function declaration -> hoisting is possible in function declaration.
// Demo()
// function Demo(){
//     console.log("hy debugshala");
// }


// function expression :-  ReferenceError: Cannot access 'Demo' before initialization
// Demo() 
// let Demo = function(){
//     console.log("hy debugshala");
// }



