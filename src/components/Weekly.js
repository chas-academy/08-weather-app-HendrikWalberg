import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Weekly extends Component {
  constructor(props) {
    super(props);
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
        {this.props.imperialWeek.map(week =>
          <div className="week_grid">
            <ul className="week_info">
              <li>Highest Temperature: {week.apparentTemperatureHigh} F At Time: {convertUnixToTime(week.apparentTemperatureHighTime)}</li>
              <li>Lowest Temperature: {week.apparentTemperatureLow} F At Time: {convertUnixToTime(week.apparentTemperatureLowTime)}</li>
              <li>Humidity: {week.humidity}</li>
              <li>Wind Speed: {week.windSpeed} mph</li>
              <li>Sunrise: {convertUnixToTime(week.sunriseTime)}</li>
              <li>Sunset: {convertUnixToTime(week.sunsetTime)}</li>
            </ul>
          </div>
        )}
    </div>
  } else {
      temperature=
    <div>
        {this.props.metricWeek.map(week =>
          <div className="week_grid">
            <ul className="week_info">
              <li>Highest Temperature: {week.apparentTemperatureHigh} C At Time: {convertUnixToTime(week.apparentTemperatureHighTime)}</li>
              <li>Lowest Temperature: {week.apparentTemperatureLow} C At Time: {convertUnixToTime(week.apparentTemperatureLowTime)}</li>
              <li>Humidity: {week.humidity}</li>
              <li>Wind Speed: {week.windSpeed} m/s</li>
              <li>Sunrise: {convertUnixToTime(week.sunriseTime)}</li>
              <li>Sunset: {convertUnixToTime(week.sunsetTime)}</li>
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

Weekly.prototypes = {
  metricWeek: PropTypes.array.isRequired,
  imperialWeek: PropTypes.array.isRequired
}

export default Weekly;
