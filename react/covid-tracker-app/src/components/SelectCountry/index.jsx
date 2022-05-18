import React, { useLayoutEffect, useState } from "react";
import { Center, Select, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCountries,
  fetchData,
  fetchGlobalData,
} from "../../redux/countrySlice";

function SelectCountry() {
  const [visible, setVisible] = useState(true);
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchGlobalData());
  }, [dispatch]);

  const handleChange = (country) => {
    dispatch(fetchData(country));
    setVisible(false);
  };

  return (
    <>
      <Center marginTop={"2rem"}>
        <Select
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          placeholder="Select option"
          w={"30%"}
        >
          {countries.map((country, key) => (
            <option key={key} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </Center>
      <Center marginTop={"2rem"}>
        {" "}
        {visible && <Heading>Global</Heading>}
      </Center>
    </>
  );
}

export default SelectCountry;
