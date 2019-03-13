import React from 'react'


export default function Hourly(props) {

  return (
    <div>
      
      {props.hour.map(hour => (
        <React.Fragment key={hour}>
          <div className="hours_info">
          <ul className="hour_info">
            <li>Time: {hour.time}</li>
            <li>Temperature: {hour.apparentTemperature}</li>
            <li>Humidity: {hour.humidity}</li>
            <li>Wind Speed: {hour.windSpeed}</li>
          </ul>
          </div>
        </React.Fragment>
        ))}  

    

    </div>
  );
}
