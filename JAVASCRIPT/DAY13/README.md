Synchronous  :- line by line 

5 function :- 
1 , 2 ,3 ,4, 5 -> 1 , 2 , 3 ,4, 5

===============================================
Asynchronous :-  parallel

5 Function :- 
1,2,3,4,5 -> 3,4,5,2,1

===============================================


promises :- Promises is a js object.A promises is way to handle the Asynchronous programming.It represents tha task either completed/resolve/fullfill or reject/failed in the future.Promises help to write cleaner an readable.

Three Stages :- 
1. Pending 
2. Resolve/Completed/FullFill
3. Reject/Failed

methods :- 
.then()
.catch()


Instagram :- 

Post like ---> 10 ❤
1. pending :- request send to instagram server.
2. resolve :- 10❤ - 11❤  -> update the value of the like.
3. reject :- 10❤ - 10❤ -> crash, network disconnect 


Syntax of Promises :- 

new Promise((resolve,reject)=>{

})