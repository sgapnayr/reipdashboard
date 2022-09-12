import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [apiData, setApiData] = useState('')

  const url = ``

  function getData() {
    axios.get(url).then(res => setApiData(res.data)).catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">

      <div className="NavBar">
        <div className="LocationTitle">
          <div className="LeftSideNavBar">
            <h1>London</h1>
          </div>
          <div className="RightSideNavBar">
          </div>
        </div>
      </div>

      <form action="">
        <input type="text" />
      </form>
    </div>
  );
}

export default App;
