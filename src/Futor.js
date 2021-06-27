import { useState } from 'react';
import './App.css';

function Futor() {

    var [count, setCount] = useState(0);

  return (
    <div className="container">
        {/* This is Footer */}
      <div onClick={() => setCount(count + 1)} className="main-footer">
          <div className="footer-item"> 

          </div>
          <div className="box-footer">
              <p>You Clicked {count} times</p>
          </div>
      </div>
    </div>
  );
}

export default Futor;

