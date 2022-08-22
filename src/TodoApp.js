import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = React.useState([]);
  const [value, setValue] = React.useState("");
  const nextId = React.useRef(1);

  const onChangeValue = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClickAdd = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("할 일을 입력하세요!");
      return;
    }
    const todoData = {
      id: nextId.current,
      text: value,
      checked: false,
    };
    setTodos([...todos, todoData]);
    nextId.current += 1;
    setValue("");
  };

  const onClickCheck = (item) => {
    const setChecked = todos.map((todo) => {
      if (item.id === todo.id) {
        return { ...todo, checked: !todo.checked };
      } else {
        return { ...todo };
      }
    });
    setTodos(setChecked);
  };

  const onCheckRemove = (item) => {
    const setRemove = todos.filter((todo) => {
      return item.id !== todo.id;
    });
    setTodos(setRemove);
  };

  return (
    <TodoTemplate>
      <TodoInsert
        value={value}
        onChangeValue={onChangeValue}
        onClickAdd={onClickAdd}
      />
      <TodoList
        todos={todos}
        onClickCheck={onClickCheck}
        onCheckRemove={onCheckRemove}
      />
    </TodoTemplate>
  );
};

export default TodoApp;
