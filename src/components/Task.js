import React from "react";
import { useDispatch } from "react-redux";
import { deletetask, editTask, is_Done } from "../JS/actions/actions";
import { Button } from "react-bootstrap";
import EditTask from "./EditTask";

const Task = ({ todo }) => {
  let dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h4
        style={{
          textDecoration: todo.isDone ? "none" : "line-through",
        }}
      >
        {todo.description}{" "}
      </h4>

      <EditTask todo={todo} />

      <Button
        variant="danger"
        onClick={() => {
          dispatch(deletetask(todo.id));
        }}
      >
        Delete
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          dispatch(is_Done(todo.id));
        }}
      >
        isDone
      </Button>
    </div>
  );
};

export default Task;
