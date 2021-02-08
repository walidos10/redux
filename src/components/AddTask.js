import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addtask } from "../JS/actions/actions";
import Button from "react-bootstrap/Button";
import { FormControl, InputGroup } from "react-bootstrap";
const Addtask = () => {
  const dispatch = useDispatch();
  const [newTask, setnewTask] = useState("");

  const handelChange = (e) => setnewTask(e.target.value);
  const handel = () => {
    if (newTask === "") {
      alert("remplir input");
    } else dispatch(addtask(newTask), setnewTask(""));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add new todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={newTask}
          type="text"
          onChange={(e) => handelChange(e)}
        />
        <InputGroup.Append>
          {
            <Button variant="success" onClick={(e) => handel()}>
              add Task
            </Button>
          }
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Addtask;
