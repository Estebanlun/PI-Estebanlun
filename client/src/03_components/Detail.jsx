import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, restartDetail } from "../02_actions";


export default function Detail (props){
    console.log(props)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(restartDetail())
      dispatch(getDetail(props.match.params.id)) 
    },[dispatch, props.match.params.id])

    const countriesDetail = useSelector((state)=> state.detail)
    console.log(countriesDetail)

  return (
    <div>{
        countriesDetail.length ?
            <div>
                <img src={countriesDetail[0].flag} alt='Imagen no encontrada' width='250px' height='175px'/>
                <h1>{countriesDetail[0].name}</h1>
                <h2>{countriesDetail[0].capital}</h2>
                <h2>{countriesDetail[0].continent}</h2>
                <h2>{countriesDetail[0].subregion}</h2>
                <h2>{countriesDetail[0].area}</h2>
                <h2>{countriesDetail[0].population}</h2>
                <div>{countriesDetail[0].activities?.map(el=>{
                  return(
                    <div>
                      <h3>{el.name}</h3>
                      <h3>{el.difficulty}</h3>
                      <h3>{el.duration}</h3>
                      <h3>{el.season}</h3>
                    </div>
                )})}</div>

                  <Link to="/home"> Volver al inicio </Link>

            </div> : <p>Loading...</p>
    }</div>
  );
};
