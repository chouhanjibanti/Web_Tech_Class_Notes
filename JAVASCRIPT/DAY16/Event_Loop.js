// Event loop Implementation
console.log("1");

console.log("2");

setTimeout(() => {
     console.log("3");
}, 0);

Promise.resolve().then(()=>{
    console.log("4");
})

console.log("5");

// 1 // 2 // 5 // 4 // 3