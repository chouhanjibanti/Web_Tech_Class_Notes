// Syntax :- variable[let/var/const] identifier = {
//     key1:value1,
//     key2:value2,
//     key3:value3
// }

// let chair = {
//     color:"",
//     price:"",
//     brand:""
// }


// let person = {
//     name:"tushar",
//     age:20,
//     address:"indore",
//     demo : function(){
//         return "hy i am demo function"
//     },
//     demo1: function(){
//         console.log("hy i am demo1 function");
//     }
// } 
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.demo());// function using this explicit function
// person.demo1();// // function using this implicit function

// ========================================
// [1,2,3,4,6] , "hbihjf" , 
// for of :- values , array , string , maps
// for in :-  keys/indexs , array , object 
// ========================================


// crud :-  create , delete , update

// let pen = {
//     color:"red",
//     price:100,
//     type:"marker"
// }
// console.log(pen);

// // add the keys-value
// pen.size = "10cm"
// console.log(pen);

// // update the key and value 
// pen.color = "yellow"
// console.log(pen);

// // delete the key -value
// delete pen.color;
// console.log(pen);

// =============================================

// let person = {
//     name:"tushar",
//     age:20,
//     address:"indore"
//  }
//  console.log(person);

 // if we want to create the n number object with diff data that will create the blueprint . 
 // this :- keyword :- point to current object 
 // constructor :- when object is created constructor call automatically.
 // new keyword :- for object creation

// before es6 
//  function Person(name , id,address){
//      this.name = name;
//       this.id = id;
//        this.address = address;
//  }

//  let p = new Person("jay",101,"indore");
//   let p1 = new Person("yogesh",102,"mhow");

//  console.log(p.name);
//  console.log(p.address);
//  console.log(p.id);

//  console.log(p1.name);

//  =========================================


// before es6 :- function , 
// after es6 :- class , constructor 

// class Person{

//     constructor(name,id,address){
//       this.name = name;
//       this.id = id;
//        this.address = address;
//     }
// }
// let harsh1 = new Person("harsh",100,"indore")
// let tushar = new Person("tushar",101,"indore1")

// console.log(harsh1.name);
// console.log(harsh1.address);


// =================================

// methods :- 
let person = {
    name:"tushar",
    age:20,
    address:"indore"
 }

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// hasOwnProperty
console.log(person.hasOwnProperty("age"));

// freeze :- we can not do anything. 
Object.freeze(person)
person.age = 22;
console.log(person);



