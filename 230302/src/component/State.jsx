import React from "react";
import { useState } from "react";

function State() {
  let user = "haemin kang";
  // react 에서 변수처럼 자료를 보관할 수 있는 state문법
  let [count, setCount] = useState([0, 0, 0]);
  // let [like, setlike] = useState([0, 0, 0]);

  let [count2, setCount2] = useState(5);
  // 변수에 들어있는 데이터 html에 넣기
  // jsx 중괄호 문법 사용
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때 Array라는 자료형식을 사용한다.
  let [title, setTitle] = useState([
    "DW아카데미 405호",
    "DW아카데미 203호",
    "DW아카데미 301호",
  ]);

  let [user_name, setname] = useState(["강해민", "강해민", "강해민"]);
  let changeName = () => {
    let newName =
      user_name == ["강해민", "강해민", "강해민"]
        ? ["사쿠라", "김채원", "강해민"]
        : ["강해민", "강해민", "강해민"];
    setname(newName);
  };

  let [item, upName] = useState(["hamin", "kang", "tony"]);

  // let bgc = {
  //   backgroundColor: "blue",
  // };

  let [bgColor, setbgColor] = useState("white");

  let changeBg = () => {
    let newBG = bgColor == "white" ? "red" : "white";
    setbgColor(newBG);
  };

  // map함수가 array의 갯수만큼 return을 반복한다.
  // 매게변수(파라미터)를 만들어주면 함수 파라미터가 array자료 안에 있는 데이터가 된다.
  [1, 2, 3].map(function (num) {
    //코드 길어지면 엔터치고 ()안에다가 작성해야한다.
    // return console.log(num);
  });

  // let num = [1, 2, 3, 4, 5];
  // let newArr = num.map(function (element) {
  //   return element * 3;
  // });
  // console.log(newArr);

  //for문과 같다
  // for (let i = 0; i < num.length; i++) {
  //   num[i] = num[i] * 3;
  // }
  // console.log(num);

  // let newNum = num.map((num) => num + 1);
  // // console.log(num);
  // console.log(newNum);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Hello, {user}!</h1>
      <p>This is a React App</p>
      <div>
        <p>클릭시 + {count2}</p>
        <button
          onClick={() => {
            setCount2(count2 + 5);
          }}
        >
          5씩 올라가요
        </button>
      </div>

      {item}

      {/* {["KAmG", "BoRY", "MiN"].map(function (a) {
        return a.toLowerCase();
      })} */}

      {title.map(function (item, index) {
        return (
          <div key={index} className="title">
            <h4>{title[index]}</h4>
            <span>👍 {count[index]}</span>
            <button
              onClick={() => {
                let clone = [...count];
                clone[index] = count[index] + 1;
                setCount(clone);
                console.log(index);
              }}
            >
              좋아요
            </button>

            <button
              onClick={() => {
                let clone = [...count];
                clone[index] = count[index] - 1;
                setCount(clone);
                // setCount(count - 1);
              }}
            >
              싫어요
            </button>
            <p>안녕하세요. 저는 {user_name[index]}입니다.</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          // deep copy
          let copy = [...title];
          // let copy = title; -> 얕은 복사
          copy[2] = "리액트 화나요";
          copy[1] = "어려워라...";
          copy[0] = "아아아아아아아악!";
          console.log(title == copy);
          // 딥카피가 아닐때에는 가져온 값 같은 값이 아니기 때문에(false) 복사를 한다.
          // 얕은 복사는 같은 갚으로 true반환
          setTitle(copy);
        }}
      >
        글 제목
      </button>
      <button
        onClick={() => {
          let textalign = [...title];
          textalign.sort();

          setTitle(textalign);
        }}
      >
        글 정렬
      </button>
      <button
        onClick={changeBg}
        // setbgColor(
        //   (document.querySelector(".App").style.backgroundColor = "red")
        // );

        // setbgColor(bgColor == "" ? "red" : "");
      >
        배경색 바꾸기
      </button>
      <button
        onClick={changeName}
        // let name_btn = [...user_name];
        // name_btn[0] = "김채원";
        // name_btn[1] = "사쿠라";
        // name_btn[2] = "허윤진";

        //name_btn = ["김채원", "사쿠라", "허윤진"]
        //setName(name_btn);
      >
        이름변경
      </button>
      <button
        onClick={() => {
          let copy2 = [...item];
          copy2.map(function (a) {
            let ii = a.toUpperCase();

            upName(ii);
          });
        }}
      >
        대문자로 변경
      </button>
    </div>
  );
}

export default State;
