import {  createContext,useState } from "react";

export const Employee=createContext();



// export const EmployeeProvider=({children})=>{
//     const[emp,setEmp]=useState({
//         total_terminate:0,
//         total_promoted:0,
//         total_new:0
//     });
//     <Employee.Provider value={[emp,setEmp]}>{children}</Employee.Provider>
// }
function Context({children}){
    const[emp,setEmp]=useState({
                total_terminate:0,
                total_promoted:0,
                total_new:0
            });
    const[empdetail,setEmpdetail]=useState([])
 return(
    <Employee.Provider value={[emp,setEmp,empdetail,setEmpdetail]}>{children}</Employee.Provider>
 )
}
export {Context}
