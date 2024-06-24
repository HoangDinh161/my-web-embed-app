// src/App.js
import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
   
  }, [])
  return (
    <div className="App">
      <h1>Embedded Web Apps</h1>
      <div className="iframe-container">
        <iframe src="https://ichizero-gpt.com/application-trans" title="App 1" className="iframe"></iframe>
        <iframe src="https://ichizero-gpt.com/application-peer" title="App 2" className="iframe"></iframe>
      </div>
    </div>
  );
}


export default App;
