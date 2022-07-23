import { useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");

  const changeText = (event) => {
    setText(event.target.value);
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      let searchedCountries = response.data.filter((x) => {
        return x.name.common.toLowerCase().includes(text);
      });
      // console.log(searchedCountries);
      setCountries(searchedCountries.map((x) => x.name.common));
    });
  };

  return (
    <div>
      find countries <input value={text} onChange={changeText} />
      <div>
        {countries.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
