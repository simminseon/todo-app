import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const initialData = [
  { id: 1, text: "임시 데이터1", checked: true },
  { id: 2, text: "임시 데이터2", checked: false },
  { id: 3, text: "임시 데이터3", checked: false },
];

const TodoApp = () => {
  const [todos, setTodos] = React.useState(initialData);
  const nextId = React.useRef(4);

  const onInsert = React.useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = React.useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => {
          return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
        })
      );
    },
    [todos]
  );

  const onRemove = React.useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default TodoApp;
