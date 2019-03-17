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
          <p className="hour_item">Time {convertUnixToTime(hour.time)} Temperature: {hour.apparentTemperature}F Humidity: {hour.humidity} Wind Speed: {hour.windSpeed} mph</p>
        </div>
      )}
      </div>

    } else {
      temperature =
      <div>
        {this.props.metricHour.map(hour => 
          <div className="hour_grid">
            <p className="hour_item">Time: {convertUnixToTime(hour.time)} Temperature: {hour.apparentTemperature}C Humidity: {hour.humidity} Wind Speed: {hour.windSpeed} m/s</p>
          </div>
        )}
      </div>  
  }

    return (
      <div>
      <button onClick={this.onClick} className="button">
          Change temperature unit to
          {this.state.handleTemperature ? ' Celsius' : ' Fahrenheit'}
      </button>
      {temperature}
      </div>
    )
  }
}

export default Hourly;

