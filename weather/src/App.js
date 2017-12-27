import React, { Component } from 'react';
import './App.css';

import Search from './Search'
import DailyWeather from './DailyWeather'
import GetWeather from './GetWeather'

const weatherData = [
  {date:'Keskiviikko 27.12', temp:'-2', description:'Sataa'},
  {date:'Torstai 28.12', temp:'10', description:'Aurinkoista.'},
  {date:'Perjantai 29.12', temp:'12', description:'Tuulee'}
]

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      city: 'helsinki'
    }

    this.getCity = this.getCity.bind(this)
  }

  getCity(city){
    this.setState({city: city})
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.city}</p>
        <Search getCity={this.getCity}/>
        <GetWeather city={this.state.city}/>
      </div>
    );
  }
}



export default App;
