import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getCountries} from "../../02_actions/index";

import SearchBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleClick(e){
    e.preventDefault();
    dispatch(getCountries())
  }

  return (
    <div>
      <button onClick = {e=>{handleClick(e)}} > Countries </button>
      <SearchBar/>
    </div>
  );
}