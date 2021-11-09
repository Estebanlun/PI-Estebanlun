import React from "react";
import NavBar from './NavBar'
import Cards from './Cards'
import '../05_styles/Home.css'

export default function Home() {
  return (
    <div className = 'homeContainer'>
      <div className = 'navBar'>
      <NavBar/>
     </div>
     <div className = 'cards'>
      <Cards/>
     </div>
    </div>
  );
}
