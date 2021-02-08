import {
  ADDTASK,
  DELET_TASK,
  EDIT_TASK,
  FILTERALL,
  FILTERDONE,
  FILTERNOT,
  ISDONE,
} from "../constants/actionsTypes";
import { todos } from "../Data/Data";
let nextTodoId = todos.length + 1;

export const addtask = (newTask) => {
  return {
    type: ADDTASK,
    payload: {
      id: ++nextTodoId,
      description: newTask,
      isDone: true,
    },
  };
};

export const deletetask = (taskId) => {
  return {
    type: DELET_TASK,
    payload: taskId,
  };
};

export const editTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};

export const is_Done = (taskId) => {
  return {
    type: ISDONE,
    payload: taskId,
  };
};

export const filterAll = (payload) => {
  return {
    type: FILTERALL,
    payload: payload,
  };
};
export const filterDone = (payload) => {
  return {
    type: FILTERDONE,
    payload: payload,
  };
};
export const filterNot = (payload) => {
  return {
    type: FILTERNOT,
    payload: payload,
  };
};
