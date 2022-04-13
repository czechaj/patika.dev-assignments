import React, { useContext, useEffect, useState } from "react";
import CityContext, { CityProvider } from "../context/CityContext";
import axios from "axios";
import celcius from "../icons/svg (1).svg";
import percentage from "../icons/svg.svg";

function Cards({ weather }) {
  console.log("cards rerendered");
  const { city } = useContext(CityContext);
  const texts = weather.daily[0].weather[0].description;

  return (
    <div>
      <div className={`my-5`}>
        <div className={` card-group`}>
          <div className={`card`}>
            <div className="card-body">
              <div className="row">
                {/* 1 */}
                <div className="col-sm-4">
                  <span className="d-flex justify-content-center align-items-center">
                    {" "}
                    <h4 className="text-primary">
                      {" "}
                      {texts[0].toUpperCase() + texts.slice(1)}
                    </h4>
                    <img
                      src={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`}
                      alt="weather-icon"
                      width="100"
                      height="100"
                    />
                  </span>
                </div>
                {/* 2 */}
                <div className="col-sm-4">
                  <h5 className="card-title text-danger">
                    Current Temperature
                  </h5>
                  <span className=" d-flex flex-row justify-content-center ">
                    <span className="display-5">
                      {" "}
                      {weather.daily[0].temp.day}
                    </span>{" "}
                    <img
                      src={celcius}
                      alt="weather-icon"
                      width="40"
                      height="40"
                    />{" "}
                  </span>
                </div>

                {/* 3 */}
                <div className="col-sm-4">
                  <h5 className="card-title text-danger">Humidity</h5>
                  <span className=" d-flex justify-content-center align-items-center">
                    <span className="display-5">
                      {" "}
                      {weather.daily[0].humidity}
                    </span>{" "}
                    <img
                      src={percentage}
                      alt="weather-icon"
                      width="30"
                      height="30"
                    />{" "}
                  </span>
                </div>
                {/* 4 */}
                <div className="col-sm-4">
                  <h5 className="text-danger">Feels Like</h5>
                  <div className="row">
                    <div className="col-sm-6">
                      {" "}
                      <h5 className="card-title  text-success">Day</h5>
                      <span className=" d-flex flex-row justify-content-center ">
                        <span className="display-5">
                          {" "}
                          {weather.daily[0].feels_like.day}
                        </span>
                        <img
                          src={celcius}
                          alt="weather-icon"
                          width="40"
                          height="40"
                        />{" "}
                      </span>
                    </div>

                    <div className="col-sm-6">
                      {" "}
                      <h5 className="card-title  text-success">Night</h5>
                      <span className=" d-flex flex-row justify-content-center ">
                        <span className="display-5">
                          {" "}
                          {weather.daily[0].feels_like.night}
                        </span>
                        <img
                          src={celcius}
                          alt="weather-icon"
                          width="40"
                          height="40"
                        />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div className="col-sm-4">
                  <h5 className="card-title text-danger">Min Temperature</h5>
                  <span className=" d-flex flex-row justify-content-center ">
                    <span className="display-5">
                      {" "}
                      {weather.daily[0].temp.min}
                    </span>{" "}
                    <img
                      src={celcius}
                      alt="weather-icon"
                      width="40"
                      height="40"
                    />{" "}
                  </span>
                </div>
                {/* 6 */}
                <div className="col-sm-4">
                  <h5 className="card-title text-danger">Max Temperature</h5>
                  <span className=" d-flex flex-row justify-content-center ">
                    <span className="display-5">
                      {" "}
                      {weather.daily[0].temp.max}
                    </span>{" "}
                    <img
                      src={celcius}
                      alt="weather-icon"
                      width="40"
                      height="40"
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div className="mb-5"> <span className="display-6">Weather Forecasts for <span className="fw-bold"> {city.name}</span> in next week</span></div>

      {/* Other days */}

      <div className="mt-4">
        <div className="card-group">
          <div className="card ">
            <div className="card-body">
              <div className="row">
                {/* 1 */}
                <div className="col-sm-4 border">
                  <div className="row">
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <span className="text-success display-5">
                          {" "}
                          {new Date(
                            weather.daily[1].dt * 1000
                          ).toLocaleDateString("tr")}
                        </span>
                      
                      </span>
                    </div>
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}@2x.png`}
                          alt="weather-icon"
                          width="60"
                          height="60"
                        />
                        <span className="display-6">
                          {" "}
                          {weather.daily[1].temp.day}
                        </span>
                        <img
                          src={celcius}
                          alt="weather-icon"
                          width="40"
                          height="40"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="col-sm-4 border">
                  <div className="row">
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <span className="text-success display-5">
                          {" "}
                          {new Date(
                            weather.daily[2].dt * 1000
                          ).toLocaleDateString("tr")}
                        </span>
                       
                      </span>
                    </div>
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}@2x.png`}
                          alt="weather-icon"
                          width="60"
                          height="60"
                        />
                        <span className="display-6">
                          {" "}
                          {weather.daily[2].temp.day}
                        </span>
                        <img
                          src={celcius}
                          alt="weather-icon"
                          width="40"
                          height="40"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="col-sm-4 border">
                  <div className="row">
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <span className="text-success display-5">
                          {" "}
                          {new Date(
                            weather.daily[3].dt * 1000
                          ).toLocaleDateString("tr")}
                        </span>
                        
                      </span>
                    </div>
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}@2x.png`}
                          alt="weather-icon"
                          width="60"
                          height="60"
                        />
                        <span className="display-6">
                          {" "}
                          {weather.daily[3].temp.day}
                        </span>
                        <img
                          src={celcius}
                          alt="weather-icon"
                          width="40"
                          height="40"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div className="col-sm-4 my-5 border">
                  <div className="row">
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <span className="text-success display-5">
                          {" "}
                          {new Date(
                            weather.daily[4].dt * 1000
                          ).toLocaleDateString("tr")}
                        </span>
                       
                      </span>
                    </div>
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}@2x.png`}
                          alt="weather-icon"
                          width="60"
                          height="60"
                        />
                        <span className="display-6">
                          {" "}
                          {weather.daily[4].temp.day}
                        </span>
                        <img
                          src={celcius}
                          alt="weather-icon"
                          width="40"
                          height="40"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* 5 */}
                <div className="col-sm-4 my-5 border">
                  <div className="row">
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <span className="text-success display-5">
                          {" "}
                          {new Date(
                            weather.daily[5].dt * 1000
                          ).toLocaleDateString("tr")}
                        </span>
                       
                      </span>
                    </div>
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weather.daily[5].weather[0].icon}@2x.png`}
                          alt="weather-icon"
                          width="60"
                          height="60"
                        />
                        <span className="display-6">
                          {" "}
                          {weather.daily[5].temp.day}
                        </span>
                        <img
                          src={celcius}
                          alt="weather-icon"
                          width="40"
                          height="40"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* 6 */}
                <div className="col-sm-4 my-5 border">
                  <div className="row">
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <span className="text-success display-5">
                          {" "}
                          {new Date(
                            weather.daily[6].dt * 1000
                          ).toLocaleDateString("tr")}
                        </span>
                       
                      </span>
                    </div>
                    <div className="col-sm-12">
                      {" "}
                      <span className="d-flex justify-content-center align-items-center">
                        {" "}
                        <img
                          src={`http://openweathermap.org/img/wn/${weather.daily[6].weather[0].icon}@2x.png`}
                          alt="weather-icon"
                          width="60"
                          height="60"
                        />
                        <span className="display-6">
                          {" "}
                          {weather.daily[6].temp.day}
                        </span>
                        <img
                          src={celcius}
                          alt="weather-icon"
                          width="40"
                          height="40"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
