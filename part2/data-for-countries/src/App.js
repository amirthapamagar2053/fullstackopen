import { useState } from "react";
import axios from "axios";
import Weather from "./Weather1";
import React from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");

  const changeText = (event) => {
    setText(event.target.value);

    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      let searchedCountries = response.data.filter((x) => {
        return x.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      setCountries(event.target.value.length === 0 ? [] : searchedCountries);
    });
  };

  const clickFunc = (showcountries) => {
    setCountries(showcountries);
  };

  return (
    <div>
      find countries <input value={text} onChange={changeText} />
      <div>
        {countries.length > 10 ? (
          "Too many matches,specify another filter"
        ) : countries.length === 1 ? (
          <div>
            <h1>{countries[0].name.common}</h1>
            <p>capital {countries[0].capital[0]}</p>
            <p>area {countries[0].area}</p>
            <h2>Languages:</h2>
            {Object.keys(countries[0].languages).map((x) => (
              <li key={x}>{countries[0].languages[x]} </li>
            ))}
            <img alt={countries[0].name.common} src={countries[0].flags.png} />
            <Weather capital={countries[0].capital[0]} />
          </div>
        ) : (
          countries.map((x) => (
            <>
              <p key={x.name.common}>
                {x.name.common}{" "}
                <button
                  onClick={() => {
                    clickFunc([x]);
                  }}
                >
                  show
                </button>
              </p>
            </>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
