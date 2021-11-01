// import React from "react";
// import { useDispatch } from "react-redux";
// import { LESS_POPULATION ,HIGHER_POPULATION ,ALL, ALL_OF_AFRICA, ALL_OF_N_AMERICA, ALL_OF_S_AMERICA, ALL_OF_ANTARCTICA, ALL_OF_ASIA, ALL_OF_EUROPE, ALL_OF_OCEANIA} from "../04_const/Const";
// import {filterCountriesByContinent } from '../02_actions/index';
// import { sort } from "../store/actions";

// export default function Order() {
//   const dispatch = useDispatch();
  // function onSelectChange(e) {
  //   dispatch(sort(e.target.value));
  // }

//   function handleFilterContinent(e){
//     dispatch (filterCountriesByContinent(e.target.value));
//   }

//   return (
//     <div>
//       {/* <select >
//         <option value={ASCENDENTE} onChange={onSelectChange}> Ascendente </option>
//         <option value={DESCENDENTE}> Descendente </option>
//       </select> */}
//       <select onChange = {e=> handleFilterContinent(e)} >
//         <option value={ALL}>Todos</option>
//         <option value={ALL_OF_AFRICA}>Africa</option>
//         <option value={ALL_OF_ANTARCTICA}>Antartida</option>
//         <option value={ALL_OF_N_AMERICA}>America del Norte</option>
//         <option value={ALL_OF_S_AMERICA}>America del Sur</option>
//         <option value={ALL_OF_ASIA}>Asia</option>
//         <option value={ALL_OF_EUROPE}>Europa</option>
//         <option value={ALL_OF_OCEANIA}>Oceania</option>
//       </select>
//       <select>
//         <option value={HIGHER_POPULATION}>Mayor Poblacion</option>
//         <option value={LESS_POPULATION}>Menor Poblacion</option>
//       </select>
//     </div>
//   );
// }
