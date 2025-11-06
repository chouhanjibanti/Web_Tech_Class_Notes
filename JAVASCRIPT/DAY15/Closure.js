// Closure :- A closure is function that remembers the variable from the of the 
// parent function.

// function Parent(){
//     let name = "debugshala";

//     function Child(){
//         console.log(name);
//     }
//     return Child;
// }
// let var1 = Parent();
// var1()
 
// Second Example
function CreateCounter(){
    let count =0;

    function Demo(){
        count++;// 1 // 2 // 3 // 4// 5
        console.log(count);// 1
    }
    return Demo;
}

let c1 = CreateCounter();
c1()
c1()
c1()
c1()
c1()



