import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [apiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    url: 'https://zillow56.p.rapidapi.com/search',
    params: { location: 'houston, tx' },
    headers: {
      'X-RapidAPI-Key': '2a5ae053bdmsh289fd6e9e075512p1bb69djsn1890178e4707',
      'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
    }
  };

  function GetData() {
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    GetData()
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

      <div className="Input">
        <form action="">
          <input type="text" placeholder='Enter Location Here...' />
        </form>
      </div>


      {apiData.map(result => {
        return <div>{result.city}</div>
      })}
    </div>
  );
}

export default App;
