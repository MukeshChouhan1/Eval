
// import {useState} from "react";


import { useState } from "react";
// import { EmployeeList } from "./EmployeeList";
export const Admin = () => {
  const[detail,setDetail]=useState({
    employee_name:"",
    employee_id:"",
    title:"",
    salary:"",
    image:"",
    username:"",
    password:"",
    tasks:"",
    status:"",
    team:"",

  })
  // const[empdetail,setEmpdetail]=useState([])
  // useEffect(()=>{
  //   showemp();
  // },[showemp])
  // const showemp=async()=>{
  //   let res=await fetch("http://localhost:8080/employee");
  //     let dt=await res.json();
  //     setEmpdetail(dt)
  //     {<EmployeeList value={empdetail}/>}

  // }
  function handlechange(e){
    setDetail({...detail,[e.target.id]:e.target.value})
  }
  function sub(e){
    e.preventDefault();
    fetch("http://localhost:8080/employee",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(detail)
    })
  }
    return (
      <form className="createEmployee" onSubmit={sub}>
        <input type="text" placeholder="Employee Name" name="employee_name" id="employee_name" onChange={handlechange} />
        <input type="text" placeholder="Employee id" name="employee_id" id="employee_id" onChange={handlechange}/>
        <select name="title" id="title" onChange={(e)=>{
           setDetail({...detail,title:e.target.value})
        }}>
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <input type="number" placeholder="Salary" name="salary" id="salary" onChange={handlechange}/>
        <input type="text" placeholder="Image" name="image" id="image" onChange={handlechange} />
        <input type="text" placeholder="User Name" name="username" id="username" onChange={handlechange}/>
        <input type="password" placeholder="Password" name="password" id="password" onChange={handlechange}/>
        <input
          type="text"
          placeholder="Enter tasks separated by commas"
          name="tasks" id="tasks" onChange={handlechange}
        />
        <select name="status" id="status" onChange={(e)=>{
           setDetail({...detail,status:e.target.value})
        }}>
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select>
        <select name="team" id="team" onChange={(e)=>{
           setDetail({...detail,team:e.target.value})
        }}>
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select>
        <input className="createUser" type="submit" value={"submit"} />
      </form>
    );
  };