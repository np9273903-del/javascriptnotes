/* =====================================================
   JAVASCRIPT STRINGS - COMPLETE REVISION
   ===================================================== */

/* 1. Creating Strings */

let str1 = "JavaScript";
let str2 = 'Programming';
let str3 = `Welcome`;

console.log(str1);
console.log(str2);
console.log(str3);

/* ----------------------------------------------------- */
/* 2. String Length */
/* ----------------------------------------------------- */

let str = "JavaScript";

console.log("Length:", str.length); // 10

/* ----------------------------------------------------- */
/* 3. Accessing Characters */
/* ----------------------------------------------------- */

console.log(str[0]);       // J
console.log(str[1]);       // a
console.log(str.charAt(2)); // v

/* ----------------------------------------------------- */
/* 4. String Traversal using for Loop */
/* ----------------------------------------------------- */

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

/*
J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9

i=0 -> J
i=1 -> a
i=2 -> v
i=3 -> a
i=4 -> S
i=5 -> c
i=6 -> r
i=7 -> i
i=8 -> p
i=9 -> t
*/

/* ----------------------------------------------------- */
/* 5. String Traversal using for...of */
/* ----------------------------------------------------- */

for (let ch of str) {
    console.log(ch);
}

/* ----------------------------------------------------- */
/* 6. Convert Case */
/* ----------------------------------------------------- */

console.log(str.toUpperCase()); // JAVASCRIPT
console.log(str.toLowerCase()); // javascript

/* ----------------------------------------------------- */
/* 7. Find Character Position */
/* ----------------------------------------------------- */

console.log(str.indexOf("S")); // 4
console.log(str.lastIndexOf("a")); // 3

/* ----------------------------------------------------- */
/* 8. Check Character or Word Exists */
/* ----------------------------------------------------- */

console.log(str.includes("Script")); // true
console.log(str.includes("Python")); // false

/* ----------------------------------------------------- */
/* 9. Extract Part of String */
/* ----------------------------------------------------- */

console.log(str.substring(0, 4)); // Java
console.log(str.slice(4, 10));    // Script

/*
substring(0,4)

J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9

Start = 0
End = 4 (not included)

Output = Java
*/

/* ----------------------------------------------------- */
/* 10. Replace Text */
/* ----------------------------------------------------- */

let msg = "I like Java";

console.log(msg.replace("Java", "JavaScript"));

/* ----------------------------------------------------- */
/* 11. Split String */
/* ----------------------------------------------------- */

let fruits = "apple,banana,mango";

let result = fruits.split(",");

console.log(result);

/*
[
  "apple",
  "banana",
  "mango"
]
*/

/* ----------------------------------------------------- */
/* 12. Remove Spaces */
/* ----------------------------------------------------- */

let name = "   Nikhil   ";

console.log(name.trim());

/* ----------------------------------------------------- */
/* 13. Concatenate Strings */
/* ----------------------------------------------------- */

let firstName = "Nikhil";
let lastName = "Patil";

console.log(firstName + " " + lastName);

/* ----------------------------------------------------- */
/* 14. Template Literals */
/* ----------------------------------------------------- */

let age = 22;

console.log(`My name is ${firstName} and age is ${age}`);

/* ----------------------------------------------------- */
/* 15. Starts With & Ends With */
/* ----------------------------------------------------- */

console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true

/* ----------------------------------------------------- */
/* 16. Repeat String */
/* ----------------------------------------------------- */

console.log("Hi ".repeat(3));

/*
Hi Hi Hi
*/

/* ----------------------------------------------------- */
/* 17. Convert String to Array */
/* ----------------------------------------------------- */

let word = "HELLO";

let arr = word.split("");

console.log(arr);

/*
["H","E","L","L","O"]
*/

/* ----------------------------------------------------- */
/* 18. Count Vowels */
/* ----------------------------------------------------- */

let text = "JavaScript";
let count = 0;

for (let ch of text.toLowerCase()) {
    if ("aeiou".includes(ch)) {
        count++;
    }
}

console.log("Vowels =", count);

/*
Vowels = 3
*/

/* ----------------------------------------------------- */
/* 19. Reverse a String */
/* ----------------------------------------------------- */

let original = "hello";

let reversed = original.split("").reverse().join("");

console.log(reversed);

/*
olleh
*/

/* ----------------------------------------------------- */
/* 20. Important String Methods Summary */
/* ----------------------------------------------------- */

/*

length          -> Number of characters
charAt()        -> Character at index
toUpperCase()   -> Uppercase
toLowerCase()   -> Lowercase
indexOf()       -> First occurrence position
lastIndexOf()   -> Last occurrence position
includes()      -> Check existence
substring()     -> Extract part of string
slice()         -> Extract part of string
replace()       -> Replace text
split()         -> Convert to array
trim()          -> Remove spaces
startsWith()    -> Check starting text
endsWith()      -> Check ending text
repeat()        -> Repeat string

*/

/* =====================================================
   END OF JAVASCRIPT STRINGS
   ===================================================== */