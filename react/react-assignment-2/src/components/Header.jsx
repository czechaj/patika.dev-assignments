import { useState, useContext } from "react";
import cities from "../data/cities.json";
import CityContext, { CityProvider } from "../context/CityContext";

function Header() {
  console.log("header rerendered");
  const { city, setCity } = useContext(CityContext);
  const handleCity = (e) => {
    setCity(
      cities.filter((c) => {
        return c.name === e.target.value;
      })[0]
    );
  };

  return (
    <div className="my-4">
      <select
        className="form-select form-select-lg"
        name="cities"
        onChange={handleCity}
      >
        {cities.map((c, id) => {
          return (
            <option value={c.name} key={c.id}>
              {" "}
              {c.name}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Header;
