import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const TodoApp = () => {
  const nextId = React.useRef(1);
  const todo = {
    id: nextId.current,
    text: "",
    checked: false,
  };
  const [todos, setTodos] = React.useState([]);
  const [value, setValue] = React.useState("");
  const onChangeValue = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onClickButton = (e) => {
    e.preventDefault();
    setTodos([...todos, todos]);
    console.log(todos);
  };
  const onInsert = (todo) => {};

  return (
    <TodoTemplate>
      <TodoInsert
        value={value}
        onChangeValue={onChangeValue}
        onInsert={onInsert}
        onClickButton={onClickButton}
      />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default TodoApp;
