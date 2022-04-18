import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import {useState} from "react"
function App() {
 const[toggle,setToggle]=useState(false);
  return (
    <div className="App">
      {toggle? <AddStudent/>:<ShowStudents/>}
      <button onClick={()=>{
        setToggle(!toggle)
      }}   className="togglebtn">{toggle?"show data":"add Data"}</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;