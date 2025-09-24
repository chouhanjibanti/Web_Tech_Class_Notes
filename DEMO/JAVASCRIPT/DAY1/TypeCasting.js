// TypeCasting :- Convert one type of value to other type of value.

// Type of typecasting :- 
// 1. implicit typecasting
// 2. Explicit typecasting 


// 1. implicit typecasting

console.log(10+10);// 20
console.log(10+'10');// 1010  ->  String -> cancatination     number 10 -> String '10' + '10'


console.log(10-'10');// 10-10 = 0   -> String '10' -> number  [type coercion -> wrong type of data ]
console.log(10*'10');// 10*10 = 100
console.log(10/'10');// 1



// explicit typecasting 

console.log(10+String(10));// [10 + '10'] => '10'+'10' => 1010

console.log(10-String(10)); // [10-'10'] => 10-10 = 0

console.log(Number('100')-90);// 100-90 = 10