// import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {getCountries,filterCountriesByContinent,orderByName,getActivities} from "../../02_actions/index";
// import {LESS_POPULATION,HIGHER_POPULATION,ALL,ALL_OF_AFRICA,ALL_OF_N_AMERICA,ALL_OF_S_AMERICA,ALL_OF_ANTARCTICA,ALL_OF_ASIA,ALL_OF_EUROPE,ALL_OF_OCEANIA,ASCENDENTE,DESCENDENTE,} from "../../04_const/Const";

// export default function Home() {
//   const dispatch = useDispatch();
//   const countries = useSelector((state) => state.countries);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [countriesPerPage] = useState(9);
//   const [activities, setActivities] = useState("");
//   const lastCountry = currentPage * countriesPerPage;
//   const firstCountry = lastCountry - countriesPerPage;
//   const currentCountry = countries.slice(firstCountry, lastCountry);

//   const [, setOrden] = useState("");

//   const paginado = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     dispatch(getCountries());
//   }, [dispatch]);

//   function handleClick(e) {
//     e.preventDefault();
//     dispatch(getCountries());
//   }

//   useEffect(() => {
//     dispatch(getActivities());
//   }, [dispatch]);

//   function onClick(e) {
//     e.preventDefault();
//     dispatch(getActivities(activities));
//     setActivities("");
//   }

//   function handleFilterContinent(e) {
//     dispatch(filterCountriesByContinent(e.target.value));
//   }

//   function handleSort(e) {
//     e.preventDefault();
//     dispatch(orderByName(e.target.value));
//     setCurrentPage(1);
//     setOrden(`Ordenado ${e.target.value}`);
//   }

//   return (
//     <div>
//       <button onClick={(e) => { handleClick(e);}}/> 
//       <div>
//         <select onChange={(e) => {handleSort(e);}}>
//           <option value={ASCENDENTE}> A-Z </option>
//           <option value={DESCENDENTE}> Z-A </option>
//         </select>

//         <select onChange={(e) => {handleSort(e);}}>
//           <option value={ASCENDENTE}> A-Z </option>
//           <option value={DESCENDENTE}> Z-A </option>
//         </select>

//         <select onChange={(e) => handleFilterContinent(e)}>
//           <option value={ALL}>Todos</option>
//           <option value={ALL_OF_AFRICA}>Africa</option>
//           <option value={ALL_OF_ANTARCTICA}>Antartida</option>
//           <option value={ALL_OF_N_AMERICA}>America del Norte</option>
//           <option value={ALL_OF_S_AMERICA}>America del Sur</option>
//           <option value={ALL_OF_ASIA}>Asia</option>
//           <option value={ALL_OF_EUROPE}>Europa</option>
//           <option value={ALL_OF_OCEANIA}>Oceania</option>
//         </select>

//         <select>
//           <option value={HIGHER_POPULATION}>Mayor Poblacion</option>
//           <option value={LESS_POPULATION}>Menor Poblacion</option>
//         </select>

//       </div>
//     </div>
//   );
// }
