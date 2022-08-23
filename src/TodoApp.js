import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const initialData = [
  { id: 1, text: "임시 데이터1", checked: true },
  { id: 2, text: "임시 데이터2", checked: false },
  { id: 3, text: "임시 데이터3", checked: false },
];
function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) => {
        return todo.id === action.id
          ? { ...todo, checked: !todo.checked }
          : todo;
      });
    default:
      return todos;
  }
}

const TodoApp = () => {
  // const [todos, setTodos] = React.useState(createBulkTodos);
  const nextId = React.useRef(4);
  const [todos, dispatch] = React.useReducer(todoReducer, initialData);

  const onInsert = React.useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    if (text === "") {
      return alert("할 일을 입력하세요!");
    }
    dispatch({ type: "INSERT", todo });
    // setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onToggle = React.useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
    // setTodos(
    // todos.map((todo) => {
    //   return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
    // }));
  }, []);

  const onRemove = React.useCallback((id) => {
    dispatch({ type: "REMOVE", id });
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <TodoTemplate todos={todos}>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default TodoApp;
