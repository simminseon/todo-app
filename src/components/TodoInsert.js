import React from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ value, onChangeValue, onClickAdd }) => {
  return (
    <form className="TodoInsert">
      <input
        value={value}
        onChange={onChangeValue}
        placeholder="할 일을 입력하세요."
      />
      <button onClick={onClickAdd}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
