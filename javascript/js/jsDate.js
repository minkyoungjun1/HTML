// String (문자 데이터)
// 따옴표를 사용

let myName = "HEROPY";
let email = 'thesecon@gmail.com';
let hello = `Hello ${myName}?!`;

console.log(myName);
console.log(email);
console.log(hello);

// Number (숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냄

let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity);

// Boolean (불린 데이터)
// true, false 두 가지 값 밖에 없는 논리데이터

let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined
// 값이 할당되지 않은 상태

let undef;
let obj = { abc : 123 };

console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

// Null
// 어떤 값이 의도적으로 비어있음을 의미

let empty = null;

console.log(empty);

// Object (객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장 {  }

let user = {
  // Key : Value,
  name : 'HEROPY',
  age : 85,
  isValid: true
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.isValid);

// Array (배열 데이터)
// 여러 데이터를 순차적으로 저장 [  ]

let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);