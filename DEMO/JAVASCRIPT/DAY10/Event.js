// let btn = document.getElementById("btn")

// btn.onclick = function(e){
//      console.log("hy vashu");
//     // console.log(e);
// }

// ===========================================

// let otp = document.getElementById("otp")
// otp.onclick = function(e){
//     let result =Math.floor(Math.random() * 10000) // 9999
//     // console.log(result);
//     alert(`my otp is ${result}`)
// }

// ===========================================

// hexadecimal :- 0-9  a-f   -> fae9

// let color =document.getElementById("color")
// color.onclick = function(e){
//     let res = Math.floor(Math.random() * 10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`;
// }

// ===========================================


// onKeyUp and onKeyDown
// let key1 = document.getElementById("key")
// key1.onkeyup = function(e){
//     let res = Math.floor(Math.random() * 10000).toString(16);
// //     console.log(res);
//     document.body.style.backgroundColor = `#${res}`;
// }


// ===========================================

// onMouseOver  and onMouseLeave

// let mouse1 = document.getElementById("mouse")
// mouse1.onmouseleave = function(e){
//     let res = Math.floor(Math.random() * 10000).toString(16);
//      mouse1.style.backgroundColor = `#${res}`
// }

// ===========================================


// onSubmit - form
// function formData(){
//     alert("form is submitted....")
// }

// ===========================================


// addEventListener

let addEvent = document.getElementById("addEvent");

addEvent.addEventListener("click", function () {
  alert("your addEventListened is working...");
});
