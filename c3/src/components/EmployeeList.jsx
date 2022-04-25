import { useContext } from "react";
import { Employee } from "./Context";
import {Emp} from "./Emp"
 
export const EmployeeList = () => {
  const[empdetail]=useContext(Employee)
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {empdetail.map((e)=>{
          return <Emp val={e}/>
        })}
      </div>
    );
  };