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
    
    let temperature;

    
    if(this.state.handleTemperature) {
        temperature =
        <div className="today_info">
            <p>Temperature: { this.props.imperialTemperature } F</p>
            <p>Humidity: { this.props.imperialHumidity }</p>
            <p>Wind Speed: { this.props.imperialWindSpeed } mph</p>
            <p>Sunrise: { this.props.imperialSunrise }</p>
            <p>Sunset: { this.props.imperialSunset }</p>
        </div> 
               
    }else {
        temperature=
        <div className="today_info">
            <p>Temperature: { this.props.metricTemperature } C</p>
            <p>Humidity: { this.props.metricHumidity }</p>
            <p>Wind Speed: { this.props.metricWindSpeed } m/s</p>
            <p>Sunrise: { this.props.metricSunrise }</p>
            <p>Sunset: { this.props.metricSunset }</p>
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
