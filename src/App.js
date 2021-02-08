import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addtask } from "./JS/actions/actions";
import Addtask from "../src/components/AddTask";
import ListTask from "./components/ListTask";
import FilterTask from "./components/FilterTask";
import { todos } from "./JS/Data/Data";

function App() {
  // const s = useSelector((state) => state.id);

  const dispatch = useDispatch();
  return (
    <div className="affiche">
      <div
        style={{
          justifyContent: "center",
          marginInline: "200px",
        }}
      >
        <Addtask />

        <FilterTask />

        <ListTask />
      </div>
    </div>
  );
}

export default App;
