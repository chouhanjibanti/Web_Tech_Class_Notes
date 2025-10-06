
let btn = document.getElementById("submit")

btn.onclick = function(e){
    // e.preventDefault();//  html , from ko bydeault refresh


let email = document.getElementById("email").value
let password = document.getElementById("pass").value

// i want to store the data in the localstorage
// for the saving purpose -> setItem 
// for the getting purpose -> getItem

window.localStorage.setItem(email,password);
}

// ================================

// get data logic 


let get = document.getElementById("get")

get.onclick = function(e){

    e.preventDefault();

    let getDataEmail1 =document.getElementById("getDataEmail").value

   let result = window.localStorage.getItem(getDataEmail1);

   if(result!=null) {
       document.getElementById("res").innerText = result;
   } else {
        document.getElementById("res").innerText = "data not found"
   }
}






