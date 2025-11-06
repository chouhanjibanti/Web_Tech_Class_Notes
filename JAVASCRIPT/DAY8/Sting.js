// let s1 = 'yogesh bate kam kr bhai'
// console.log(s1);


// let s2 = "tushar tum Q has rhe ho.."
// console.log(s2);

// let s3 = `tum sab kya has rhe ho 
// jwbqfnm
// lsndf
// kjnsdf
// kkjbnd`
// console.log(s3);

// Methods of String
// 1. toUpperCase 
// 2. toLowerCase
// 3. startsWith
// 4. endsWith
// 5. includes
// 6. splice
// 7. charCodeAt
// 8. slice
// 9. subString
// 10. length
// 11. split 
// 12. reverse
// 13. repeat


// toUpperCase :- convert the character into Upper case.

let s1 = 'yogeSh';
console.log(s1.toUpperCase());


// toLowerCase :- convert the character into lower case.
let s2 = 'TUshaR'
console.log(s2.toLowerCase());

// startsWith :- check it will start with the String or not.
let s3 = 'hy my name is tushar';
console.log(s3.startsWith('Hy'));

// endsWith :- check it will end with the String or not.
let s4 = 'hy my name is tushar';
console.log(s4.endsWith('tushar'));

// includes :- string is exist or not.
let s5 = 'hy my name is tushar';
console.log(s5.includes('Is'));

// repeat :- it will repeat the String.
let s6= ' hy my name is tushar';
console.log(s6.repeat(5));

// reverse() :- by using this we can reverse the String 
// let s7= ' hy my name is tushar';
// console.log(s7.reverse());

// split() :- it will convert String to Array.
let s7 = 'tushar'
console.log(s7.split(''));

// trim():- remove the whiteSpace from the starting.
let s8 = "      tushar my name"
console.log(s8.trim());

// charCodeAt :- return the ascii value of character. A- 65 , a-97 , 0-48
let s9= 'sarthak'
let char1 = s9.charCodeAt(2)
console.log(char1);

// charAt() :- return the charcter of the index.
let s10= 'sarthak'
let char2 = s10.charAt(2)
console.log(char2);

// replace 
// length
// subString
// slice

// replace:- we can replace the string.
let s11 = "indore to delhi"
let replace1 = s11.replace('indore','ujjain')
console.log(replace1);

// length :- find the length of the character.-> coun the space also
let s12 = "tushar tera name kya"
let length1 = s12.length;
console.log(length1);

// subString :- Syntax:- subString(start index,end index) , end excluse 
// wont accept negative index. [if you pass negative value -> 0]
// slice :- Syntax:- slice(start index,end index) , end excluse
// will accept negative value also

let s13 = "tushar tera name kya";
let subString1 = s13.substring(3,10)
// let subString1 = s13.substring(-6,-1)
console.log(subString1);

// slice :- it will accept the negative value also
let s14 = "tushar tera name kya";
let slice1 = s14.slice(3,10)
let slice2 = s14.slice(-6,-1)
console.log(slice1);
console.log(slice2);













