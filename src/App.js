import React, { Component } from 'react';

import Today from './components/Today';
import Hourly from './components/Hourly';

import './App.css';

const API_Key = 'b443f236d24543bcc8da066a299a2d99';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        position: {
          latitude: 59.414141,
          longitude: 18.020202
        },
        response: undefined,
        today: {
          temperature: undefined,
          humidity: undefined,
          windSpeed: undefined,
          sunRise: undefined,
          sunSet: undefined
        },
        week: [],
        hour: []
            
    }
}


 componentDidMount() {
   console.log(this.state);
  var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };
  
  const success = (pos) => {
    var crd = pos.coords;
    this.setState({
      ...this.state, position: {
        latitude: crd.latitude,
        longitude: crd.longitude
      }
    })
    
   }

    
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_Key}/${this.state.position.latitude},${this.state.position.longitude}`)
   .then(res => res.json())
   .then(res => {
      this.setState({
        response: res,
        today: {
          temperature: res.currently.temperature,
          humidity: res.currently.humidity,
          windSpeed: res.currently.windSpeed,
          sunRise: res.daily.data[0].sunriseTime,
          sunSet: res.daily.data[0].sunsetTime
          },
          week: res.daily.data,
          hour: res.hourly.data
        })
      })


  }


  render() {
    return (
      <div className="App">

      <Today 
        temperature={this.state.today.temperature}
        humidity={this.state.today.humidity}
        windSpeed={this.state.today.windSpeed}
        sunRise={this.state.today.sunRise}
        sunSet={this.state.today.sunSet}
      />

      <Hourly />
      </div>
    );
  }
}

export default App;
