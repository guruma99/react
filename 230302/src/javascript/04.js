// ES6 문법은 아니지만, 리액트에서 많이 사용하는 삼항 연산자
let person = {
  name: "haemin",
  age: 70,
};

//조건문
// person이라는게 존재한다면 person.name, 없다면 '없다'라는 텍스트 보이게 하기
if (person) {
  console.log(person.name);
} else {
  console.log("없다");
}

//삼항 연산자
console.log(person ? person.name : "없다");

// 1 (if~else &삼항연산자)
// age가 18살이상이라면 '성인 입니다' 아니라면, '미성년자 입니다'

// if ~ else
// if (person.age >= 18) {
//   console.log("성인 입니다.");
// } else {
//   console.log("미성년자 입니다.");
// }

// // 삼항 연산자
// console.log(person.age >= 18 ? "성인 입니다." : "미성년자 입니다.");

//2.
//아무 배열이나 만들고, 그 배열의 길이가 5이상일 경우 '길다' 아니라면 '짧다'

let arr = ["이지인은", "천사다!", "아프다", "해민", "강"];
console.log(arr.length); // -5개

if (arr.length >= 5) {
  result1 = "길다";
  // console.log("길다");
} else {
  result1 = "짧다";
  // console.log("짧다");
}
console.log(result1);

let result2 = arr.length >= 5 ? "짧다" : "길다";
console.log(result2);

// console.log(arr.length >= 5 ? "길다" : "짧다");

// 3.
// age가 65세 이상일 경우 '노인 입니다.', 18세 이상은 '성인 입니다.'
// 그 이하일 경우 '미성년자 입니다'
// 삼항 연산자 다중 조건

if (person.age >= 18 && person.age < 65) {
  console.log("성인 입니다.");
} else if (person.age >= 65) {
  console.log("노인 입니다.");
} else {
  console.log("미성년자 입니다.");
}

console.log(
  person.age >= 18 && person.age < 65
    ? "성인 입니다."
    : person.age >= 65
    ? "노인 입니다."
    : "미성년자 입니다."
);

// 조건에 () 한번 더 묶어주기 -> 권장하는 방식
// 삼항 연산자로 다중 조건을 작성할 경우에는 조건을 소괄호로 묶어준다.
// console.log(person.age, typeof person.age);

//4
//num1이 num2보다 큰 경우, 'num1 > num2'
//num2이 num3보다 큰 경우, 'num2 > num3'
//num3이 큰 경우 , '숫자가 같거나 num3이 가장 크다'

let num1 = 10;
let num2 = 20;
let num3 = 30;

console.log(
  num1 > num2
    ? "num1 > num2"
    : num2 > num3
    ? "num2> num3"
    : "숫자가 같거나 num3이 가장 크다."
);

let result3 =
  num1 > num2
    ? "num1 > num2"
    : num2 > num3
    ? "num2> num3"
    : "숫자가 같거나 num3이 가장 크다.";

console.log(result3);

//삼항 연산자 논리 계산 (true, false)
//person이 있다면 person.name / 없다면 '이름이 없다'

console.log(person.name ? "이름" + person.name : "이름이 없다");
console.log(person.name == "" ? "이름이 없다" : "이름" + person.name);
