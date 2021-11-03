import React from 'react'

export default function Activity({ name, duration, season, difficulty, countriesId }) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{duration}</h2>
      <h2>{season}</h2>
      <h2>{difficulty}</h2>
      <h2>{countriesId}</h2>

    </div>
  );
}
