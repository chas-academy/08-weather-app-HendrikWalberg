import React from 'react'

export default function Hourly() {
  return (
    <div className="hour_infor">
      
        <ul>
            {this.state.hour.map(hour => {
                <li key={hour}></li>
            })}
        </ul>

    </div>
  )
}
