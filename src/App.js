import React from "react";
import './App.css';
import downArrow from './DownArrowIcon.svg';


function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="quote-container">
          Api Quote will go here
        </div>

        <div className="time-container">
          <h1>GOOD MORNING </h1>
            <br></br>
            <span>12:52</span>
            <h2>IN INDIANAPOLIS</h2>
        </div>

        <button className="drop-down-button"> <p className="btn-text">More</p> <img className="arrow-btn" src={downArrow} alt="down icon"></img></button>
    
      </div>
      


    </div>
  );
}

export default App;
