// //  Spread Operator :- 

// // Example of array
// const country1 = ['india','US']
// const country2 = ['PAK','Bangladesh','Srilanka']

// const merged = [...country1,...country2]
// console.log(merged);

// // Example of object

// const user = {
//     name:"tushar",
//     address :"Indore"
// }

// const details = {
//     country :"INDIA",
//     age :22
// }

// const userDetails = {...user, ...details}
// console.log(userDetails);
// =============================================

// Rest Operator :- ...

// function sub(...num){

// }
// sub(10,20,30,40,506,60)

// reduce :- single value -> 10,20,30,40,50 = 150

function Sum(...num){// (10,20,30,40,50,60,70,80)
  return num.reduce((total,number)=> total+number,0) //  0+10 => 10  || 10+20 = 30
}
console.log(Sum(10,20,30,40,50,60,70,80));