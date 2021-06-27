import { useState } from 'react';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();
    const [Ctime, setCtime] = useState(time);
    const updateTime =()=> {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime, 1000);

  return (
    <div className="container">
      {/* This is Header */}
      <div className="Header">
        <div className="logo">
          <img src="logo192.png" alt="React_logo"></img>
        </div>
        <div className="header-content">
          <p>Current time is {time}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

