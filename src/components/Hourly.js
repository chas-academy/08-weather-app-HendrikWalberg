import React, { Component } from 'react'

class Hourly extends Component {
  constructor(props) {
    super(props)
    this.state = {handleTemperature: false};
  }
  
  onClick = (e) => {
    this.setState(state => ({
        handleTemperature: !state.handleTemperature
    }));
  }
  
  render() {
    
    const {convertUnixToTime} = this.props;
    const {imperialHour} = this.props;
    const {metricHour} = this.props;
    let temperature;

    if(this.state.handleTemperature) {
      temperature =
      <div>
        {metricHour.map(hour => 
          <div className="hour_grid">
            <ul className="hour_info">
              <li>Time: {convertUnixToTime(metricHour.time)}</li>
              <li>Temperature: {metricHour.apparentTemperature} C</li>
              <li>Humidity: {metricHour.humidity}</li>
              <li>Wind Speed: {metricHour.windSpeed}</li>
            </ul>
          </div>
        )}
      </div>
    } else {
      temperature =
      <div>
      {imperialHour.map(hour => 
          <div className="hour_grid">
            <ul className="hour_info">
              <li>Time: {convertUnixToTime(imperialHour.time)}</li>
              <li>Temperature: {imperialHour.apparentTemperature} F</li>
              <li>Humidity: {imperialHour.humidity}</li>
              <li>Wind Speed: {imperialHour.windSpeed}</li>
            </ul>
          </div>
      )}
      </div>
    }

    return (
      <div>
      <button onClick={this.onClick}>
          Change temperature unit to
          {this.state.handleTemperature ? ' Celsius' : ' Fahrenheit'}
      </button>
      {temperature}
      </div>
    )
  }
}

export default Hourly;

