import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    
    <header className="header">
      <h1>IN Weather</h1>
      <Link className="nav_link" to="/">Home</Link>
      <Link className="nav_link" to="/hourly">Hourly Prognosis</Link>
      <Link className="nav_link" to="/weekly">Weekly Prognosis</Link>
    </header>

  )
}
