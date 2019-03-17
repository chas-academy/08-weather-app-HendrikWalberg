import React, { Component } from 'react'

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
    const {getWeek} = this.props;
    let temperature;

    if(this.state.handleTemperature) {
      temperature =
    <div className="week_grid">
        {this.props.imperialWeek.map(week =>
          <ul>
            <li className="week_item">Date: {getWeek(week.time)}</li>
            <li className="week_item">Highest Temperature: {week.apparentTemperatureHigh} F At Time: {convertUnixToTime(week.apparentTemperatureHighTime)}</li>
            <li className="week_item">Lowest Temperature: {week.apparentTemperatureLow} F At Time: {convertUnixToTime(week.apparentTemperatureLowTime)}</li>
            <li className="week_item">Humidity: {week.humidity}</li>
            <li className="week_item">Wind Speed: {week.windSpeed} mph</li>
            <li className="week_item">Sunrise: {convertUnixToTime(week.sunriseTime)}</li>
            <li className="week_item">Sunset: {convertUnixToTime(week.sunsetTime)}</li>
          </ul>
        )}
    </div>
  } else {
      temperature=
    <div className="week_grid">
        {this.props.metricWeek.map(week =>
        <div className="weekday">
          <ul>
            <li className="week_item">Date: {getWeek(week.time)}</li>
            <li className="week_item">Highest Temperature: {week.apparentTemperatureHigh} C At Time: {convertUnixToTime(week.apparentTemperatureHighTime)}</li>
            <li className="week_item">Lowest Temperature: {week.apparentTemperatureLow} C At Time: {convertUnixToTime(week.apparentTemperatureLowTime)}</li>
            <li className="week_item">Humidity: {week.humidity}</li>
            <li className="week_item">Wind Speed: {week.windSpeed} m/s</li>
            <li className="week_item">Sunrise: {convertUnixToTime(week.sunriseTime)}</li>
            <li className="week_item">Sunset: {convertUnixToTime(week.sunsetTime)}</li>
          </ul>
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


export default Weekly;
