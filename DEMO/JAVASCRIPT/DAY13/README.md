Synchronous :-  wait for the completion.

n number of methods , function
1  -> start -> complete 
2  -> start -> complete
3
4
5
=====================

Aysnchronous :- parallel work , jo jaldi complete output return

n number of methods , function
1  -> start -> output5
2  -> start -> output1
3  -> start -> output3
4  -> start -> output2
5  -> start -> output4

===============================

<!-- async and await :-  -->

what is async and await :- 
-> it is way for handling the promises.
-> code asynchornous rhega but synchronous.


why we use this Async and await :- 
-> .then() and .catch ko simplfy krne ke liye.
-> by using this we can write the readable code.


Real time case :- 
1. Complex asynchornous operation[e.g ek ke bad ek API calls]

instagram :- feed refresh -> 1,2,3


=================

pascal case :- Function :- GetDemo
camel case :- var/method : getDemo , toUpperCase


Paramter and arguments
Paramter  : access
Argument : pass

async :- always use with function.


Object :- 
let person = {
    "name":"vashu",
    "id":1
}


===================================================


setTimeOut and setInterval 

setTimeOut:- 
1. by using this setTimeout we can make the asynchrous operation.
2. we can perform the task afte the specific time period.

setTimeout(()=>{
   clg("hy")
},time)


setInterval :- 
1. byusing this setInterval given time period specific task perform , condition.
2. setInterval :- setInterval is function , which run on fixed inertval , repreat.


Real time useCase :- 
Real time upadtes :- stock price , cryptocurrency market 


Syntax :- 
setInterval(()=>{

},2000)

event loop in js :- 
closure :- 





