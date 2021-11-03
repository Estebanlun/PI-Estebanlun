import React from "react";
import {  useSelector } from "react-redux";
import Activity from "../03_components/Activity"

export default function ActivitiesList() {
  const activities = useSelector((state) => state.activities);
  return( <div> {
      
      activities?.map((acc) => {
    return (
        <Activity name={acc.name} duration={acc.duration} season={acc.season} difficulty={acc.difficulty} countriesId={acc.countriesId}/>
      );
  })}</div>)
}

