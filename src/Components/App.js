import React from 'react';
import '../StyleSheets/App.css';
import userimage from '../Images/userlock.png'


function App() {
  return (
    <div className="container">
        <img src={userimage} alt="UserImage"  className="userimage"/>
    </div>
  );
}

export default App;
