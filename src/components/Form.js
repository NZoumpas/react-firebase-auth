import firebase from "../firebase/fire base";
import React, { useState } from "react";

export default function Form() {
  const [title, setTtitle] = useState("");

  const handleOnChange = (e) => {
    setTtitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");

    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
  };
  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTodo}>Add</button>
    </div>
  );
}
