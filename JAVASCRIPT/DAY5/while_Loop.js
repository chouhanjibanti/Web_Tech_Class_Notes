// Syntax :-
// init
// while (condition) {
//     // statement
//      incre/dre
// }

//1. extract the digit from the number 5435.
//2. sum of all the digits where number is 34567. 
//3. square of all the digits and sum this and display the number. 
//4. Find the largest digit in a given number using a while loop.  input number =  45732
//5. Count the number of digits in a number using a while loop. input number = 34543
//6. Calculate the factorial of a number using a while loop. input number = 10
// 7. WAP to reverse the number where number is 6789. o/p i want 9876
// 8. WAP to check weather number is palindrome or not.-> 151





// let num = 5435;
// while (num > 0) {
//   let digit = num % 10; // 5435%10 -> 5 // 543%10  // 54%10 // 5%10
//   console.log(digit); // 5 // 3 // 4 // 5
//   num = Math.floor(num / 10); // 5435/10 =>  543/10 => 54/10 => 5/10 => 0
// }



//2. sum of all the digits where number is 34567.

// let num = 34567;
// let sum = 0;
// while (num > 0) {
//   let digit = num % 10; // 5435%10 -> 5 // 543%10  // 54%10 // 5%10
//    sum = sum+digit;
//   num = Math.floor(num / 10); // 5435/10 =>  543/10 => 54/10 => 5/10 => 0
// }

// console.log(sum);


//6. Calculate the factorial of a number using a while loop. input number = 10

// let num = 10;
// let i = 1;
// let fact = 1;
// while (i<=10) {
//     fact = fact*i;
//     i++;
// }

// 7. WAP to reverse the number where number is 6789. o/p i want 9876
// 8. WAP to check weather number is palindrome or not.-> 151

// let num = 152;
// let n = num;
// let rev =0;
// while(num>0){
//     let digit = num%10;//   6789%10 -> 9 || 678%10 || 67%10 || 6%10
//      rev = (rev*10)+digit;// 151
//      num = Math.floor(num / 10);// 6789/10 => 678/10 => 67/10 6 =? 0
// }
// if(rev==n){
//     console.log("number is palindrome");
// }else{
//     console.log("number is not palindrome");
// }


//1. extract the digit from the number 5435.
// let num = 5435;
// while(num>0){
//    let digit = num%10;// 5435%10 -> 5 || 543%10 || 54%10 => 4 | 5%10
//    console.log(digit); // 5 // 3 // 4 /5
//    num = Math.floor(num/10);// 5435/10 => 543/10 => 54/10 => 5/10 => 0
// }


// 7. WAP to reverse the number where number is 6789. o/p i want 9876
let num = 9876;
let n = num;
let rev = 0;
while(num>0){
    let digit = num%10;// 9876%10 -> 6 || 987%10  || 98%10   || 9%10
    rev = (rev*10)+digit; // 0+6 = 6 = 67  || 678 || 6780+9 =? 6789
      num = Math.floor(num/10);// 9876/10  =>  987/10 => 98/10 = 9/10 => 0
} 
console.log(rev);