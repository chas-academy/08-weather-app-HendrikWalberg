import React from 'react'

export default function Weekly(props) {
  
  return (
    <div>
  
        {props.week.map(week =>
            <React.Fragment key={week}>
                <ul className="week_info">
                    <li>Highest Temperature: {week.apparentTemperatureHigh} At Time: {week.apparentTemperatureHighTime}</li>
                    <li>Lowest Temperature: {week.apparentTemperatureLow} At Time: {week.apparentTemperatureLowTime}</li>
                    <li>Humidity: {week.humidity}</li>
                    <li>Wind Speed: {week.windSpeed}</li>
                    <li>Sunrise: {week.sunRise}</li>
                    <li>Sunset: {week.sunSet}</li>
                </ul>
            </React.Fragment>
        
        
        )}

    </div>
  )
}
