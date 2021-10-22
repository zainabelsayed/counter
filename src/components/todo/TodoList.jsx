import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTodoAction } from "../store/todoStore";

export default function TodoList(props) {
  const todo = props.todo;
  const index = props.index;
  const dispatch = useDispatch();
  const deleteTodo = (todo) => {
    dispatch(deleteTodoAction(todo));
  };
  return (
    <div className="card text-white bg-dark mb-3" key={todo.id}>
      <div className="card-header d-flex justify-content-between">
        {todo.title}{" "}
        <FontAwesomeIcon
          className="text-danger"
          icon={faTrash}
          onClick={() => deleteTodo(index)}
        />
      </div>
      <div className="card-body">
        <p className="card-text">{todo.content}</p>
      </div>
    </div>
  );
}
