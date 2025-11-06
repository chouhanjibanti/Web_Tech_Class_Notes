// *
// * *
// * * *
// * * * *
// // * * * * *

// let rows = 5;
// let star = 6;
// let space = -1;

// for(let i =1;i<=rows;i++){
//     star--;//
//     space++;//0
//     let line = '';
//     for(let j=1;j<=space;j++){
//         line = line + " "
//     }
//      for(let k=1;k<=star;k++){
//         line = line + "*"
//     }
//     console.log(line);
// }

// i=1 ; 1<=5 -> True   || star =1
    // j=1  1<=1 -> T     *
    // j=2  2<=1 -> F

// i=2   2<=5 True || star = 2
     // j=1   1<=2  -> True    => *
    // j=2    2<=2   -> true   => *  *
    // j=3    3<=2   -> False 



//  a 
//  b c 
//  d e f 
//  g h i j
//  k l m n o

let rows = 5;
let num = 1;
for(let i =1;i<=rows;i++){
    let line = '';
    for(let j=1;j<=i;j++){
        line = line + num+" ";
        num++;
    }
    console.log(line);
}
