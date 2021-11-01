// import React from "react"
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import Card from "./Card";



// export default function Home() {
//     const countries = useSelector((state) => state.countries);
//     const [currentPage, ] = useState(1)
//     const [countriesPerPage,] = useState(9)
//     const lastCountry = currentPage * countriesPerPage;
//     const firstCountry = lastCountry - countriesPerPage;
//     const currentCountry = countries.slice(firstCountry,lastCountry); 
   
//     return (
//       <div>
//         {currentCountry?.map((country) => {
//           return (
//             <Card
//               name={country.name}
//               flag={country.flag}
//               continent={country.continent}
//               key={country.id}
//             />
//             );
//           })}
//       </div>
//     );
//   }
  
