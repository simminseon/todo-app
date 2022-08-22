import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onClickCheck, onCheckRemove }) => {
  const { text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })} onClick={onClickCheck}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={onCheckRemove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
