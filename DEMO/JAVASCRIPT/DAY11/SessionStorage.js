// let btn = document.getElementById("btn");

// btn.onclick = function (e) {
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("pass").value;
//   let address = document.getElementById("add").value;
//   let phone = document.getElementById("phone").value;

//   const userData = {
//     password: password,
//     address: address,
//     phone: phone,
//   };

//   window.sessionStorage.setItem(email, JSON.stringify(userData));
// };

// // get data logic

// let getBtn1 = document.getElementById("getBtn");

// getBtn1.onclick = function(e) {

//     e.preventDefault();
//   let e1 = document.getElementById("getDataEmail").value;
//   let userData1 = window.sessionStorage.getItem(e1);

//   if (userData1 != null) {
//     let obj = JSON.parse(userData1);
 
//     document.getElementById("result").innerText = 
//     "Password : " + obj.password
//     "Address :" + obj.address
//     "phone : " + obj.phone
//   } else {
//     document.getElementById("result").innerText = "data not found ";
//   }

 
// };




let btn = document.getElementById("btn");

btn.onclick = function (e) {
  e.preventDefault(); // prevent page refresh

  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let address = document.getElementById("add").value;
  let phone = document.getElementById("phone").value;

  const userData = {
    password: password,
    address: address,
    phone: phone,
  };

  window.sessionStorage.setItem(email, JSON.stringify(userData));
  alert("Data Saved in Session Storage ✅");
};

// get data logic
let getBtn1 = document.getElementById("getBtn");

getBtn1.onclick = function (e) {
  e.preventDefault(); // prevent refresh

  let e1 = document.getElementById("getDataEmail").value;
  let userData1 = window.sessionStorage.getItem(e1);

  if (userData1 != null) {
    let obj = JSON.parse(userData1);

    document.getElementById("result").innerText =
      "Password : " + obj.password + "\n" +
      "Address : " + obj.address + "\n" +
      "Phone : " + obj.phone;
  } else {
    document.getElementById("result").innerText = "Data not found ❌";
  }
};
