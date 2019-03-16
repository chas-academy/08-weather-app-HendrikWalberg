import React, { Component } from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Today from './components/Today';
import Hourly from './components/Hourly';
import Weekly from './components/Weekly';
import Header from './components/Header';

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
        imperialToday: {
        imperialTemperature: undefined,
        imperialHumidity: undefined,
        imperialWindSpeed: undefined,
        imperialSunrise: undefined,
        imperialSunset: undefined,
        },
        
        imperialWeek: [],
        imperialHour: [],
        
        metricToday: {
        metricTemperature: undefined,
        metricHumidity: undefined,
        metricWindSpeed: undefined,
        metricSunrise: undefined,
        metricSunset: undefined,
        },
        metricWeek: [],
        metricHour: [] 
    }
}

convertUnixToTime = (unix_time) => {
  let date = new Date(unix_time * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  return hours + ':' + minutes.substr(-2);
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
          imperialToday: {  
            imperialTemperature: res.currently.temperature,
            imperialHumidity: res.currently.humidity,
            imperialWindSpeed: res.currently.windSpeed,
            imperialSunrise: res.daily.data[0].sunriseTime,
            imperialSunset: res.daily.data[0].sunsetTime,
          },
          imperialWeek: res.daily.data,
          imperialHour: res.hourly.data
        })
      })
  fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_Key}/${this.state.position.latitude},${this.state.position.longitude}?units=si`)    
      .then(res => res.json())
      .then(res => {
        this.setState({
          metricToday: {
            metricTemperature: res.currently.temperature,
            metricHumidity: res.currently.humidity,
            metricWindSpeed: res.currently.windSpeed,
            metricSunrise: res.daily.data[0].sunriseTime,
            metricSunset: res.daily.data[0].sunsetTime,
          },
          
          metricWeek: res.daily.data,
          metricHour: res.hourly.data, 
        })
      })

  }



  // getWeather = async (e) => {
  //   e.preventDefault();
  //   switch(props) {
  //   case 'fahrenheit':
  //   const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_Key}/${this.state.position.latitude},${this.state.position.longitude}`);
  //   const imperialData = await api_call.json();
  //   case 'celsius':
  //   const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_Key}/${this.state.position.latitude},${this.state.position.longitude}?units=si`)
  //   const metricData = await api_call.json();
  //   }
  //   }

  


  
  
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <Route exact path="/" render={props => (
        <React.Fragment>
          <Today
              imperialTemperature={this.state.imperialTemperature}
              imperialHumidity={this.state.imperialHumidity}
              imperialWindSpeed={this.state.imperialWindSpeed}
              imperialSunrise={this.state.imperialSunrise}
              imperialSunset={this.state.imperialSunset}
              
          />
        </React.Fragment>
      )} />
      <Route exact path="/hourly" render={props => (
        <Hourly 
        imperialHour={this.state.imperialHour}
        metricHour={this.state.metricHour} 
        convertUnixToTime={this.convertUnixToTime} 
        
        />
      )} />  
      <Route exact path="/weekly" render={props => (
        <Weekly 
        imperialWeek={this.state.imperialWeek}
        metricWeek={this.state.metricWeek} 
        convertUnixToTime={this.convertUnixToTime} 
        
        />
      )} />
       
      </div>
      </Router>
    );
  }
}

export default App;
