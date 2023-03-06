//Destructuring
//구조를 분해한다.

let person = {
  name: "haemin",
  age: 20,
};

//name이랑 age 라는 값을 변수로 뽑아서 콘솔로그
//옛날 문법
// let name = person.name;
// let age = person.age;
// let name1 = person['name'];
// let age1 = person['age'];
// console.log(age)
// console.log(name1, age1)

//단축표기법
//변수 선언 후 먼저 객체를 써놓고 그 안에 내가 가져오고 싶은 key값을 입력

let {name,age} = person;
console.log(name,age)
console.log(name)

//어떤 객체 안에서 가져오고 싶은 키 값을 맨션하면 그 키값을 이름으로 변수 생성
//그 변수 안에 key 값이 할당된다.
//이 문법은 array[배열]에서도 동일하게 적용된다.
let [a,b, ...lala] = arr
console.log(rest);