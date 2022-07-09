let tableOfOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tableOfTwo = tableOfOne.map((no)=>no*2);
console.log("-------------THE TABLE OF TWO ---------");
console.log(tableOfTwo);

let tableOfThree = tableOfOne.map((no)=>no*3);
console.log("-------------THE TABLE OF THREE ---------");
console.log(tableOfThree);


let tableOfFour = tableOfOne.map((no)=>no*4);
console.log("-------------THE TABLE OF FOUR -----------");
console.log(tableOfFour);


let tableOfFive = tableOfOne.map((no)=>no*5);
console.log("-------------THE TABLE OF FIVE -----------");
console.log(tableOfFive);


let evenNo=tableOfOne.filter((no)=>no%2===0);
console.log("-------------EVEN no from 1 to 10-----------");
console.log(evenNo);

let salary=[120570,200432,534532,848585];
let reduceFx=salary.reduce(function(totalSalary,increment){
    return totalSalary+increment;},45000)
    console.log(reduceFx);

