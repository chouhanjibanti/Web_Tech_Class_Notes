// function expression

// let demo = function(){
//     console.log("hy expression");
// }
// demo()

// sum of the two number using function expression.

// let sum = function(a,b){
//     console.log(a+b);
// }
// sum(10,30)

// =======================

// Arrow function :- JS Es6 version

// let demo1 = () => {
//     console.log("hy arrow function");
// }
// demo1()

// print the sum of two number using arrow function.

// let sum = (a,b) =>{
//     console.log(a+b);
// }
// sum(10,20)

// // print the substract of the two

// let sub = (a,b)=>{
//     console.log(a-b);
// }
// sub(20,10)

// ================================

// Nested function

// function parent() {
//   console.log("I am parent function");
//   function child() {
//     console.log("I am child function");
//   }
//   child()
// }
// parent();


// ============================


// IIFE :- Immediately Invoked Function Expression
// Syntax :- ()()  -> one time use and throw 

// (function(){
//   console.log("hy i am iife function");
// })()

// =========================

// Higher order function :- HOF ia an function which accept function as an parameter.
// Call back function :- CBF 

// function test(cbf){
//    console.log("hy i am test function");
//    cbf();
// }
// function demo1(){
//    console.log(" hy i am demo1 function ");
// }
// test(demo1)



// function Gopur(parcel){
//    console.log("ha m gopur squre");
//    parcel();
// }

// function parcel(){
//   console.log("ha m bus m rkha hua hu ja ra hu");
// }
// Gopur(parcel);


// ========================================================

// HOF -> which accept function as parameter.
// CBF -> function will pass a paramter.
// advantage :- when i will the greet()  that time my sayGoodBye function will call automatically.

// function greet(name,callback){
//    console.log(`hy ${name}`);
//    callback();
// }
// function sayGoodBye(){
//     console.log("GoodBye!");
// }
// greet("vashu",sayGoodBye)




// example of the HOF and the CBF
// function multipleGreet(num,callBack){

//   for(let i=1;i<=num;i++){
//        callBack();
//   }

// }
// function greet(){
//   console.log("GoodMorning.........");
// }
// multipleGreet(100,greet)


// ==================================

// IIFE  :- ()() -> one time use throw -> we can not reuse 

// (function(){
//   console.log("hy");
// })()

// ===================================


// print the sum of the number 2, 3 and 5 using the arrow function


// let arrow1 = (a,b,c)=>{
//   let sum = a+b+c;
// console.log(sum); 
//   return sum;
// }
// arrow1(10,20,30)
// console.log(arrow1(10,20,30));


// ===========================

// nested function 



// function Parent(){


//   console.log("hy i am parent function");

//   function Child(){
//     console.log("hy i am child function");
//   }
//   Child()
// }
// Parent()

// expression  // let a = 10;
let demo = function(){
  console.log("hy i am function");
}
demo()

// function declaration // let a;
function demo1(){
  console.log("hy");
}

