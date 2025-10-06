ternary operator :-

Syntax :- condition ? true : false

Conditional Statement  :- if we have multiple condition that time we can use the conditional statement .

1. if  -> single 
Syntax :- if(condition){
    // stmt;
}


2. ifelse -> true 
   Syntax :- 
   if(condition){
    // stmt -> true
   }else{
    // stmt  -> false
   }


3. if elseif else -> multiple condition
if(condition){
  // stmt
}elseif(condition){
   // stmt
}
elseif(condition){
  // stmt
}
elseif(condition){
  // stmt
}
else{
  // stmt -> false 
}


4. switch -> multiple case -> 
// ATM example :- deposit , withdraw , check balance ,  change pin , xyz

switch(ATM){
    case "deposit":
    clg("deposit amount")
    break;
     case "withdraw":
    clg("withdraw amount")
    break;
     case "check_balance":
    clg("check balance")
    break;
     case "change_pin":
    clg("deposit amount")
    break;
    default:
    clg("wrong case )
}
