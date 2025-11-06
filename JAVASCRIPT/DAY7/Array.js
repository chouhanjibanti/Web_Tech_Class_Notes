
// Methods of Array :- 
// 1. push
// 2. pop 
// 3. shift
// 4. unShift
// 5. indexOf
// 6. includes
// 7. slice
// 8. splice
// 9. every 
// 10. some 
// 11. find 
// 12. findIndex

// Iteration Methods :- 
// 1. forEach 
// 2. for of 
// 3. for in 
// 4. map
// 5. reduce
// 6. filter



// push :- add the element from the last.
// let arr = [1,2,3,4,5,6]
// arr.push(7,8)
// console.log(arr);

// // pop :- remove the element from the last.
// let arr1 =[1,2,3,4,5,6];
// console.log(arr1.pop());

// // shift :- remove the element from the beginning
// let arr2 =[1,2,3,4,5,6];
// console.log(arr2.shift());

// // unshift :- add the element from the beginning.
// let arr3 =[1,2,3,4,5,6];
// arr3.unshift(0)
// console.log(arr3);

// // indexOf : find the index of the element.
// // it will give the first occrences of the element 
// let arr4 =[1,2,3,4,3,7,1,5,6];
// console.log(arr4.indexOf(1));

// //  include :- it will check element exist or not
// let arr5 =[1,2,3,4,3,7,1,5,6];
// console.log(arr5.includes(10));

// // slice :- it will extract the subarray from the array.
// // syntax :- slice(start index , end index)[exclude[choood dega]]
// let arr6 =[1,2,3,4,3,7,1,5,6];
// let slice1 = arr6.slice(3,10);
// console.log(slice1);

// // splice :- in this methods you can delete the element , add the element 
// // splice [start index, deleteCount, Item1 , item2, item3.....]
// let arr7 =[1,2,3,4,3,7,1,5,6];
// let splice1 = arr7.splice(2,3,100,200,300)
// console.log(arr7);
// console.log(arr7.length);


// // 9. every 
// // 10. some 
// // 11. find 
// // 12. findIndex


// // every method :- it wil give the result who meet the condition.
// let arr8 =[2,4,6,8];
// let returnElement = arr8.every((value)=>{
//     return value%2==0
// })
// console.log(returnElement);

// // some :- it wil give the result who meet the condition.
// let arr9 =[2,4,6,8,1];
// let returnElement1 = arr9.some((value)=>{
//    return value%2!==0
// })
// console.log(returnElement1);

// // find : by using this we can find the element based on the condition.
// let arr10 = [9,1,4,2,5,3,2,6,9]
// let findElement = arr10.find((value)=>{
//     return value>5;
// })
// console.log(findElement);

// // find : by using this we can find the element based on the condition.
// let arr11 = [9,1,4,2,5,3,2,6,9]
// let findElement1 = arr11.findIndex((value)=>{
//     return value>9;
// })
// console.log(findElement1);


// forEach :- iterate on each element, [value,index,array]

// let arr12 = [9,1,4,2,5,3,2,6,9];
// arr12.forEach((value,index,array)=>{
//   console.log(value);
//     console.log(index);
//       console.log(array);
// })

// for of  :- it will return values -> Array, String,maps
// for in :- it will return the keys/indexs -> array or object

// example of for of methods in the case of array 
let arr13 = [3,1,5,6,3,2,8]
for(let values of arr13){
    console.log(values);
}

// example of for of methods in the case of String
let s1 = "tushartushar"
for(let value of s1){
    console.log(value);
}

// example of for of methods in the case of maps
let map1 = new Map([["name","yogesh"],["age",22],["address","mhow"]])
for(let m1 of map1){
    console.log(m1);
}


// =========================================

// example of for in methods in the case of array
let arr14 = [1,43,23,543,6,3]
for(let index in arr14){
    console.log(index);
}

// example of for in methods in the case of Object
let person = {
    "name":"xyz",
    "age":100,
    "company":"tcs"
}
for(let keys in person){
    console.log(keys);
    console.log(person[keys]);
}

// ==========================================

// map :-  iterate on each element , it wil retuen an new array
// filter:- iterate on each element , and return the element who meet the condition.
// reduce :- it will return the single 

let arr15 = [10,20,30,40,50,60]
let map2 = arr15.map((value)=>{
   return value*2;
})
console.log(map2);


let arr16 = [10,20,30,40,50,60,55]
let filter1 = arr16.filter((value)=>{
   return value%2!==0
})
console.log(filter1);

let arr17 = [10,20,30,40,50,60,55]
let reduce1 = arr17.reduce((total, value)=>{
   return total*value;
},1)
console.log(reduce1);














