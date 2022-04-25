

function Emp({val}){
    return (
        <div className="employee_card">
        <img className="employee_image" src={val.image} alt="img" />
        <span className="employee_name">{val.name}</span>
        <span className="employee_title">{val.title}</span>
      </div> 
    )
}
export {Emp}