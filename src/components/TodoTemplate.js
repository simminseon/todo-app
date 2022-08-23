import React from "react";
import "./TodoTemplate.scss";

function setDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  return `${year}년 ${month}월 ${day}일`;
}

const TodoTemplate = ({ children, todos }) => {
  const checkedData = todos.filter((todo) => {
    return !todo.checked;
  });

  return (
    <div className="TodoTemplate">
      <div className="app-title">
        <div className="date">{setDate()}</div>
        <h1>일정 관리</h1>
      </div>
      <div className="app-desc">할 일 {checkedData.length}개 남음</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
