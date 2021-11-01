import { useState } from "react";
import { useDispatch } from "react-redux";
import { getActivities } from "../02_actions";

export default function ActivitiesList({ name, duration, season, difficulty }) {
  const [activities, setActivities] = useState('')
  const dispatch = useDispatch()
  
  function onClick(e){
    e.preventDefault();
    dispatch(getActivities(activities))
    setActivities('')
}
  
return (
    <div>
      <h2>{name}</h2>
      <h2>{duration}</h2>
      <h2>{season}</h2>
      <h2>{difficulty}</h2>
    </div>
  );
}
