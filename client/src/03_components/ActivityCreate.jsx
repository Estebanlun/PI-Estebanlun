import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postActivities, getActivities } from "../02_actions";
import { INVIERNO, VERANO, OTOÑO, PRIMAVERA } from "../04_const/Const";

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.allCountries);
  const [input, setInput] = useState({
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
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Actividad</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Duracion</label>
          <input
            type="text"
            value={input.duration}
            name="duration"
            onChange={handleChange}
          />
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
        </div>
        <div>
          <select onChange={(e) => handleSelect(e)}>
            {countries.map((v) => (
              <option value={v.id}>{v.name}</option>
            ))}
          </select>
        </div>
        <div>
          {input.countryId.map((country)=>(<p>{country}</p>))}
        </div>
        <button type="submit">Crear Actividad</button>
      </form>
    </div>
  );
}
