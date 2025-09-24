// for loop

// print the number from 1 to 100.

// for(let i=1;i<=100;i++){
//     console.log(i);
// }

// print the sum of the number from 1 to 30.
// let sum = 0;
// for(let i=1;i<=30;i++){
//     // sum +=i;// assignment operator
//     sum = sum+i;
// }
// console.log(sum);

// print the even number from 1 to 100.
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// print the odd number from 1 to 100.

// print the sum of the even number.
// let sum  =0;
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         sum = sum+i;
//     }
// }
// console.log(sum);

// print the sum of the square of the even number.
// let sum  =0;
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         sum = sum+i*i;
//     }
// }
// console.log(sum);

// print the table of the 7.
// let num =7;
// for(let i=1;i<=10;i++){
//     console.log(i*num);// 1*7 = 7 2*7=14
// }

// fabonacci series -> 0 1 1 2 3 5 8 13 21
// let a = 0;
// let b = 1;
// for(let i=1;i<=9;i++){
//     console.log(a);// 0
//     let temp = a+b;// 1
//     a = b;
//     b = temp;
// }

// a =0  b=1  temp = 1
// a =1   b = 1   temp =2
// a= 1   b = 2   temp = 3
// a= 2  b = 3  temp = 5

// ========================================

// prime number  -> 2, 3,5,7,11,13,17
// perfect number -> 6 -> 1+2+3 = 6   28 -> 1+2+4+7+14 = 28
// armstrong number -> 153 -> 1*1*+5*5*5+3*3*3=> 1+125+27 = 153
// palindrome number -> 151 -> 151

// armstrong

// let num =154;
// let n1 = num;
// let sum = 0;

// while(num>0){ //15>0   // 1>0 // 0>0
//    let digit = num%10;// 153%10 -> 3  --> 15%10 -> 5  -- 1%10 -> 1
//     sum = sum + digit*digit*digit;// 3*3*3 => 27 -- 5*5*5 = 125 -- 1*1*1 = 1  => 27+125+1= 153
//     num = Math.floor(num/10); // 153/10 -> 15/10 -> 1  -- 1/10 = 0
// }
// if(sum===n1){
//     console.log(`${n1} it is armstrong number`);
// }
// else{
//     console.log(`${n1} it is not armstrong number`);

// }

// palindrome number
// let num = 152;
// let n1 = num;
// let rev=0;

// while(num>0){ // 15>0  // 1>0 // 0>0
//     let digit =num%10; // 151%10 = 1 // 15%10 = 5 // 1%10 = 1
//     rev = (rev*10)+digit; // rev = 0+1 = 1  // rev = 10+5 = 15  // rev = 150+1 = 151
//     num = Math.floor(num/10);// 151/10 = 15/10= 1  -- 1%10 = 0

// }
// if(rev ===n1){
//          console.log(`${n1} it is palindrome number`);

// }
// else{
//         console.log(`${n1} it is not palindrome number`);

// }

// perfect number

// let sum = 0;
// let num = 6;
// for(let i=1;i<num;i++){
//     if(num%i===0){
//         sum = sum +i;
//     }
// }
// if(sum===num){
//         console.log(`${num} it is perfect number`);

// }else{
//         console.log(`${num} it is not armstrong number`);
// }

// prime number   2 3 5 7 11

let num = 17;
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= num / 2; i++) { // i=2   2<= 8  i++ -- i=3
        if (num % i === 0) { // 17%2===0  17%3===0
            isPrime = false;
            break;
        }
    }
}
if(isPrime){
  console.log(`${num} is prime`);
}else{
     console.log(`${num} is not prime`);

}
