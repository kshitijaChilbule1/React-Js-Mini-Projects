import React, {useEffect} from 'react';
import './Covid.css';

const Covid = () => {

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0])
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

  return (
    <>
    <h1>🔴 Live</h1>
    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    <div className="boxes">
    <div className="box box-1">COUNTRY
        <div className="content">INDIA</div>
    </div>
    <div className="box box-2">TOTAL RECOVERED
        <div className="content">{actualData.recovered}</div>
    </div>
    <div className="box box-3">TOTAL {actualData.confirmed}CONFIRMED
        <div className="content"></div>
    </div>
    <div className="box box-4">TOTAL DEATHS
        <div className="content">{actualData.deaths}</div>
    </div>
    <div className="box box-5">TOTAL ACTIVE
        <div className="content">{actualData.active}</div>
    </div>
    <div className="box box-6">TOTAL UPDATED
        <div className="content">{actualData.lastupdatedtime}</div>
    </div>
    </div>
    </>
  )
}

export default Covid;
