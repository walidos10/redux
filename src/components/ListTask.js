import React from "react";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import FilterTask from "./FilterTask";
/* movi={movi.filter(
      (el) =>
        el.title
          .toLowerCase()
          .trim()
          .includes(filterTitle.toLowerCase().trim()) && el.rate >= filterRate
    )}*/
const ListTask = () => {
  let todos = useSelector((state) => state.todos);
  /*  <ul>
        <Task
          todos={todos.filter((todo) => (
            <FilterTask />
          ))}
        />
      </ul>*/

  return (
    <div>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <Task todo={todo} />
        </ul>
      ))}
    </div>
  );
};

export default ListTask;
