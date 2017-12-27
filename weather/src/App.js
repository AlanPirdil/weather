import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kokeilu from './kokeilu'
import Button from './button'
import DailyWeather from './DailyWeather'

const weatherData = [
  {date:'Keskiviikko 27.12', temp:'-2', description:'Sataa'},
  {date:'Torstai 28.12', temp:'10', description:'Aurinkoista.'},
  {date:'Perjantai 29.12', temp:'12', description:'Tuulee'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jeeeeeee</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        {
          weatherData.map( function(day) {
          return <DailyWeather date={day.date} temp={day.temp} description={day.description}/>
        })
        }

      </div>
    );
  }
}



export default App;
