import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCountries,
  filterCountriesByContinent,
  filterCountriesByActivity,
  orderByName,
  getActivities,
  orderByPopulation,
} from "../../02_actions/index";
import {
  LESS_POPULATION,
  HIGHER_POPULATION,
  ALL,
  ALL_OF_AFRICA,
  ALL_OF_N_AMERICA,
  ALL_OF_S_AMERICA,
  ALL_OF_ANTARCTICA,
  ALL_OF_ASIA,
  ALL_OF_EUROPE,
  ALL_OF_OCEANIA,
  ASCENDENTE,
  DESCENDENTE,
} from "../../04_const/Const";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities)
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);
  const [, setOrden] = useState("");


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleFilterContinent(e) {
    dispatch(filterCountriesByContinent(e.target.value));
    setCurrentPage(1)
  }

  function handleFilterActivity(e) {
    dispatch(filterCountriesByActivity(e.target.value));
    setCurrentPage(1)
  }


  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSort2(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <button onClick={(e) => { handleClick(e); }}>Cargar Pagina</button>
      <Link to='/activity'>Crear Actividad</Link>
      <Link to='/activities'>Lista de Actividades</Link>
      <div>
        <select onChange={(e) => { handleSort(e);}}>
          <option >Filtrar por Orden Alfabetico</option>
          <option value={ASCENDENTE}> A-Z </option>
          <option value={DESCENDENTE}> Z-A </option>
        </select>

        <select onChange={(e) => { handleSort2(e);}}>
          <option >Filtrar por poblacion</option>
          <option value={HIGHER_POPULATION}>Mayor Poblacion</option>
          <option value={LESS_POPULATION}>Menor Poblacion</option>
        </select>

        <select onChange={(e) => handleFilterActivity(e)}>
            {activities.map((v) => (
              <option value={v.name}>{v.name}</option>
            ))}
          </select>

        <select onChange={(e) => handleFilterContinent(e)}>
          <option value={ALL}>Todos</option>
          <option value={ALL_OF_AFRICA}>Africa</option>
          <option value={ALL_OF_ANTARCTICA}>Antartida</option>
          <option value={ALL_OF_N_AMERICA}>America del Norte</option>
          <option value={ALL_OF_S_AMERICA}>America del Sur</option>
          <option value={ALL_OF_ASIA}>Asia</option>
          <option value={ALL_OF_EUROPE}>Europa</option>
          <option value={ALL_OF_OCEANIA}>Oceania</option>
        </select>

        
      </div>
      <Paginado countriesPerPage={countriesPerPage} countries={countries.length} paginado={paginado}/>
      {currentCountry?.map((country) => {
        return (
          <div key={country.id}>
            <Link to={'/home/'+ country.id}>
              <Card name={country.name} flag={country.flag} continent={country.continent} capital={country.capital} population={country.population}/>
            </Link>
        </div>
        );
      })}
    </div>
  );
}
