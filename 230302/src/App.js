/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import State from "./component/State";
import { useState } from "react";
import Box from "./component/Box";
import Comment from "./component/Comment";
import Reply from "./component/Reply";

function App() {
  //State 라는거에 반응하기 때문에 react
  //리액트는 변수 없이 업데이트 됐다고 UI를 재렌더링 하지않는다.
  //State가 변경 되었을 때만 UI를 재렌더링 한다.
  // let num = 0;
  // useState
  // 1. import { useState } from "react";
  // state를 사용하기 위해서 react에서 usestate를 데려온다.
  // usestate => 리액트에서 제공하는 함수 중 하나 (훅)
  // useState라는 함수가 무엇을 리턴하느냐?
  // 아이템이 2개 들어있는 배열(Array)리턴
  // 1. 초기값을 담고있는 state 변수
  // 2. state값을 변경할 수 있도록 도와주는 set함수
  // 이 두가지 값을 배열로 리턴한다.
  // state를 변수처럼 사용하면 안되고, 값을 변경할 때는 항상 변경함수를 호출하고
  // 값을 그 안에 집어 넣어야 한다.
  // const [count, setCount] = useState(0);
  // let increase = () => {
  //   num = num + 1;
  //   setCount(count + 1);
  //   //state값이 업데이트 될 때 마다 function App을 다시 실행 시키면서 변경된 UI를 업데이트
  //   //변수는 값을 저장하지 않고 함수가 호출될때마다 초기화 된다.
  //   console.log("num", num, "state", count);
  //   // console.log(count);
  // };
  //console.log 두개 찍히는 이유 index.js의 <React.StrictMode> 떄문이다.
  //App.js에 작성한 내용은 index.js를 거쳐서 'root'라는 아이디 값을 div에 그려진다.
  //ScrictMode
  //리액트로 개발할 때, 잠재적인 문제가 있는지 검사 해주는 모드
  //StrictMode 스스로 문제점을 찾아주는건 아니지만,
  //문제가 될 수 있는 함수를 두번 실행해서 쉽게 문제를 찾을 수 있게 도와주는 역할
  //버그가아니라 react에서 의도되게 만들어놓은 기능이다.
  // 💡 -> 콘솔 두번찍히는게 싫으면? index.js의 <React.StrictMode> 를 없애고 <App></App>만 남겨놓으면된다.
  // index.js =>
  // let a = 123;
  // console.log(a);
  // 함수는 되돌아가 호출할 때 num 다시초기값으로 가져오게 된다.
  //state의 값 반영이 한 박자씩 늦는 이유
  //state값이 변경되어 함수가 호출 될때 바로 변경값을 실행 하는게 아니라
  //변경 되어야하는 set 함수들을 싹 모아서 함수가 끝나고 나서 한번에 처리한다. (비동기적)
  //state 주의할 점
  //state는 기존 값을 잃어버리지 않고 기억하고 있다.
  // let num1 = [1, 2, 3, 4];
  // let name = ["해민", "승호", "원재", "재학"];
  // return (
  //   <div className="App">
  //     {/* <Box num="1" name="강"></Box>
  //     <Box num="2" name="이"></Box>
  //     <Box num="3" name="최"></Box>
  //     <Box num="4" name="김"></Box> */}
  //     {/* {name.map(function (a, i) {
  //       return (
  //         <div className="box" key={i}>
  //           <h1>Box{num1[i]}</h1>
  //           <h2 className="red">{name[i]}</h2>
  //         </div>
  //       );
  //     })} */}
  // {name.map(function (a, i) {
  //   return (
  //     <div key={i}>
  //       <Box num1={[i]} name={name[i]}></Box>
  //     </div>
  //   );
  // })}
  //   </div>
  // );
  // let reply = ["리액트어려워요~", "헷갈려", "화나!!!"];
  // let name = ["해민", "승호", "원재"];
  // return (
  //   <div className="App">
  //     {name.map(function (a, i) {
  //       return (
  //         <div key={i}>
  //           <Comment name={name[i]} reply={reply[i]}></Comment>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  return (
    <div className="App">
      <Reply></Reply>
    </div>
  );
}
export default App;
