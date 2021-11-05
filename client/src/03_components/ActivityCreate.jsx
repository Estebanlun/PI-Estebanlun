import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postActivities, getActivities } from "../02_actions";
import { INVIERNO, VERANO, OTOÑO, PRIMAVERA } from "../04_const/Const";
import NavBar from "./NavBar";

function validate(input){
  let errors = {};
  if(!input.name){
    errors.name = "Debe completar este campo"
  } else if (!input.duration){
    errors.duration = "Debe completar este campo"
  } else if (!input.difficulty){
    errors.difficulty = "Debe seleccionar la complejidad"
  } else if (!input.season){
    errors.season = "Debe seleccionar una estacion"
  } else if (input.countryId === []){
    errors.countryId = "Debe seleccionar un pais"
  }
  return errors
}

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.allCountries);
  const [errors, setErrors] = useState({})

  const [input, setInput] = useState({ //estado local
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    countryId: [],
  });

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
    console.log(input)
  }

  function handleDelete(e){
    setInput({
      ...input,
      countryId: input.countryId.filter(el => el !== e) 
    })
  }

  function handleSelect(e) {
    setInput({ ...input, countryId: [...input.countryId, e.target.value] });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postActivities(input));
    alert("Actividad Creada");
    setInput({
      name: "",
      duration: "",
      difficulty: "",
      season: "",
      countryId: [],
    });
    history.push("/home");
  }

  return (
    <div>
     <NavBar/>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Actividad</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
            />
            {errors.name && (
              <p>{errors.name}</p>
            )}
        </div>
        <div>
          <label>Duracion</label>
          <input
            type="text"
            value={input.duration}
            name="duration"
            onChange={handleChange}
          />
          {errors.duration && (
              <p>{errors.duration}</p>
            )}
        </div>
        <div>
          <label> Dificultad </label>
          <input
            type="range"
            name="difficulty"
            min="1"
            max="5"
            value={input.difficulty}
            onChange={(e) => handleChange(e)}
          />
          {errors.difficulty && (
              <p>{errors.difficulty}</p>
            )}
        </div>
        <div>
          <select
            name="season"
            value={input.season}
            onChange={(e) => handleChange(e)}
          >
            
            <option value={INVIERNO}>Invierno</option>
            <option value={VERANO}>Verano</option>
            <option value={OTOÑO}>Otoño</option>
            <option value={PRIMAVERA}>Primavera</option>
          </select>
          {errors.season && (
              <p>{errors.season}</p>
            )}
        </div>
            {errors.countryId && (
                  <p>{errors.countryId}</p>
                )}

        <div>
          <select onChange={(e) => handleSelect(e)}>
            {countries.map((v) => (
              <option value={v.id}>{v.name}</option>
            ))}
          </select>
        </div>

        <div>
          {input.countryId.map((country)=>(
            
          <div>
            <p>{country}</p>
            <button onClick={()=> handleDelete(country)}>X</button>
          </div>
            
            ))}
        </div>

        <div>
        <button type="submit">Crear Actividad</button>
        </div>

      </form>
    </div>
  );
}
