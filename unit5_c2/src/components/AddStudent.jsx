import{useState} from "react"

export const AddStudent = () => {
   
    const[formdata,setFormdata]=useState({
        first_name:"",
        last_name:"",
        email:"",
        age:"",
        tenth_score:"",
        twelth_score:"",
        gender:"",
        branch:"",
    })
   
    

    function handledata(e){
        setFormdata({
            ...formdata,[e.target.className]:e.target.value
        })
    }
    function result(e){
        e.preventDefault();
        fetch("http://localhost:8080/students",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formdata)

        })
    }
    return (
      <form className="addstudent" onSubmit={result}>
        <div>
          Firstname:{" "}
          <input onChange={handledata}
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input  onChange={handledata}
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
          />
        </div>
        <div>
          {" "}
          Email:
          <input onChange={handledata}
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input onChange={(e)=>{
                setFormdata({
                    ...formdata,gender:e.target.checked?e.target.value:""
                })
            }}
              name="gender"
              className="male"
              type="radio"
              value={"male"}
            />{" "}
            Female{" "}
            <input onChange={(e)=>{
                setFormdata({
                    ...formdata,gender:e.target.checked?e.target.value:""
                })
            }}
              name="gender"
              className="female"
              type="radio"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input onChange={ handledata}
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input onChange={handledata}
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input onChange={handledata}
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
          />{" "}
        </div>
        <div>
          <select onChange={(e)=>{
                setFormdata({
                    ...formdata,branch:e.target.value
                })
            }}
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input  className="submit" type="submit" value="Submit" />
        {
        //   <div className="error"></div>
        //   show this div with proper error before submitting form, if there's anything not provided
        //   eg: first name missing, age cannot be greater than 100 etc
          <div className="error">
              {formdata.age>50?"Age is not valid":formdata.twelth_score&&formdata.tenth_score>100?"Score is not valid":""}
          </div>
        }
      </form>
    );
  };