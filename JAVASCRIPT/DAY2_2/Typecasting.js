// Typecasting  :- convert one datatype to another datatype.

// in JS we have two types of Typecasting 
// 1. Implicit typecasting :- it automatically convert one to another dt.
   
// 2. Explicit Typecasting  :- it manual /externaly convert one to another dt.


// Implicit typecasting :- 

// console.log(10+10);// 20
// console.log(10+'10'); // 10 // num+ string // concatination merge '10'+'10' => 1010
// console.log(10-'10');// 0 // - , * , / , % -> 10-10=>0
// console.log(100*'10');//1000


// explicit typecasting 

console.log(10+Number('10'));//20
console.log('10'+Number('10'));// 20 // 1010 

console.log(String(10)+100);// 10100
console.log(Number('100')-100);// 0




