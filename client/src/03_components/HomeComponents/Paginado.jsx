import React from "react";

export default function Paginado({countriesPerPage, countries, paginado}){
    const pageNumbrers = []
    for (let i = 0; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbrers.push(i+1)   
    }
    return(
        <nav>
            <ul>
                {pageNumbrers && 
                pageNumbrers.map(number =>(
                    <li key={number}>
                        <a href onClick={()=>paginado(number)}> {number} </a>  
                    </li> 
                ))}
            </ul>
        </nav>
    )
}