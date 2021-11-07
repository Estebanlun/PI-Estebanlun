import React from 'react'
import '../05_styles/ActivityList.css'

export default function Activity({ name, duration, season, difficulty, countryId }) {
  return (
    <div className='divActivityContainer'>
      <h2 className='h2Activity'>{name}</h2>
      <h3 className='h3Activity'>Duracion: {duration}</h3>
      <h3 className='h3Activity'>Temporada: {season}</h3>
      <h3 className='h3Activity'>Dificultad: {difficulty}</h3>
      <h3>{countryId}</h3>
    </div>
  );
}
