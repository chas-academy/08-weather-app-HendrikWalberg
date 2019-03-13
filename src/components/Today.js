import React from 'react'

const Today = props => (

    <div className="today_info">
        <p>temperature: { props.temperature }</p>
        <p>Humidity: { props.humidity }</p>
        <p>Wind Speed: { props.windSpeed }</p>
        <p>Sunrise: { props.sunRise }</p>
        <p>Sunset: { props.sunSet }</p>
    </div>

);

export default Today;
