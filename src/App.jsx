import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from "react";

import "./App.css"

function App() {
  const [show, setShow] = useState(true);

  const handleChange = () => {
    return setShow(!show)
  }
  return (
    <div className="App">
      <button onClick={() => handleChange()} className="togglebtn">show</button>
      {show ?  <ShowStudents /> :  <AddStudent />}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      
      
      
    </div>
  );
}

export default App;
