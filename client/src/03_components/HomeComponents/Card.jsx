import React from "react"

export default function Card({name, flag, continent, capital, population, id}) {
  
  return <div>
      <h3>{name}</h3>
      <img src={flag} alt='Imagen no encontrada' width='250px' height='175px' />
      <h5>{capital}</h5>
      <h5>{continent}</h5>
      <h5>{population}</h5>
      
      
  </div>

};
