// let person = {
//     name:"vashu",
//     id:1,
//     address:"indore"
// }

// console.log(person);
// console.log(person.name);
// console.log(person.address);

  
// caselcase :-  getData , vashuData , methodName , variableName
// pascalcase :- functionName :- GetData
// snake case :- get_data


// approx :- 10- 15
// blueprint :-


// constructor :- constructor will call when object is created .
// this keyword :- point the current object.


// function Person(name , id, address){
//     this.name = name;
//     this.id= id;
//     this.address = address;
// }
// let p = new Person("vashu",101,"indore")
// let p1 = new Person("raja",102,"sanawad")
// let p2 = new Person("aysuh",103,"mhow")

// console.log(p.name);
// console.log(p1.address);


// add , delete , modify
let pen = {
    color:"blue",
    price:100,
    brand :"cello"
}

console.log(pen);

// add 
// pen.size = "10cm"
// console.log(pen);

// // modify
// pen.color = "red"
// console.log(pen);

// // delete 
// delete pen.brand;
// console.log(pen);

// ===================================


console.log(Object.keys(pen));
console.log(Object.values(pen));
console.log(Object.entries(pen));

console.log(pen.hasOwnProperty("age"));

// freeze :- hold the object.
Object.freeze(pen)
pen.color = "green"
console.log(pen);













