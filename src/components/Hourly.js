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

    let temperature;

    if(this.state.handleTemperature) {
      temperature =
      <div>
      {this.props.imperialHour.map(hour => 
          <div className="hour_grid">
            <ul className="hour_info">
              <li>Time: {convertUnixToTime(hour.time)}</li>
              <li>Temperature: {hour.apparentTemperature} F</li>
              <li>Humidity: {hour.humidity}</li>
              <li>Wind Speed: {hour.windSpeed} mph</li>
            </ul>
      </div>
      )}
      </div>

    } else {
      temperature =
      <div>
        {this.props.metricHour.map(hour => 
          <div className="hour_grid">
            <ul className="hour_info">
              <li>Time: {convertUnixToTime(hour.time)}</li>
              <li>Temperature: {hour.apparentTemperature} C</li>
              <li>Humidity: {hour.humidity}</li>
              <li>Wind Speed: {hour.windSpeed} m/s</li>
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

