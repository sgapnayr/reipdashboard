import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import NavBar from './compoonents/NavBar/NavBar';
import ShowChart from './compoonents/DummyChart/Chart';
import BarChart from './compoonents/DummyChart/Bar';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [apiData, setApiData] = useState([])
  const [news, setNews] = useState([])
  const [visibility, setVisibility] = useState(false)

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  function GetData() {
    axios.get(url).then(res => setApiData(res.data)).catch(err => console.log(err))
  }

  const handleClick = () => {
    setVisibility(!visibility)
  }

  const newUrl = 'https://newsdata.io/api/1/news?apikey=pub_1122295a0600dd09ce2e7948214b07ef822fb&q=Real%20Estate '

  async function GetNews() {
    await axios.get(newUrl).then(res => setNews(res.data.results))
  }

  useEffect(() => {
    GetData()
    GetNews()
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
          <div className="NewsDiv">
            <div className="News">
              {news.map(n => {
                return (
                  <>
                    <h1>{n.title}</h1>
                    <p>
                      {n.content}
                    </p>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
