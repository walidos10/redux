import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/actions/actions";

const EditTask = ({ todo }) => {
  const [newTextTodo, setNewTextTodo] = useState(todo.description);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelEdit = () => {
    dispatch(editTask({ description: newTextTodo, id: todo.id }));
    handleClose();
  };

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              style={{ padding: "0.5rem 1rem" }}
              type="text"
              value={newTextTodo}
              onChange={(e) => setNewTextTodo(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
