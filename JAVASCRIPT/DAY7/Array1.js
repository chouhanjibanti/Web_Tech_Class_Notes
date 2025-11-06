// Array :-  memory block who store the diff element .

// Homo :-  same
// Hetro :- diff

// Syntax :-

// variable[let/var/const] varName = [];
// let arr = [1,2,3,'a','g',true]
// console.log(arr);

// if i want to access the element
// index start from 0
// varName[index]
// console.log(arr[3]);

// Methods of Array
// push
// pop
// shift
// unshift
// indexOf
// includes
// slice
// splice
// find
// findIndex

// iteration methods
// 1. forEach
// 2. for of
// 3. for in
// 4. map1,m
// 5. reduce
// 6. filter

// push :- add the element from the last
let arr = [1, 2, 3, 4, 5];
arr.push(100, 200);
console.log(arr);

// pop :- remove the element from the last.
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.pop());

// shift :- remove the element from the beginning.
let arr2 = [1, 2, 3, 4, 5];
// arr2.shift();
console.log(arr2.shift());

// unshift :- add the element from the beginning.
let arr3 = [1, 2, 3, 4, 5];
arr3.unshift(100, 200);
console.log(arr3);

// indexOf() :- it will return the index of the element.
// it will give the first occurences
// indexOf(start index,find element)
let arr4 = [1, 2, 3, 4, 6, 2, 3, 4, 5, 3];
console.log(arr4.indexOf(3, 3));

// include :- it will return based in the exist , true and false
let arr5 = [1, 2, 3, 4, 6, 2, 3, 4, 5, 3];
console.log(arr5.includes(10));

// slice :- from the array we can extract the subArray.it wil return an new array.
// syntax :- slice(start index,end index)// end index exclude
let arr6 = [1, 2, 3, 4, 6, 2, 3, 4, 5, 3];
let slice1 = arr6.slice(2, 6);
console.log(slice1);

// splice :- by using this method we can replace with an element.
// syntax :- splice(start index, deleteCount, item1,itme2......)
let arr7 = [1, 2, 3, 4, 6, 2, 3, 4, 5, 3];
let splice1 = arr7.splice(3,3,100,200)
console.log(arr7);

