// let demo = document.links;
// // console.log(demo);

// for(let i=0;i<demo.length;i++){
//     demo[i].className = "c1";
//     demo[i].href = "http://www.youtube.com"
// }
// console.log(document.links);



// Method of DOM :- 
// 1. getElementById()
// 2. getElementByClass()
// 3. getElementByTagName()
// 4. getElementByName


// let demo1 = document.getElementById("demo")
// demo1.style.backgroundColor = "Red"
// demo1.style.color  = "green"
// demo1.textContent = "my name is vashu"


//  getElementByClassName 

// let demo2 =document.getElementsByClassName("c1")
// // console.log(demo2);

// demo2[0].style.backgroundColor = "blue"
// demo2[1].style.backgroundColor = "red"
// demo2[0].textContent = "vashu"


// getElementByTagName 
// let demo3 = document.getElementsByTagName("h3")
// demo3[0].style.color = "red"


// getElementByName 

// let demo4 =document.getElementsByName("name1")
// demo4[0].style.background = "red"



// querySelector

// let demo4 = document.querySelector("#demo")

// demo4.style.backgroundColor  = "red"


// 
let demo4 = document.querySelectorAll(".demo")

demo4[0].style.backgroundColor  = "red"
demo4[0].style.border = "2px solid"
demo4[1].style.backgroundColor  = "red"
demo4[1].style.border = "2px solid"
