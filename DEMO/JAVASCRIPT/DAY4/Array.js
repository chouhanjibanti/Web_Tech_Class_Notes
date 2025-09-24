// let arr1 = [1,2,3,'hy',true]
// console.log(arr1);

// console.log(arr1[0]);

// for loop 
// for(let i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
// }

// ===================================


// 1. push
// 2. pop
// 3. shift
// 4. unshift
// 5. slice
// 6. splice
// 7. indexOf()
// 8. find
// 9. findIndex
// 10. some 
// 11. every


// push :- it will push the element from the last.
// let arr1 = [1,2,3,4,5,6]
// arr1.push(100)
// console.log(arr1);


// pop :- remove the element from the last.
// let arr2 = [1,2,3,4,5,6]
// console.log(arr2.pop());


// shift :- it will remove the element from the from the begin.
// let arr3 = [1,2,3,4,5,6]
// let arr_3 = arr3.shift();
// console.log(arr_3);
// console.log(arr3);

// unshift :- it will add the element from the begin.
// let arr4 = [1,2,3,4,5,6]
// arr4.unshift(100,200)
// console.log(arr4);


// indexOf :- it will return the index of first occurnce element.
// let arr5 = [1,2,3,1,6,2,4,5,1,6]
// console.log(arr5.indexOf(1,2));// 3

// slice :- it a part of the array : it will return an new array. 
// slice method syntax :-(start index , end index) [exclude]
// let arr6 = [1,2,3,6,2,4,5,1,6]
// let slice1 = arr6.slice(2,7) // 2 index   // 5 index 
// console.log(slice1);// [3,6,2,4]

// splice :- changes in the existing array. 
// syntax :- (start index , delete count,item1,item2,item3 )
// let arr7 = [1,2,3,6,2,4,5,1,6]
// arr7.splice(2,4,200)
// console.log(arr7);

// include():- element will exists or not .
// let arr8 = ["java","mern","python",1]
// let check1 = arr8.includes("python1")
// console.log(check1);


// =========================


// iteration 
// foreach 
// for of 
// for in 
// map 
// filter
// reduce

// foreach  :- it will iterate on each element
// let arr9 = [1,2,3,4,5,6,7,8]

// arr9.forEach((values,array,index)=>{
//    console.log(values);
//    console.log(array);
//    console.log(index);
// })


// for of or for in 
// 1. for of will return only values.
// 1. for in will return only key/index.


//2. for of -> Array , String , Maps 
// 2. for in -> Array , object 

// for of methods :-
// Example of an array  
// let arr10 = [1,2,3,4,5,6,7,8]
// for(let i of arr10){
//     console.log(i);
// }

// Example of String 
// let str1 = "vashu"
// for(let i of str1){
//     console.log(i);
// }

// Example of Maps 
// let map1 = [["name","vashu"],["address","indore"]]
// for(let i of map1){
//     console.log(i);
// }


// =============================

// for in methods 
// in the form of array we will say :- indexes
// let arr11 = [1,2,3,3,4,4,4,9,0]
// for(let i in arr11){
//     console.log(i);
// }

// in the form of object we will say :- keys

// let person = {
//     name :"vashu",
//     id:1,
//     address :"indore"
// }
// for(let i in person){
//     console.log(i);
// }

// ============================

//map :- iterate on the each element.

// let arr12 = [2,3,4,5,6,7]
// let arr12_12 = arr12.map((value)=>{
//     return value*10;
// })
// console.log(arr12_12);

// ===============================

//  filter :- if we have an array ->even 

// let arr13 = [1,2,3,4,5,7,4,1,9]
// let evenNumber = arr13.filter((value)=>{
//     return value%2==0;
// })
// console.log(evenNumber);

// ==============================

// reduce() :- it will return the single value.

// let arr14 = [1,2,3,4,5,7,4,1,9]
// let sumNumber = arr14.reduce((total,value)=>{
//     return total*value;// 0+1 = 1+2 = 3 
// },1)
// console.log(sumNumber);

// =========================

// map :- iterate on each -> calculation -> 2
// let arr15 = [1,2,3,4,5,7,4,1,9]
// let arr15_15 = arr15.map((value)=>{
//      return value*2;
// })
// console.log(arr15_15);

// ====================

// find :- find the element based on the condition.

// let arr16 = [6,1,2,3,4,5,7,4,1,9]
// let returnElement = arr16.find((value)=>{
//       return value>4;
// })
// console.log(returnElement);

// ====================================

// findIndex :- find the element and return the index of the element.

// let arr16 = [6,1,2,3,4,5,7,4,1,9]
// let returnElement = arr16.findIndex((value)=>{
//       return value>4;
// })
// console.log(returnElement);

// ============================

// some  :-  i will search the even number if some even number there -> True 
// let arr17 = [1,3,5,7,1,9,10]

// let someElement = arr17.some((value)=>{
//     return value%2==0;
// })
// console.log(someElement);

// ==========================

// every :-   i will search the even number if every even number there -> True

// let arr18 = [1,3,5,7,1,9]

// let everyElement = arr18.every((value)=>{
//     return value%2!==0;
// })
// console.log(everyElement);







