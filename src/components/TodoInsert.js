import React from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = React.useState("");
  const onChangeValue = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = React.useCallback(
    (e) => {
      console.log("tes");
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChangeValue}
        placeholder="할 일을 입력하세요."
      />
      <button>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
