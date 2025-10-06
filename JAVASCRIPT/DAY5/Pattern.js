// 1.
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for(let i=1;i<=5;i++){
//    let line = '';
//     for(let j=1;j<=5;j++){
//         line = line + "* ";
//     }
//     console.log(line);
// }

// 2.
// *
// * *
// * * *
// * * * *
// * * * * *

// let star = 0;
// for(let i=1;i<=5;i++){// i=2
//     star++;// 1 // 2
//    let line = " ";
//    for(let j=1;j<=star;j++){ // j=1 1<=1 T // j=2 2<=1
//     line = line + "* "
//    }
//    console.log(line);
// }

// 3.
// * * * * *
// * * * *
// * * *
// * *
// *

// 10.
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let star = 6;
// let space = -1;
// for(let i=1;i<=5;i++){
//     star--;
//     space++;//0
//     let line = " ";
//     for(let j=1;j<=space;j++){
//        line = line + " "
//     }
//     for(let k=1;k<=star;k++){
//        line = line + "*"
//     }
//     console.log(line);
// }

//6.
//     *
//    ***
//   *****
//  *******
// *********

// let space = 5;
// let star  = -1; // -1+2= 1
// for(let i=1;i<=9;i++){
//    if(i<=5){
//      star+=2;
//      space--;
//    }else{
//     star-=2;
//     space++;
//    }
//     let line = " ";
//     for(let j=1;j<=space;j++){
//        line = line + "  "
//     }
//     for(let k=1;k<=star;k++){ // k=2 2<=1
//        line = line + "* "
//     }
//     console.log(line);
// }

//7
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// Pattern Questions :-
// 1.
// 1
// 23
// 456
// 78910

// 2.
// A
// AB
// ABC
// ABCD
// ABCDE

// 3.
// 1
// 12
// 123
// 1234
// 12345

// 4.
// a
// b c
// d e f
// g h i j

// 5.
// * * * * * * *
//   * * * * *
//     * * *
//       *

// 7.
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// let star = -1;
// let space = 5;
// for(let i=1;i<=9;i++){
//    let line = "";
//    if(i<=5){
//       star+=2;
//       space--;
//    }else{
//       star-=2;
//       space++;
//    }
//    for(let j=1;j<=space;j++){
//      line = line + " "
//    }
//    for(let k=1;k<=star;k++){
//      line = line + "*"
//    }
//    console.log(line);
// }

// 1. prime number // 2 , 3  , 5 , 7, 11 ,13 , 17
// 2. Armstrong number // 153  1*1*1 = 1   5*5*5 = 125  3*3*3 = 1+125+27 = 153
// 3. perfect number // 6 -> 1 +2+3 = 6  =>  14 -> 1+2+7 => 10 => 28 -> 1+2+4+7+14= 28
// 4. fibonacci series // 0 1 1 3 5 8 13
// 5. Leap year Program .

// armStrong   number 153 -> 1*1*1+5*5*5+3*3*3 = 1+125+27 = 153
// for (let num = 1; num <= 1000; num++) {
//   let n = num;
//   let sum = 0;
//   let num1 = num;

//   while (num1 > 0) {
//     let digit = num1 % 10;
//     sum = sum + digit * digit * digit;
//     num1 = Math.floor(num1 / 10);
//   }
//   if (sum == n) {
//     console.log(`${n} is armStrong number`);
//   }
// }

// check 153 is armstrong number or not .
// let num = 153;
// let n = num;
// let sum = 0;

// while(num>0){
//     let digit = num%10;
//      sum = sum + digit*digit*digit;
//      num = Math.floor(num/10);
// }
// if(sum==n){
//    console.log(`${n} is armStrong number`);
// }else{
//    console.log(`${n} is not armStrong number`);
// }

// 3. perfect number // 6 -> 1 +2+3 = 6  =>  14 -> 1+2+7 => 10 => 28 -> 1+2+4+7+14= 28
// 6 -> 1+2+3

// perfect number using the for loop.
// let num = 6;
// let sum = 0;

// for(let i=1;i<num;i++){
//    if(num%i==0){
//       sum =sum+i;
//    }
// }
// if(sum==num){
//    console.log(`${num} is perfect`);
// }else{
//    console.log(`${num} is not perfect`)
// }

// perfect number while loop
// let num = 6;
// let sum = 0;
// let i =1;
// while (i<num) {
//    if(num%i==0){
//       sum = sum+i;
//    }
//    i++;
// }
// if(sum==num){
//    console.log(`${num} is perfect`);
// }else{
//    console.log(`${num} is not perfect`)
// }

// Leap year using the ifelse
// let year = 2024

// if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//   console.log(`${year} is leap year`);
// } else {
//   console.log(`${year} is not leap year`);
// }

// fibonacci series 0 1 1  2 3 5 8 13 21 34

// let a = 0;
// let b = 1;
// for(let i=1;i<=10;i++){
//    console.log(a);

//    let temp = a+b; // temp = 0+1 = 1
//    a = b; // a = 1 
//    b = temp;// b = 1
// }


// swapping of two number using third variable.
// let a = 10;
// let b = 20;
// let c = 0;

//  c = a; 
//  a = b;
//  b =c;

//  console.log(a);
//  console.log(b);
// =============================================

// swapping of two number without using the third variable.

// let a = 10;
// let b = 20;

// a = a+b; // a = 30
// b = a-b; // b = 30-20 => 10
// a = a-b; // a = 30-10 = 20


// console.log(a);
// console.log(b);

// ===============================================

// 1.
// A 
// B C
// D E F 
// G H I J 
// K L M N O

// ASCII :- American standard code information interchange

// A  :- 65 , 66 , 67
// a : 97 , 98 , 99

// let charCode = 97;
// for(let i=1;i<=5;i++){
//    let line = "";
//    for(let j=1;j<=i;j++){// j=1 1<=1
//       line = line + String.fromCharCode(charCode) +" " ;
//       charCode++;
//    }
//    console.log(line);
// }

//         2
//       2 2
//     2 2 2 
//   2 2 2 2 
// 2 2 2 2 2 

// let space = 5;
// let num = 0;

// for(let i=1;i<=5;i++){
//     let line = "";
//     space--;
//     num++;
//     for(let j=1;j<=space;j++){
//      line = line + " "
//     }
//     for(let k=1;k<=num;k++){
//         line = line + "2"
//     }
//     console.log(line);
// }

// 1
// 2 3
// 4 5 6 
// 7 8 9 10
// 11 12 13 14

let num = 1;
for(let i =1;i<=5;i++){
    let line = ""
    for(let j=1 ;j<=i;j++){
        line = line + num + " ";
        num++;
    }
    console.log(line);
}


// perfect Number :- 6=> 1+2+3 = 6
// prime number :- 2  , 3, 5, 7, 11, 13 ,17
// armstrong number:- 153 => 1*1*1+5*5*5+3*3*3= 153
// factorial number  :- 6! = 720
// fabonacci series :- 0 1 1 2 3 5 8 13 21 34
// palindrome number :- 151 -> 151

// 15 16 17 18  19  20 21 22 23 24 25 26 












