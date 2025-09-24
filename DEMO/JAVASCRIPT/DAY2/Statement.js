// prompt :- by default it will take String 
// let age = Number(prompt("Enter Your age...."))

// if(age){
//     // console.log(`your age is ${age}`);
//     document.writeln(`your age is ${age}`)
// }


// let age = Number(prompt("Enter Your age...."))

// if (age>18) {
//     document.writeln(`you can drive bcz your age is ${age}`)
// } else {
//   document.writeln(`you can not drive bcz your age is ${age}`)

// }


let age = Number(prompt("Enter Your age...."))
if(age<0){
    alert(`invalid age `)
}else if(age>0 && age<9){
    alert(`you are kid `)
}
else if(age=>9  && ag<18){
  alert(`you are teenager `)
}else{
   alert(`your are adult `)
}



