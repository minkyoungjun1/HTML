// 함수(Function)
// 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

// 함수 선언
function helloFunc() {
  // 실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc();

function returnFunc() {
  return 123; // 숫자 123를 밖으로 반환
}

let a1 = returnFunc();

console.log(a1);

// 함수 선언!
function sum(a, b) { // a와 b는 매개변수(Parameters)
  return a + b;
}

// 재사용!
let a = sum(1, 2); // 1과 2는 인수(Arguments)
let b = sum (7, 12);
let c = sum(2, 4);

console.log(a, b, c);

// 기명(이름이 있는) 함수
// 함수 선언
function hello() {
  console.log('Hello~');
}

// 익명(이름이 없는) 함수 - 데이터로 활용, 변수에 저장
// 함수 표현
let world = function () {
  console.log('World~');
}

// 함수 호출!
hello();
world();

// 객체 데이터
const heropy = {
  name : 'HEROPY',
  age : 85,
  // 메소드(method)
  getName: function () {
    return this.name;
  }
};

const hisName = heropy.getName();
console.log(hisName);
// 혹은
console.log(heropy.getName());