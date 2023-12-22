/* ********** ceil() **********
          returns upperWard value of given decimal
          
          5.2 = 6
 */
let n = Math.ceil(5.2);

console.log(n);

/* ********** floor() **********
          returns downWard value of given decimal
          
          5.2 = 5
 */

let n1 = Math.floor(5.6);

console.log(n1);

/* ********** round() **********
          returns roundup or roundDown value of given decimal
          
          5.2 = 5 ,6.7  = 7
 */

let n3 = Math.round(5.6);
console.log(n3);

/* ********** trunc() **********
returns only interger value
          
5.2 = 5
 */

let n4 = Math.trunc(5.4);
console.log(n4);

/* ********** max() **********
returns maximum number

 */

let n5 = Math.max(
  3,
  40,
  999,
  9327,
  8768,
  528198,
  82758,
  218907092835908,
  328768178173282
);
console.log(n5);

/* ********** min() **********
returns minimum number

 */

let n6 = Math.min(
  3,
  40,
  999,
  9327,
  8768,
  528198,
  82758,
  218907092835908,
  328768178173282
);
console.log(n6);

/* ********** sqrt() **********

  returns square root
    5*5 =  25
 */

let n7 = Math.sqrt(25);
console.log(n7);

/* ********** cbrt() **********

  returns cubic root
  5*5*5 = 125
 */

let n8 = Math.cbrt(125);
console.log(n8);

/* ********** pow() **********

  returns power of
 */

let n10 = Math.pow(2, 2);
console.log(n10);

/* ********** random() **********

  returns random number 0 to 1
 */

let n11 = Math.random();

let num1 = Math.floor(Math.random() * 100) + 1;
console.log(num1);

/* ********** abs() **********

  returns absolute value
 */

let num2 = Math.abs(4.67);
console.log(num2);

/* ********** PI **********

  returns retuns constant value 3.14
  22/7
 */

let number = Math.PI.toFixed(2);
console.log(number);
