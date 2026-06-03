/* =====================================================
   JAVASCRIPT ARRAYS - COMPLETE REVISION
   ===================================================== */

/* ----------------------------------------------------- */
/* 1. Creating Arrays */
/* ----------------------------------------------------- */

let numbers = [10, 20, 30, 40];
let fruits = ["Apple", "Banana", "Mango"];
let mixed = [10, "Nikhil", true];

console.log(numbers);
console.log(fruits);
console.log(mixed);

/* ----------------------------------------------------- */
/* 2. Accessing Elements */
/* ----------------------------------------------------- */

let arr = [10, 20, 30, 40];

console.log(arr[0]); // 10
console.log(arr[1]); // 20
console.log(arr[2]); // 30
console.log(arr[3]); // 40

/*
Indexes

Array = [10,20,30,40]

Index =  0  1  2  3
*/

/* ----------------------------------------------------- */
/* 3. Array Length */
/* ----------------------------------------------------- */

console.log(arr.length);

/*
Output:
4
*/

/* ----------------------------------------------------- */
/* 4. Modifying Elements */
/* ----------------------------------------------------- */

arr[1] = 200;

console.log(arr);

/*
[10,200,30,40]
*/

/* ----------------------------------------------------- */
/* 5. Traversing Array using for Loop */
/* ----------------------------------------------------- */

let nums = [10,20,30,40];

for(let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

/*

Traversal

i=0 -> nums[0] -> 10
i=1 -> nums[1] -> 20
i=2 -> nums[2] -> 30
i=3 -> nums[3] -> 40

Output

10
20
30
40

*/

/* ----------------------------------------------------- */
/* 6. Traversing Array using for...of */
/* ----------------------------------------------------- */

for(let num of nums){
    console.log(num);
}

/*
Output

10
20
30
40
*/

/* ----------------------------------------------------- */
/* 7. Adding Elements */
/* ----------------------------------------------------- */

/* push() */

let data = [10,20,30];

data.push(40);

console.log(data);

/*
[10,20,30,40]
*/

/* unshift() */

data.unshift(5);

console.log(data);

/*
[5,10,20,30,40]
*/

/* ----------------------------------------------------- */
/* 8. Removing Elements */
/* ----------------------------------------------------- */

/* pop() */

data.pop();

console.log(data);

/*
Removes last element
*/

/* shift() */

data.shift();

console.log(data);

/*
Removes first element
*/

/* ----------------------------------------------------- */
/* 9. indexOf() */
/* ----------------------------------------------------- */

let values = [10,20,30,40];

console.log(values.indexOf(30));

/*
Output:
2
*/

/* ----------------------------------------------------- */
/* 10. includes() */
/* ----------------------------------------------------- */

console.log(values.includes(20));

/*
true
*/

/* ----------------------------------------------------- */
/* 11. join() */
/* ----------------------------------------------------- */

let fruits2 = ["Apple","Banana","Mango"];

console.log(fruits2.join("-"));

/*
Apple-Banana-Mango
*/

/* ----------------------------------------------------- */
/* 12. reverse() */
/* ----------------------------------------------------- */

let reverseArr = [1,2,3,4,5];

reverseArr.reverse();

console.log(reverseArr);

/*
[5,4,3,2,1]
*/

/* ----------------------------------------------------- */
/* 13. sort() */
/* ----------------------------------------------------- */

let sortArr = [5,2,9,1,7];

sortArr.sort((a,b) => a-b);

console.log(sortArr);

/*
[1,2,5,7,9]
*/

/* ----------------------------------------------------- */
/* 14. Sum of Array Elements */
/* ----------------------------------------------------- */

let marks = [10,20,30,40];
let sum = 0;

for(let i = 0; i < marks.length; i++){
    sum += marks[i];
}

console.log(sum);

/*
10+20+30+40

= 100
*/

/* ----------------------------------------------------- */
/* 15. Find Maximum Element */
/* ----------------------------------------------------- */

let maximum = [10,40,5,70,25];

let max = maximum[0];

for(let i = 1; i < maximum.length; i++){

    if(maximum[i] > max){
        max = maximum[i];
    }
}

console.log(max);

/*
70
*/

/* ----------------------------------------------------- */
/* 16. Find Minimum Element */
/* ----------------------------------------------------- */

let minimum = [10,40,5,70,25];

let min = minimum[0];

for(let i = 1; i < minimum.length; i++){

    if(minimum[i] < min){
        min = minimum[i];
    }
}

console.log(min);

/*
5
*/

/* ----------------------------------------------------- */
/* 17. Count Even Numbers */
/* ----------------------------------------------------- */

let evenArr = [1,2,3,4,5,6,7,8];
let count = 0;

for(let num of evenArr){

    if(num % 2 === 0){
        count++;
    }
}

console.log(count);

/*
4
*/

/* ----------------------------------------------------- */
/* 18. Array Traversal Explanation */
/* ----------------------------------------------------- */

/*

Array = [10,20,30,40]

Index =  0  1  2  3

for(let i=0; i<arr.length; i++)

i=0 -> arr[0] -> 10
i=1 -> arr[1] -> 20
i=2 -> arr[2] -> 30
i=3 -> arr[3] -> 40

Loop ends because

i=4

4 < 4 -> false

*/

/* ----------------------------------------------------- */
/* 19. 2D Array */
/* ----------------------------------------------------- */

let matrix = [
    [1,2,3],
    [4,5,6]
];

console.log(matrix[0][0]);
console.log(matrix[1][2]);

/*
1
6
*/

/* ----------------------------------------------------- */
/* 20. 2D Array Traversal */
/* ----------------------------------------------------- */

for(let i = 0; i < matrix.length; i++){

    for(let j = 0; j < matrix[i].length; j++){

        console.log(matrix[i][j]);
    }
}

/*

Matrix

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

Output

1
2
3
4
5
6

*/

/* ----------------------------------------------------- */
/* 21. Richest Customer Wealth Example */
/* ----------------------------------------------------- */

let accounts = [
    [1,5],
    [7,3],
    [3,5]
];

let richest = 0;

for(let i = 0; i < accounts.length; i++){

    let wealth = 0;

    for(let j = 0; j < accounts[i].length; j++){

        wealth += accounts[i][j];
    }

    if(wealth > richest){
        richest = wealth;
    }
}

console.log(richest);

/*

Customer 1

1 + 5 = 6

Customer 2

7 + 3 = 10

Customer 3

3 + 5 = 8

Maximum = 10

*/

/* ----------------------------------------------------- */
/* 22. Important Array Methods Summary */
/* ----------------------------------------------------- */

/*

length      -> Size of array
push()      -> Add at end
pop()       -> Remove from end
unshift()   -> Add at beginning
shift()     -> Remove from beginning
indexOf()   -> Find index
includes()  -> Check element exists
join()      -> Convert to string
reverse()   -> Reverse array
sort()      -> Sort array

*/

/* =====================================================
   END OF JAVASCRIPT ARRAYS
   ===================================================== */