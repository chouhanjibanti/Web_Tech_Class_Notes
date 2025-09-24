// Methods of String 
// 1. toUpperCase()
// 2. toLowerCase()
// 3. include()
// 4. endsWith()
// 5. starsWith()
// 6. trim()
// 7. chatAt()
// 8. chatCodeAt()
// 9. indexOf()
// 10. slice()
// 11. split()
// 12. subString()


// 1. toUpperCase()

let s1 = 'vashu'
console.log(s1.toUpperCase());


// 2. toLowerCase()

let s2 = 'VAshU'
console.log(s2.toLowerCase());

// 3. include() -> it will check String is exists or not.

let s3 = 'my name is vashu'
console.log(s3.includes('Vashu'));

// 4. starsWith() -> it will check your string will start

let s4 = 'my name is vashu'
console.log(s3.startsWith('my1'));

// 5. endsWith() -> it will check your string will end 

let s5 = 'my name is vashu'
console.log(s5.endsWith('vashU'));

// 6. trim() :- remove the white space

let s6 = "      vashu"
console.log(s6.trim());

// 7. charAt() :- it will return the character based on the index.

let s7 = "vashutanwar"
console.log(s7.charAt(5));

// 8. charCodeAt()
let s8 = "vashutanwar"
console.log(s7.charCodeAt(5));


// 10. split():- it will convert the String into the Array.
let s10 = "vashutanwar"
console.log(s10.split(''));

// 9. slice() :- by using this we can remove the subString.
// Syntax :- (start index , end index)  -> exclude
//   -6 -5 -4 -3 -2 -1 
let s9 = "vashutanwar"
// console.log(s9.slice(2,6));
// console.log(s9.slice(-6,-1));



// subStr -> deprecated    ---> subString()
// Diff between slice and subString Methods
// slice :- accept negative value also 
// subString :- it wont accept negative values.


// 11. subString :- it will take subString 
let s11 = "vashutanwar"
console.log(s11.substring(-6,-1));

// 12. repeat :- we can repeat the string.
let s12 = "vashu indore "
console.log(s12.repeat(5));








