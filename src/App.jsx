import { useState } from "react";
import mainLogo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [origValue, setOrigValue] = useState(1);
  const [convValue, setConvValue] = useState("");
  const [origUnit, setOrigUnit] = useState("Kilometros");
  const [convUnit, setConvUnit] = useState("Milhas");

  const units = ["Kilometros", "Milhas"];
  const MILE_TO_KM = 1.60934;
  const KM_TO_MILE = 0.60934;

  function convertUnit(value) {
    if (isNaN(+value)) {
      return "Invalid number!";
    }

    if (origUnit === "Kilometros") {
      switch (convUnit) {
        case "Milhas":
          return value * KM_TO_MILE;
      }
    } else if (origUnit === "Milhas") {
      switch (convUnit) {
        case "Kilometros":
          return value * MILE_TO_KM;
      }
    }

    return value;
  }

  return (
    <>
      <div>
        <img src={mainLogo} className="logo" alt="Logo" />
      </div>
      <h1>Conversor de Medidas</h1>
      <div className="card">
        <label htmlFor="origUnit" className="label topLabel">
          Unidade original:{" "}
        </label>
        <select
          id="origUnit"
          className="unitSelect"
          value={origUnit}
          onChange={(event) => setOrigUnit(event.target.value)}
        >
          {units.map((unit, key) => (
            <option key={key} value={unit}>{unit}</option>
          ))}
        </select>
        <br />
        <label htmlFor="convUnit" className="label topLabel">
          Unidade convertida:{" "}
        </label>
        <select
          id="convUnit"
          className="unitSelect"
          value={convUnit}
          onChange={(event) => setConvUnit(event.target.value)}
        >
          {units.map((unit, key) => (
            <option key={key} value={unit}>{unit}</option>
          ))}
        </select>
        <br />
        <br />

        <label className="label" htmlFor="orignalValue">
          Valor original:{" "}
        </label>
        <input
          id="originalValue"
          className="valueInput"
          value={origValue}
          onChange={(event) => setOrigValue(event.target.value)}
        ></input>
        <br />

        <label className="label" htmlFor="convertedValue">
          Valor convertido:{" "}
        </label>
        <input
          id="convertedValue"
          className="valueInput"
          value={convValue}
          disabled={true}
        ></input>
        <br />
        <br />
        <button
          onClick={() =>
            setConvValue(convertUnit(origValue, origUnit, convUnit))
          }
        >
          Converter
        </button>
      </div>
    </>
  );
}

export default App;
