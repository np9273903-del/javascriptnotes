//for of loop
let str="nikhil pati";

for(let i of str){
    console.log(i);
    
}

//for in loop used for objects

let student={
    name:"rahul kumar",
    age:20,

};

for(let key in student){
    console.log(key,student[key]);
    
}




/* =====================================================
   JAVASCRIPT LOOPS - COMPLETE REVISION
   ===================================================== */

/* ----------------------------------------------------- */
/* 1. for Loop */
/* ----------------------------------------------------- */

/*
Syntax:

for(initialization; condition; increment/decrement){
    code
}
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*
Traversal:

i=1 -> print 1
i=2 -> print 2
i=3 -> print 3
i=4 -> print 4
i=5 -> print 5

Output:
1
2
3
4
5
*/

/* ----------------------------------------------------- */
/* 2. for Loop (Reverse) */
/* ----------------------------------------------------- */

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

/*
Output:
5
4
3
2
1
*/

/* ----------------------------------------------------- */
/* 3. Sum of Numbers */
/* ----------------------------------------------------- */

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum);

/*
1+2+3+4+5 = 15
*/

/* ----------------------------------------------------- */
/* 4. while Loop */
/* ----------------------------------------------------- */

/*
Syntax:

while(condition){
    code
}
*/

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

/*
Output:
1
2
3
4
5
*/

/* ----------------------------------------------------- */
/* 5. do...while Loop */
/* ----------------------------------------------------- */

/*
Runs at least once even if condition is false.
*/

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

/*
Output:
1
2
3
4
5
*/

/* ----------------------------------------------------- */
/* 6. Infinite Loop Example */
/* ----------------------------------------------------- */

/*

while(true){
    console.log("Hello");
}

⚠ Never run this unless needed.
It keeps running forever.

*/

/* ----------------------------------------------------- */
/* 7. break Statement */
/* ----------------------------------------------------- */

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

/*
Output:
1
2
3
4

Loop stops at 5
*/

/* ----------------------------------------------------- */
/* 8. continue Statement */
/* ----------------------------------------------------- */

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

/*
Output:
1
2
4
5

3 is skipped
*/

/* ----------------------------------------------------- */
/* 9. Traversing an Array */
/* ----------------------------------------------------- */

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/*
Array:

[10,20,30,40]

Indexes:

0  1  2  3

Traversal:

i=0 -> 10
i=1 -> 20
i=2 -> 30
i=3 -> 40
*/

/* ----------------------------------------------------- */
/* 10. for...of Loop */
/* ----------------------------------------------------- */

/*
Used for Arrays and Strings
*/

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

/*
Output:
Apple
Banana
Mango
*/

/* ----------------------------------------------------- */
/* 11. Traversing a String */
/* ----------------------------------------------------- */

let str = "HELLO";

for (let ch of str) {
    console.log(ch);
}

/*
Output:

H
E
L
L
O
*/

/* ----------------------------------------------------- */
/* 12. for...in Loop */
/* ----------------------------------------------------- */

/*
Used for Objects
*/

let student = {
    name: "Nikhil",
    age: 22,
    city: "Pune"
};

for (let key in student) {
    console.log(key, student[key]);
}

/*
Output:

name Nikhil
age 22
city Pune
*/

/* ----------------------------------------------------- */
/* 13. Nested Loops */
/* ----------------------------------------------------- */

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

/*
Output:

1 1
1 2
1 3

2 1
2 2
2 3

3 1
3 2
3 3
*/

/* ----------------------------------------------------- */
/* 14. Star Pattern */
/* ----------------------------------------------------- */

for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

/*
Output:

*
**
***
****
*****
*/

/* ----------------------------------------------------- */
/* 15. 2D Array Traversal */
/* ----------------------------------------------------- */

let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

        console.log(matrix[i][j]);
    }
}

/*

Matrix:

[
 [1,2,3],
 [4,5,6]
]

i=0
  j=0 -> 1
  j=1 -> 2
  j=2 -> 3

i=1
  j=0 -> 4
  j=1 -> 5
  j=2 -> 6

Output:
1
2
3
4
5
6

*/

/* ----------------------------------------------------- */
/* 16. Count Even Numbers */
/* ----------------------------------------------------- */

let arr = [1,2,3,4,5,6];
let count = 0;

for (let num of arr) {

    if (num % 2 === 0) {
        count++;
    }
}

console.log("Even Count =", count);

/*
Even Count = 3
*/

/* ----------------------------------------------------- */
/* 17. Factorial */
/* ----------------------------------------------------- */

let fact = 1;

for (let i = 1; i <= 5; i++) {
    fact *= i;
}

console.log(fact);

/*
5! =

1×2×3×4×5

= 120
*/

/* ----------------------------------------------------- */
/* 18. Important Loop Summary */
/* ----------------------------------------------------- */

/*

for            -> Fixed number of iterations
while          -> Condition-based loop
do...while     -> Runs at least once
for...of       -> Arrays and Strings
for...in       -> Objects
break          -> Stop loop
continue       -> Skip iteration
Nested Loop    -> Loop inside loop

*/

/* =====================================================
   END OF JAVASCRIPT LOOPS
   ===================================================== */