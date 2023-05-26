// 변수는 재사용이 가능!
// 변수 선언!

let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// let : 값(데이터)의 재할당 가능!

let a1 = 12;
console.log(a1);

//a1 = 999;
//console.log(a1);

// const : 값(데이터)의 재할당 불가!

const a2 = 12;
console.log(a2);

//a2 = 999;
//console.log(a2); // TypeError: Assignment to constant variable.

// 예약어
// 특별한 의미를 가지고 있어서, 변수나 함수 이름 등으로 사용할 수 없는 단어

let this = 'Hello'; // SyntaxError : 문법에러
let if = 123; // SyntaxError : 문법에러
let break = true; // SyntaxError : 문법에러