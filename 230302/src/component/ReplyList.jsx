import React, { useState } from "react";
import comment from "./Comment";
import Reply from "./Reply";

const comments = [
  {
    name: "카즈하",
    comment: "김고은 닮았어!! 너무예뻐",
  },
  {
    name: "김채원",
    comment: "쌈무 채원",
  },
  {
    name: "허윤진",
    comment: "내 원픽...❤",
  },
];

const data = [
  {
    name: "사쿠라",
    comment: "쿠라쿠라쿠라쿠라",
  },
  {
    name: "홍은채",
    comment: "잼민이",
  },
  {
    name: "카즈하",
    comment: "김고은 닮았어!! 너무예뻐",
  },
  {
    name: "김채원",
    comment: "쌈무 채원",
  },
  {
    name: "허윤진",
    comment: "내 원픽...❤",
  },
];

function ReplyList() {
  const [copyItem, setRemove] = useState(comments);

  function OnRemove(x) {
    let copy = [...copyItem];
    console.log(copy);
    copy.splice(x, 1);
    setRemove(copy);
    console.log(x);
  }

  // const [addItem, setAdd] = useState(data);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  function OnAdd() {
    const add = { name: name, comment: content };
    setRemove([...copyItem, add]);
    setName("");
    setContent("");

    // const add = { name: "강해민", comment: "아아아아아~!" };
    // setRemove([...copyItem, add]);
    //밑에거는 내가한거....
    // addItem.map((item, i) => {
    //   let add = copyItem.concat(addItem[i]);
    //   setRemove(add);
    //   console.log(item, i);
    // });
  }

  const Alert = () => {
    name == "" && content !== ""
      ? alert("이름을 입력하세요")
      : name !== "" && content == ""
      ? alert("댓글을 입력하세요")
      : name == "" && content == ""
      ? alert("이름과 댓글을 입력하세요")
      : OnAdd();
  };

  const OnKeyPress = (e) => {
    return e.key == "Enter" && name !== "" && content !== ""
      ? OnAdd()
      : e.key == "Enter" && name == "" && content !== ""
      ? alert("이름을 입력하세요")
      : e.key == "Enter" && name !== "" && content == ""
      ? alert("댓글을 입력하세요")
      : alert("이름과 댓글을 입력하세요");
  };
  // 키보드를 눌렀을 때의 함수라서 return 안으로 작성이 되는게 맞는거겠지?

  return (
    <div>
      {copyItem.map((comment, index) => {
        return (
          <Reply
            name={comment.name}
            comment={comment.comment}
            key={index}
            index={index}
            onRemove={() => OnRemove(index)}
          />
        );
      })}

      <span>
        이름 :
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input_name"
          type="text"
          onKeyPress={OnKeyPress}
        />
      </span>

      <span>
        댓글 :
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input_comment"
          type="text"
          onKeyPress={OnKeyPress}
        />
      </span>
      <button className="input-btn" onClick={Alert}>
        {/* 함수() 다음에 소괄호를 붙이면 바로 실행이 되기 때문에 조건이 걸려있다면 바로실행되지않게 소괄호를 빼고 함수입력한다.
        그래서 Alert() 가 아님. --->> 이렇게 되면 바로실행됨*/}
        댓글 추가
      </button>
    </div>
  );
}

export default ReplyList;
