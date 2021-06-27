import { useState } from 'react';
import './App.css';

function App(){

    let time = new Date().toLocaleTimeString();

  
  const [name, setName] = useState('');
  const textChange = () => {
    let newText = <p>You clicked at {time}</p>;
    setName(newText);
  }
    {/* 
  function myFunction(){
    var newElement = document.createElement('p');
    var newText = document.createTextNode('You Just clicked');
    var target = document.getElementsByClassName('main-content');
    target.insertAdjucentElement("beforebegin", newElement);
  }*/}
    return (
      <div className="container">
        {/* This is Header */}
      <div className="main">
      <div className="slider">
        <p onClick = {textChange} className="box">Click Here</p>
      </div>
      <article className="main-content">
        <p>{name}</p>
      </article>
    </div>
    </div>

    );
}

export default App;