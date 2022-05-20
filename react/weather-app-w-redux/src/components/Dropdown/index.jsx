import React from "react";
import cities from "../../utils/cities.json";
import { Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { selectCity } from "../../redux/weatherSlice";

function Dropdown() {
  const dispatch = useDispatch();
  const handleChange = (value) => {
    const selected = cities.find((city) => city.name === value);
    dispatch(selectCity(selected));
  };
  return (
    <Select
      width={"40%"}
      margin={"5vh auto"}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    >
      {cities.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </Select>
  );
}
export default Dropdown;
