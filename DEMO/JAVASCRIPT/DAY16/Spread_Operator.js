// spread :- Merge 

//example of array
// const arr1 = [1,2,3,4]
// const arr2 = [10,20,30,40]

// const merged = [...arr1,...arr2]
// console.log(merged);

// // example of object 
// const user = {name:"vashu",age:21}
// const details = {country:"india", role:"developer"}
// const merged1 = {...user,...details}
// console.log(merged1);

// ============================================

// example of rest opeator [function]

// function sum(a,b,...num){
//    console.log(a+b+num);
// }
// sum(10,20,30,40,50,60,70,80)

// reduce methods :- it will return the single value.
function sum(...numbers){
   return numbers.reduce((total,num)=> total+num,0 )
}
console.log(sum(10,20,30,40,50,60));
// 10+0 = 10  total = 0
// 10+20  = 30  total = 30
//

