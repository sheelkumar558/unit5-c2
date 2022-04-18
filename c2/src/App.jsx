import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudent";

function App() {
  const [state, setState] = useState("show");
  const handleChenge = () => {
    if (state === "add"){
      setState("show");
    } else if (state === "show") {
      setState("add");
    } else {
      console.log(state);
    }
  };

  return (
    <div className="App">
      <button onClick={handleChenge}>
        {state === "show" ?  "Add Student Data" :"Show Student Data"}
      </button>
      {state === "show" ? <ShowStudents />:<AddStudent /> }
    </div>
  );
}

export default App;
