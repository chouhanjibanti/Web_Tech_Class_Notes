// Hoisting :-
// function or variable 

// console.log(demo1);
// var demo1 = 10;

// console.log(demo);
// let demo = 10;

// console.log(demo2);
// const demo2  = 30;


// let and const both , tdz temporaral dead zone 


// =========================================

// function declaration 
// function expression 

// D()
// function D(){
//     console.log("hy i am function declarartion");
// }

// D1()
// let D1 = function(){
//     console.log("hy function expression");
// }

// ========================================

// Nested function  :- function inside function

// function Parent(){
//     console.log("hy tushar mehta");

//     let Child = function(){
//         console.log("hy tushar1");
//     }

//     let Child2 = () =>{
//         console.log("hy debugshala");
//     }

//     Child();
//     Child2()
// }
// Parent()


// IIFE :- Immediate invoke function expression , without name , can not reuseable 
// ()()
// (function(){
//     console.log(" hy i'm IIFE....");
// })()


// HOF :- higher order function :- 
// it is  a function which accept function is a parameter.



// function Parent(cbf){
//     console.log("hy i am higher order function...");
//     cbf();

// }
// function Child(){
//    console.log(" hy i am child function...");
// }
// Parent(Child);


//CBF : call back function 
// which passed as an arguments.


// =========================================

// logical questions 
// 1. [3,4,1,8,9,5,3] find the largest element.

// let arr = [3,4,1,8,9,5,3];
// let max = arr[0]; // 3

// for(let i=1;i<arr.length;i++){
//      if(arr[i]>max){
//         max= arr[i];
//      }
// }
// console.log(max);
// arr[1]> max   -> 4>3  => max = 4
// arr[2]> max ->1>4   => max = 4
// arr[3]>max   ->8>4 => max=8

// sort the array :- [4,9,1,3,7]
//  [200,9,100,30,17,5]

let arr2 = ['z','g','Y','x','L']
console.log(arr2.sort());

let arr1 = [200,9,100,30,17,5];
// console.log(arr1.sort());
let sort1 = arr1.sort((a,b)=> b-a )
console.log(sort1);
// working 
// negative  :- no swap
// positive :- swap
// zero  : kuch bhi ni 
// [200,9,100,30,17,5] :- 200-9 -> 
// [9,200,100,30,17,5] :- 200-100 -> 
// [9,100,200,30,17,5] :- 30-17 -> [9,100,200,17,30,5]->
//  [9,100,200,17,5,30]


// 9-100 [9,100,200,17,5,30]
// 200-17 [9,100,17,200,5,30]
//200-5 [9,100,17,5,200,30]
// 200-30 [9,100,17,5,30,200]



 
         
