import React, { Component } from 'react';

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
        data: null
    
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
 }

 componentDidMount() {
  
   fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_Key}/${this.state.position.latitude},${this.state.position.longitude}`)
   .then(response => response.json())
   .then(data => this.setState({
     ...this.state, data: {
       data: data
     }
   }));
 }

  render() {
    return (
      <div className="App">
              
      </div>
    );
  }
}

export default App;