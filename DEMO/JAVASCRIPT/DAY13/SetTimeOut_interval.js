// setTimeout(() => {
//     console.log("hy indore");
// }, 3000);


// task asynchronous using the setTimeOut

//  function Demo(){
//     setTimeout(() => {
//         async function Demo1(){
//          let res = await fetch("https://jsonplaceholder.typicode.com/comments")
//          console.log(await res.json());
//          }
//          Demo1();
//     }, 2000);
// }
// Demo()



// function Demo2(){
//     setTimeout(()=>{
//         console.log("hy indore 2 seconds");
//     },2000)
// }
// function Demo3(){
//     setTimeout(()=>{
//         console.log("hy indore 4 seconds");
//     },4000)
// }
// function Demo4(){
//     setTimeout(()=>{
//         console.log("hy indore wait 5 seconds");
//     },5000)
// }


// Demo2()
// Demo3()
// Demo4()



// setInterval :- setInterval is function , which run on fixed inertval , repreat.
let count =0;
let interval = setInterval(() => {
     count++;
     console.log(`value of count: ${count}`);

     if(count==10){
        clearInterval(interval)
        console.log("interval stopped...");
     }
}, 1000);
