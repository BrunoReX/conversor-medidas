import { useState } from "react";
import mainLogo from "./assets/logo.svg";
import "./App.css";
import * as Constants from "./Constants.js";

function App() {
  const [origValue, setOrigValue] = useState("");
  const [convValue, setConvValue] = useState("");
  const [origUnit, setOrigUnit] = useState(Constants.KM);
  const [convUnit, setConvUnit] = useState(Constants.MILES);

  function convertUnit(value) {
    // Usar separador original para calculo
    value = value.replace(/,/g, ".");

    if (isNaN(+value)) {
      return "Número inválido!";
    }

    if (origUnit === Constants.KM) {
      switch (convUnit) {
        case Constants.MILES:
          value = Constants.KM_TO_MILE(value);
      }
    } else if (origUnit === Constants.MILES) {
      switch (convUnit) {
        case Constants.KM:
          value = Constants.MILE_TO_KM(value);
      }
    }

    return fixInput(value);
  }

  function fixInput(value) {
    // Separador decimal usado no Brasil
    value = value.toString().replace(/\./g, ",");

    // Aceite apenas números e virgulas
    value = value.replace(/[^\d,]/g, "");

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
          {Constants.units.map((unit, key) => (
            <option key={key} value={unit}>
              {unit}
            </option>
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
          {Constants.units.map((unit, key) => (
            <option key={key} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <br />
        <br />

        <label className="label" htmlFor="orignalValue">
          Valor original:{" "}
        </label>
        <br />
        <input
          id="originalValue"
          className="valueInput"
          value={origValue}
          onChange={(event) => setOrigValue(fixInput(event.target.value))}
        ></input>
        <br />
        <br />

        <label className="label" htmlFor="convertedValue">
          Valor convertido:{" "}
        </label>
        <br />
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
      <footer className="footer">
        <span>© 2024 Bruno Barbieri ~</span>
        <span>
          {" "}
          Feito usando <a href="https://react.dev/">React</a> ~
        </span>
        <span>
          <a href="https://github.com/BrunoReX/conversor-medidas">
            {" "}
            Código-fonte
          </a>
        </span>
      </footer>
    </>
  );
}

export default App;
