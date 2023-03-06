// object shortand Assignment
// ES6에서는 객체를 반환할때 불필요한 반복을 하지 않아도 된다.

let name = "haemin";
let age = 10;

let person = {
  name: name,
  age: age,
};
console.log(person);


//단축 표기법
//키와 키값에 들어가는 변수의 이름이 같다면, 생략하고 한번만 작성해도 된다.
//키와 벨류값이 일치할 때만 줄여서 사용 가능
let person2 = {
  age
}
console.log(person2)