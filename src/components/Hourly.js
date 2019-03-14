import React, { Component } from 'react'

export default class Hourly extends Component {

  render() {
    const {convertUnixToTime} = this.props;
    const {convertTemp} = this.props;
    const {hour} = this.props;
    

    return (
      <div>
        {/* <button onClick={convertTemp(this, temp)}>Convert to C/F</button> */}
      {hour.map(hour => (
        
          <div className="hours_info">
            <ul className="hour_info">
              <li>Time: {convertUnixToTime(hour.time)}</li>
              <li>Temperature: {hour.apparentTemperature}</li>
              <li>Humidity: {hour.humidity}</li>
              <li>Wind Speed: {hour.windSpeed}</li>
            </ul>
          </div>
        
      ))}
      </div>
    )
  }
}

