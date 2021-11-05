import React from "react";
import { useSelector } from "react-redux";
import Activity from "../03_components/Activity";
import NavBar from '../03_components/NavBar'

export default function ActivitiesList() {
  const activities = useSelector((state) => state.activities);
  return (
    <div>
      <NavBar/>
    <div>
      {" "}
      {activities?.map((acc) => {
        return (
          <Activity
            name={acc.name}
            duration={acc.duration}
            season={acc.season}
            difficulty={acc.difficulty}
            countriesId={acc.countriesId}
          />
        );
      })}
    </div>
    </div>
  );
}
