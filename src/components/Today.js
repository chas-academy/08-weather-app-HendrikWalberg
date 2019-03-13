import React from 'react'

const Today = props => (

    <div className="today_info">
        <p>Temperature: { props.temperature }</p>
        <p>Humidity: { props.humidity }</p>
        <p>Wind Speed: { props.windSpeed }</p>
        <p>Sunrise: { props.sunrise }</p>
        <p>Sunset: { props.sunset }</p>
    </div>

);

export default Today;
