import { useContext,useEffect ,useState} from "react";
import { Employee } from "./Context";

export const Home = () => {
  const[data,setData]=useState([])
    // create statistics for user.
    // get Total user count from DB,
    // other fields are in memory values stored in context API.
    // they will reset to 0
    // if page gets refreshed
    const[setEmpdetail]=useContext(Employee)

    // thins to store in context api
    //   total: get from db,
    //   terminated: 0, // inc when user in terminated
    //   promoted: 0,// inc when user in promoted
    //   total_new: 0,// inc when a new user in created

    useEffect(()=>{
        details()
    },[])
    const details=async()=>{
      let res=await fetch("http://localhost:8080/employee");
      let dt=await res.json();
      setData(dt)
      setEmpdetail(dt)
    }
  const[emp]=useContext(Employee)
    return (
      <>
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div>
            Total Employees<span className="totalemp">{data.length}</span>
          </div>
          <div>
            Total Terminated: <span className="total_terminated">{emp.total_terminate}</span>
          </div>
          <div>
            Total Promoted: <span className="total_promoted">{emp.total_terminate}</span>
          </div>
          <div>
            Total New: <span className="total_new">{emp.total_terminate}</span>
          </div>
        </div>
      </>
    );
  };