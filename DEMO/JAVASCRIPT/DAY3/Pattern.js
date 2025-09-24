// *
// * *
// * * *
// * * * *
// * * * * *

// let rows = 5;
// let star = 0;

// for(let i=0;i<5;i++){ // i=0 0<5 -> True // i=1 1<5 T
//     star++; // 1 // 2
//     let line = '';
//     for(let j=0;j<star;j++){ // j=0 0<1 -> True // j=1 1<1 -> False
//        line = line + "*"
//     }
//     console.log(line);
// }

// *
// * * 
// * * *
// * * * *
// * * * * *


// =====================================


// 5. 

//      *
//     **
//    ***
//   ****
//  *****

// let rows = 5;
// let star = 0;
// let space = 5;

// for(let i=0;i<rows;i++){
//     star++;// 1
//     space--;// 4
//     let line = '';
//     for(let j=0;j<space;j++){
//         line = line + " "
//     }
//     for(let k=0;k<star;k++){
//         line = line + "*"
//     }
//     console.log(line);
// }


// 2.
// * * * * *
// * * * *
// * * *
// * *
// *

// let rows = 5;
// let star = 6;
// let space = -1;

// for(let i=0;i<rows;i++){
//     star--;// 1
//     space++;// 4
//     let line = '';
//     for(let j=0;j<star;j++){
//         line = line + "*"
//     }
//     for(let k=0;k<space;k++){
//         line = line + " "
//     }
//     console.log(line);
// }


// 4.
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let star = 6;
// let space = -1;



// 3.
//        *
//      *   *
//    *   *   *
// *    *    *   *

// let rows = 4;
// let star = 0;
// let space = 4;
// for(let i=0;i<rows;i++){
//     star++;
//     space--;
//     let line = '';
//     for(let j=0;j<space;j++){
//         line = line + " "
//     }
//     for(let k=0;k<star;k++){
//         line = line + "* "
//     }
//     console.log(line);
// }


// 7.  
//         *
//       * * *
//     * * * * *
//   * * * * * * *

// let rows = 4;
// let star= -1;  // -1+2 => 1
// let space = 4;
// for(let i=0;i<rows;i++){
//     star+=2;
//     space--;
//     let line = '';
//     for(let j=0;j<space;j++){
//         line = line + "  "
//     }
//     for(let k=0;k<star;k++){
//         line = line + "* "
//     }
//     console.log(line);
// }


// 6.
// 1 
// 2 3
// 4 5 6
// 7 8 9 10

// let num =1;
// for(let i=0;i<4;i++){ // i=0 0<4  T // i=1 1<4 T
//     let line = " ";
//     for(let j=0;j<=i;j++){ // j=0 0<=0  T // j=1 1<=0 F  j=0 0<=1 T j=1 1<=1 T  j=2 2<=1
//         line = line + num + " " // 1
//         num++;  // 2 // 3 // 4
//     }
//     console.log(line);
// }


// 1 
// 2 3
// 4 5 6 
// 7 8 9 10


// 8.  
// a 
// b c 
// d e f 
// g h i j


// let charCode = 97;
// for(let i=0;i<4;i++){
//     let line = ' ';
//     for(let j=0;j<=i;j++){
//         line = line + String.fromCharCode(charCode) + " "
//         charCode++;
//     }
//     console.log(line);
// }


// A- 65 +32 = 97
// a - 97 98 99
