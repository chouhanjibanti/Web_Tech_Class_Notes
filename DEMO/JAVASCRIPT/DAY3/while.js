// while :- 

// while (condition) {
    
// }


// count the number of digit.   number ->  3456
//1. extract the digit from the number 5435.
//2. sum of all the digits where number is 34567.
//3. square of all the digits and sum this and display the number. 
//4. Find the largest digit in a given number using a while loop.  input number =  45732
//5. Count the number of digits in a number using a while loop. input number = 34543
//6. Calculate the factorial of a number using a while loop. input number = 10

// let num = 5435; 
// while(num>0){
//    let digit= num%10; // 5435%10 -> 5  , 3 , 4
//    console.log(digit); // 5 , 3 ,4 ,5
//    num = Math.floor(num/10); // 5435/10 = 543 /10 = 54
// }

//2. sum of all the digits where number is 34567.
//4. Find the largest digit in a given number using a while loop.  input number =  45732


// let num = 45732;
// let largest = 0;
// while(num>0){
//     let digit= num%10;
//     if(digit>largest){
//         largest = digit;
//     }
//      num = Math.floor(num/10);

// }
// console.log(largest);


// count the number of digit.   number ->  3456
// let num = 3456;
// let count =0;

// while(num>0){
//     num = Math.floor(num/10);// 3456 // 345  // 34 // 3 
//     count++; // 1 // 2 // 3 // 4
// }

//6. Calculate the factorial of a number using a while loop. input number = 10
// let fact = 1;
// let num = 5;
// let i=1;
// while(i<=num){
//   fact = fact*i;
//   i++; // 2
// }
// console.log(fact);
