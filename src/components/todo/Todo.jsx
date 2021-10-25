import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { addTodoAction } from "../store/todoStore";
import TodoList from "./TodoList";

export default function Todo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);
  const toDos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    dispatch(addTodoAction({ title: title, content: content, id: id }));
    setId(id + 1);
    setTitle("");
    setContent("");
  };
  toDos.length > 0 ? console.log(toDos, toDos[0].title) : console.log(toDos);

  return (
    <div className="mt-5 pt-5 text-start container w-50 mx-auto">
      <h1 className="text-secondary mb-4">
        Todo App
        <FontAwesomeIcon
          className="fs-1 text-success ms-3"
          icon={faCheckCircle}
        />
      </h1>
      <form onSubmit={(e) => addTodo(e)}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control w-50"
            value={title}
            aria-describedby="emailHelp"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control w-50"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-success ms-3">
              Add Todo
            </button>
          </div>
        </div>
      </form>
      <div className="mt-5">
        {toDos.length > 0 ? (
          toDos.map((todo, index) => (
            <TodoList todo={todo} key={todo.id} index={index} />
          ))
        ) : (
          <h3 className=" text-secondary">Todo List Is Empty</h3>
        )}
      </div>
    </div>
  );
}
