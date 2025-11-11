// declarration
// let a;
// var b;
// const c;


// var a = 10;
// a=20;

// let b = 20;
// b = 30;

// const c = 40;
// c = 50;
// console.log(c);

// var a= 10;
// var a = 20;

// let b = 100;
// let b = 200;

// const c = 1000;
// const c = 200;

// let i = 100
// do{
//   console.log("hy");
// }while(i<10)



// async function Name(params) {
//     try {
       
//     } catch (error) {
//         console.log(error);
//     }
// }


// String :- 

// -> '' , "" , ``

// let s1 = 'ijnc'

// DOM :- Document object 

// closure :- 
function Parent(){

    let name = "tushar"
    function Child(){
        console.log(`${name}`);
    }
    return Child();
}
let obj = Parent()
obj
