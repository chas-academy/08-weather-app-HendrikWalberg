import React, { Component } from 'react';


class Today extends Component {
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
    
    const imperialToday = this.props;
    const metricToday = this.props;
    let temperature;

    
    if(this.state.handleTemperature) {
        temperature =
        <div className="today_info">
            <p>Temperature: { imperialToday.temperature } F</p>
            <p>Humidity: { imperialToday.humidity }</p>
            <p>Wind Speed: { imperialToday.windSpeed }</p>
            <p>Sunrise: { imperialToday.sunrise }</p>
            <p>Sunset: { imperialToday.sunset }</p>
        </div> 
               
    }else {
        temperature=
        <div className="today_info">
            <p>Temperature: { metricToday.temperature } C</p>
            <p>Humidity: { metricToday.humidity }</p>
            <p>Wind Speed: { metricToday.windSpeed }</p>
            <p>Sunrise: { metricToday.sunrise }</p>
            <p>Sunset: { metricToday.sunset }</p>
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

export default Today;
