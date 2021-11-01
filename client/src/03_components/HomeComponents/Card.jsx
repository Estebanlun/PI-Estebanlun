import React from "react"


export default function Card({name, flag, continent}) {
  return <div>
      <h3>{name}</h3>
      <img src={flag} alt="" />
      <h5>{continent}</h5>
  </div>
};
