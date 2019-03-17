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
    let {convertUnixToTime} = this.props;
    let {getWeek} = this.props;

    
    if(this.state.handleTemperature) {
        temperature =
        <div className="today_info">
            <p>Date: {getWeek(this.props.imperialDate)}</p>
            <p>Temperature: { this.props.imperialTemperature } F</p>
            <p>Humidity: { this.props.imperialHumidity }</p>
            <p>Wind Speed: { this.props.imperialWindSpeed } mph</p>
            <p>Sunrise: { convertUnixToTime(this.props.imperialSunrise) }</p>
            <p>Sunset: { convertUnixToTime(this.props.imperialSunset) }</p>
        </div> 
               
    }else {
        temperature=
        <div className="today_info">
            <p>Date: {getWeek(this.props.metricDate)}</p>
            <p>Temperature: { this.props.metricTemperature } C</p>
            <p>Humidity: { this.props.metricHumidity }</p>
            <p>Wind Speed: { this.props.metricWindSpeed } m/s</p>
            <p>Sunrise: { convertUnixToTime(this.props.metricSunrise) }</p>
            <p>Sunset: { convertUnixToTime(this.props.metricSunset) }</p>
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

export default Today;
