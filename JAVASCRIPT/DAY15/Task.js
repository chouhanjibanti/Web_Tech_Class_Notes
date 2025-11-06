// 1. check the perfect number from 1 to 30.
// 6 - 1+2+3 = 6

// for (let i = 1; i <= 30; i++) {
//   let sum = 0; // 1
//   for (let j = 1; j < i; j++) {
//     if (i % j === 0) {
//       sum = sum + j;
//     }
//   }
//   if (sum === i) {
//     console.log(`${i} is perfect`);
//   } else {
//     console.log(`${i} is not perfect`);
//   }
// }

// 2. check the number it is perfect or not where number is 7.
// 3. Check the prime number from 1 to 20.
// for(let num=1;num<=20;num++){
//     let count =0;// num = 1 // 2
//     for(let i=1;i<=num;i++){ // i=1 1<=2 || i=2 2<=2
//         if(num%i===0){ // 1%1===0 // 2%1===0 // 2%2===0
//             count++; // 1 // 2
//         }
//     }
//     if(count===2){
//         console.log(`${num} is prime number`);
//     }else{
//     console.log(`${num} is not prime number`);
//     }
// }

// WAP to check number is neon number or not. 
// number = 9   -> 9*9 = 81 => 8+1 => 9

// let num = 18;
// let num1 = num*num;
// let sum = 0;
// while(num1 >0){ // 81
//   let digit= num1%10;
//   sum = sum + digit; // 9
//   num1 = Math.floor(num1/10);
// }
// if(num===sum){
//     console.log(`${num} is neon number`);
// }else{
//      console.log(`${num} is not neon number`);
// }



// WAp to check number is Strong number or not.
// number -> 145  -> 5!+4!+1! => 120+24+1 => 145
// let num = 145;
// let num1 = num;
// let sum =0;
// while(num>0){
//      let digit= num%10; 
//      sum  = sum + isFact(digit)  
//     num = Math.floor(num/10); 
// }
// if(num1===sum){
//     console.log(`${num1} is strong number`);
// }else{
//     console.log(`${num1} is not strong number`);
// }
// function isFact(n){// 5
//    let fact= 1;
//    while(n>0){// 5>0
//      fact = fact *n; // fact = 5*4*3*2*1= 120
//      n--; // 4// 3// 2//1
//    }
//    return fact;
// }



// WAP to check number is sunny or not.
// let num = 8;
// // 8+1 = 9 = 3*3

// let num = 9;
// let numAdd = num+1;
// const sqrt = Math.sqrt(numAdd);  //

// if(Number.isInteger(sqrt)){
//     console.log(`${num} is sunny number`);
// }else{
//     console.log(`${num} is not sunny number`);
// }

// WAP to print the Faboncci series where init variable is 0 , 1
// WAP to find the largest element from the array. [5,2,6,4,1,9]
// WAP to sort the array [5,2,6,4,1,9] -> [1,2,4,5,6,9]



