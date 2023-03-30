import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav>
      <Link to="/details/:movieId">Movie Details</Link>
      <Link to="/">List</Link>
    </nav>
  )
}