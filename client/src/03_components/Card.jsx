import React from "react"
import styles from '../05_styles/Card.css'

export default function Card({name, flag, continent, capital, population, id}) {
  return (
  <div className='cardContainer'>
      <h3>{name}</h3>
      <img className= 'cardImg'src={flag} alt='Imagen no encontrada'/>
      <h5>{capital}</h5>
      <h5>{continent}</h5>
      <h5>{population}</h5>
  </div>
  )

};
