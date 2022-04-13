import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CityContext, { CityProvider } from "../context/CityContext";
import Cards from "./Cards";

function Forecasts() {
  console.log("forecast rerendered");
  const { city } = useContext(CityContext);
  const [forecast, setForecast] = useState("");
  const getForecast = async (lat, lon) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${
          lat || "38.75"
        }&lon=${
          lon || "30.55"
        }&exclude=current,minutely,hourly,alerts&lang=en&units=metric&appid=${
          process.env.REACT_APP_API_KEY
        }`
      );
      setForecast(data);
    } catch (e) {
      setForecast("an error occurred");
    }
  };

  useEffect(() => {
    getForecast(city.latitude, city.longitude);
  }, [city]);

  return (
    <div className="mt-3">
      {city === "" ? (
        <div className="display-6">Select a city for weather forecasts</div>
      ) : (
        <>
          <div className="header display-6 ">
            {" "}
            Weather forecasts for <span className="fw-bold">
              {city.name}
            </span>{" "}
            in{" "}
            <span className="fw-">
              {`${new Date().toLocaleDateString(
                "tr"
              )} ${new Date().toLocaleDateString("tr", { weekday: "long" })} `}
            </span>{" "}
          </div>
          <div className="mt-5">
            {forecast === "an error occurred" ? (
              <span className="fst-italic text-decoration-underline text-danger">
                {" "}
                An error occurred. Please try again later{" "}
              </span>
            ) : (
              <div>
                {" "}
                <Cards weather={forecast} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Forecasts;
