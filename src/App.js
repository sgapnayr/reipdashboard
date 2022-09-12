import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [apiData, setApiData] = useState([])
  const [list, setList] = useState(['London'])
  const [value, setValue] = useState('')
  const [clock, setClock] = useState('')

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

  function Clock() {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString())
    }, 1000)
  }

  useEffect(() => {
    GetData()
    Clock()
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    setValue('')
    setList(value)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <div className="App">

      <div className="NavBar">
        <div className="LeftSideNavBar">
          <div className="LocationTitle">
            <h1>{list}</h1>
            <div className="Clock">
              {clock}
            </div>
          </div>
          <div className="RightSideNavBar">
          </div>
        </div>
      </div>

      <div className="Input">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Location Here...' onChange={handleChange} value={value} />
        </form>
      </div>

      {apiData.map(result => {
        return <div>{result.city}</div>
      })}
    </div>
  );
}

export default App;
