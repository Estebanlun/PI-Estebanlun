import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from '../05_styles/NavBar.css'

export default function NavBar() {
 
  return (
    <div className='navBarConteiner'>
      <div className='conteinerMerch'> 
        <div className='countries'>Countries</div>
        <div className='byEsteban'>By Esteban Luna</div>
      </div>
      <div className='navContent'>
      <Link className='navLink' to='/home'>Home</Link>
      <Link className='navLink' to='/activity'>Crear Actividad</Link>
      <Link className='navLink' to='/activities'>Lista de Actividades</Link>
      <SearchBar className='navSearchBar'/>
    </div>
      </div>
  );
}