console.log("1");

console.log("2");

setTimeout(() => {
    console.log("3");
}, 2000);

Promise.resolve().then(()=>{
    console.log("4");
})

queueMicrotask(()=>{
    console.log("6");
})

console.log("5");


// find the largest element form the array [4,2,5,7,8,9]
// how to sort the array [3,5,7,1,8,9]




