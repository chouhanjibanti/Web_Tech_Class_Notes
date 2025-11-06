// function Parent(){
//     let name = "vashu"

//     function Child(){
//         console.log(`Hello ${name}`);
//     }
//     return Child;
// }
// let child1 = Parent();
// child1()


// ====================================

// second Example :- 

// function CreateCounter(){
//    let count = 0;

//    return function(){
//      count++;// 1 // 2 // 3. // 4// 5
//      console.log(count);
//    }
// }
// let demo1 = CreateCounter();
// demo1()
// demo1()
// demo1()


// ===================================

// find the largest element from the array [4,2,5,7,8,9]

// let arr = [4,2,5,7,8,9];
// let max = arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){// arr[1]>arr[0] => 2>4 , arr[2]>arr[0] => 5>4 , 7>5 , 8>7
//         max = arr[i];// max = 5 , 7 , 8 , 9
//     }

// }
// console.log(max);

// ==========================================

// sort the array using the sort methods 

// ASCII value :- American standard code information interchange
// A = 65 ,66,67,68,
// a = 97 , 98 , 99 , 100
// let arr2 = ['b','s','d','z','A','T','Z']
// let sort1 = arr2.sort();
// console.log(sort1);


// let arr1  = [100,2,300,5,900,10] // [2,5,10,100,500] // ascending

// let sort2 = arr1.sort((a,b)=> b-a )
// console.log(sort2);
// working :- 
// a , b  -> 100, 2 = 98 , 100-300 = -200 , 300-5 = 295 , 300-900 = -600 , 900-10= 890
// positive -> swap -> [2,100,300,5,900,10]
// negative -> no swap -> [2,100,300,5,900,10] , [2,100,3,300,900,10] ,  [2,100,3,300,10,900]
// zero 


// ===============================================

// Bubble sort 

let arr =  [100,2,300,5,900,10];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp;
        }
    }
}
console.log(arr);



