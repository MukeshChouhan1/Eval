import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const[value,setValue]=useState({
    Score: 76,
    Wicket: 2,
    Ball: 50
  })
  function handlescore(val){
    if(value.Score>100){
      return;
    }
    setValue({...value,Score:value.Score+val})
  }
  function handlewicket(val){
    if(value.Score>100){
      return;
    }
    setValue({...value,Wicket:value.Wicket+val})
  }
  var ballcount=0;
  function handleball(){
    {
      if(value.Score>100){
        return;
      }
      
      setValue({...value,Ball:(value.Ball+.1)})
      
    }
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              value.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              value.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              value.Ball
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{handlescore(1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{handlescore(4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{handlescore(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{handlewicket(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{handleball()}}>Add 1</button>
      </div>
      <h1 className='status'>{value.Score>100?"India won":""}</h1>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
