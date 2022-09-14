import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import NavBar from './compoonents/NavBar/NavBar';

function App() {
  const [apiData, setApiData] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  const url2 = `https://api.coingecko.com/api/v3/coins/bitcoin`

  function GetData() {
    axios.get(url).then(res => setApiData(res.data)).catch(err => console.log(err))
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <div className="App">
      <NavBar />

      <div className="Carousel">
        Ticker Info
      </div>

      <div className="DataContainers">
        <div className="DataContainer FirstRow">
          <div className="DataDiv LongRow">
            <div className="Chart">Chart</div>
          </div>
          <div className="DataDiv">
            <div className="Rates">
              <p>Rates</p>
              <h1>7.1%</h1>
            </div>
          </div>
        </div>

        <div className="DataContainer SecondRow">
          To Be Determined...
        </div>
        <div className="DataContainer ThirdRow">
          <div className="DataDiv">Mortgage</div>
          <div className="DataDiv">Graph</div>
          <div className="DataDiv">Graph</div>
        </div>
      </div>

    </div>
  );
}

export default App;
