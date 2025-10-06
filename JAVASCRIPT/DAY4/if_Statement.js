// if statement 
// let age = Number(prompt("Enter Your age...."))
// if(age>18){
//    document.writeln("you can vote....")
// }


// if-else Statement 

// let age = Number(prompt("Enter Your age...."))
// if(age>18){
//    document.writeln("you can vote....")
// }else{
//      document.writeln("you can  not vote....")
// }


// if elseif else 
// let age = Number(prompt("Enter Your age...."))
// if(age<0){
//     alert("not valid age");
// }else if(age>0 && age<9){
//     alert("you are kid");
// } 
// else if(age>=9 && age<=18){
//      alert("you are teenager")
// }
// else{
//      alert("you are adult")
// }

// ========================================

// switch  :- 

let atmCase = prompt("Enter any operation, deposit , withdraw , checkbal , checkpin")

switch(atmCase){
    case "deposit":
        alert("deposit amount")
    break;
    case "withdraw":
        alert("withdraw amount")
        break
    case "checkbal":
        alert("check the balance")
        break;
     case "checkpin":
        alert("change the pin...")
        break;
    default:
        alert("wrong case")
}