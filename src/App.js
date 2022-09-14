import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import NavBar from './compoonents/NavBar/NavBar';
import ShowChart from './compoonents/DummyChart/Chart';
import BarChart from './compoonents/DummyChart/Bar';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [apiData, setApiData] = useState([])
  const [visibility, setVisibility] = useState(false)

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  const url2 = `https://api.coingecko.com/api/v3/coins/bitcoin`

  function GetData() {
    axios.get(url).then(res => setApiData(res.data)).catch(err => console.log(err))
  }

  const handleClick = () => {
    setVisibility(!visibility)
  }

  useEffect(() => {
    GetData()
  }, [])
  return (
    <div className="App">
      <NavBar />

      <div className="Carousel">
        ↑CPI: 2.3%
      </div>

      <div className="DataContainers">
        <div className="DataContainer FirstRow">
          <div className="DataDiv LongRow">
            <p>Market Trend</p>
            <div className="Chart">
              <ShowChart />
            </div>
          </div>
          <div className="DataDiv">
            <div className="Rates">
              <p>Rates</p>
              <h1>7.1%</h1>
            </div>
          </div>
        </div>

        <button onClick={handleClick}>{visibility ? 'Visible' : 'Visibility-None'}</button>
        <div className={visibility ? 'DataContainer SecondRow' : 'None'}>
          <div className='DataDiv'>
            More Information... Blah Blah
          </div>
        </div>
        <div className="DataContainer ThirdRow">
          <div className="DataDiv">
            <div className="Rates2">
              <p>CPI</p>
              <h1>6.3%</h1>
            </div>
          </div>
          <div className="DataDiv">
            <p>Population</p>
            <div className="Chart">
              <BarChart />
            </div>
          </div>
          <div className="DataDiv">News</div>
        </div>
      </div>

    </div >
  );
}

export default App;
