import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onClickCheck, onCheckRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onClickCheck={() => onClickCheck(todo)}
            onCheckRemove={() => onCheckRemove(todo)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
