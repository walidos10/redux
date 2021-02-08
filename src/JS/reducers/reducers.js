import {
  ADDTASK,
  EDIT_TASK,
  DELET_TASK,
  ISDONE,
  FILTERALL,
  FILTERNOT,
  FILTERDONE,
} from "../constants/actionsTypes";

/**/

const initialState = {
  todos: [
    {
      id: 1,
      description: "todo1",
      isDone: false,
    },
    {
      id: 2,
      description: "todo2",
      isDone: true,
    },
    {
      id: 3,
      description: "todo3",
      isDone: false,
    },
    {
      id: 4,
      description: "todo4",
      isDone: true,
    },
    {
      id: 5,
      description: "todo5",
      isDone: false,
    },
  ],
};

let reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      if (action.payload !== "") {
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      }

    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, description: action.payload.description }
            : todo
        ),
      };
    case DELET_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ISDONE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case FILTERALL:
      return {
        ...state,
        todos: state.todos.map((todo) => todo),
      };
    case FILTERDONE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.isDone === true),
      };
    case FILTERNOT:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.isDone === false),
      };

    default:
      return state;
  }
};

export default reducers;
