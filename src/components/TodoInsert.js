import React from "react";

function TodoInsert(props) {
  return (
    <form onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="해야할 일 입력"
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
}

export default TodoInsert;