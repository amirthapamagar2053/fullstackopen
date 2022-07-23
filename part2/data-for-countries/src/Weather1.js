import axios from "axios";
import React, { useState } from "react";

const APIkey = process.env.REACT_APP_KEY ? process.env.REACT_APP_KEY : 1234;
const Weather = ({ capital }) => {
  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState(0);
  const [png, setPng] = useState("");
  axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${capital}&aqi=no`
    )
    .then((response) => {
      console.log(response.data);
      setTemp(response.data.current["temp_c"]);
      setWind(response.data.current["wind_mph"]);
      setPng(response.data.current.condition["icon"]);
    });
  // .catch((error) => console.log(error));
  return (
    <>
      {console.log("returned")}
      <h1>Weather in {capital}</h1>
      <p>temperature {temp} Celcius </p>
      <img src={png} alt="Need to add " />
      <p>wind {wind} mph</p>
    </>
  );
};

export default Weather;
