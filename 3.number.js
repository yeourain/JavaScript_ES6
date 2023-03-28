/** 데이터 타입 Data Type
 *      원시 primitive (단일 데이터)
 *          - number (BigInt)
 *          - string
 *          - boolean
 *          - null
 *          - undefined
 *          - Symbol
 *      객체 object (복합 데이터)
 *          - object (array)
 *          - function
 */

let integer = 123; // 정수
let negative = -123 // 음수
let double = 1.23; // 실수
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o172; // 8진수
let hex = 0x7b; // 16진수
console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN (Not a Number)

let bigInt = 123456789012345678901234567890123456789n;
console.log(bigInt);
