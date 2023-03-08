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

  const onKeyPress = (e) => {
    // if (e.key == "Enter" && name !== "" && content !== "") {
    //   OnAdd();
    // }
    e.key == "Enter" && name !== "" && content !== "" ? OnAdd() : null;
  };

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
      {/* {addItem.map((item, index) => {
      })} */}

      <span>
        이름 :
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input_name"
          type="text"
        />
      </span>

      <span>
        댓글 :
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input_comment"
          type="text"
          onKeyPress={onKeyPress}
        />
      </span>
      <button
        className="input-btn"
        onClick={
          name !== "" && content !== "" ? OnAdd : null
          // if (input_name !== "" && input_comment !== "") {
          //   const add = {
          //     name: input_name.value,
          //     comment: input_comment.value,
          //   };
          //   setRemove([...copyItem, add]);
          // }
        }
      >
        댓글 추가
      </button>
    </div>
  );
}

export default ReplyList;
