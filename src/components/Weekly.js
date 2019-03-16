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
    const {imperialWeek} = this.props;
    const {metricWeek} = this.props;
    let temperature;

    if(this.state.handleTemperature) {
      temperature =
    <div>
        {imperialWeek.map(week =>
          <div className="week_grid">
            <ul className="week_info">
              <li>Highest Temperature: {imperialWeek.apparentTemperatureHigh} F At Time: {convertUnixToTime(imperialWeek.apparentTemperatureHighTime)}</li>
              <li>Lowest Temperature: {imperialWeek.apparentTemperatureLow} F At Time: {convertUnixToTime(imperialWeek.apparentTemperatureLowTime)}</li>
              <li>Humidity: {imperialWeek.humidity}</li>
              <li>Wind Speed: {imperialWeek.windSpeed}</li>
              <li>Sunrise: {imperialWeek.sunRise}</li>
              <li>Sunset: {imperialWeek.sunSet}</li>
            </ul>
          </div>
        )}
    </div>
  } else {
      temperature=
    <div>
        {metricWeek.map(week =>
          <div className="week_grid">
            <ul className="week_info">
              <li>Highest Temperature: {metricWeek.apparentTemperatureHigh} C At Time: {convertUnixToTime(metricWeek.apparentTemperatureHighTime)}</li>
              <li>Lowest Temperature: {metricWeek.apparentTemperatureLow} C At Time: {convertUnixToTime(metricWeek.apparentTemperatureLowTime)}</li>
              <li>Humidity: {metricWeek.humidity}</li>
              <li>Wind Speed: {metricWeek.windSpeed}</li>
              <li>Sunrise: {metricWeek.sunRise}</li>
              <li>Sunset: {metricWeek.sunSet}</li>
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
