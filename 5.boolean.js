// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예:
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear(); // 이전 console을 전부 지운다

// Falshy 거짓인 값
console.log(!!0); // false
console.log(!!-0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

// Truthy 참인 값
console.log(!!1); // true
console.log(!!-1); // true
console.log(!!'text'); // true
console.log(!!{}); // true
console.log(!!Infinity); // true