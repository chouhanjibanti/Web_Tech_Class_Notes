// Spread Operator :- Merge 

// Example of array in the case of Spread Operator 
// const arr1 = [1,3,4,5]
// const arr2 = [10,20,30,40,50]

// const merged = [...arr1,...arr2]
// console.log(merged);

// // example of object in the case of Spread Operator 
// const user = {
//     name:"harshita",
//     age:22 
// }

// const details = {
//     country :"INDIA",
//     Address:"MusaKhedi indore"
// }

// const merged1 = {...user,...details}
// console.log(merged1);


// ==================================

// rest operator :- collect 


// function sum(...num){
//    console.log(a+b);
// }
// sum(10,20,30,40,50,60,70,80,90,100)


// reduce methods :- Method of array , it will return single value.

function sum(...numbers){
   return numbers.reduce((total,num)=> total+num ,0)
}
console.log(sum(10,20,30,40,50));
// total = 0 num = 10   => 10
// total =10 num = 20 => 30
// 30  , 30 => 60
// 60 , 40 => 100
// 100 , 50 => 150