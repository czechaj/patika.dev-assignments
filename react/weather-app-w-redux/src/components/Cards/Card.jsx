import React, { useEffect } from "react";
import { Center, Heading, Text, Box, Image } from "@chakra-ui/react";
import {
  forecast,
  selectLoading,
  selectError,
  fetchData,
  selectedCity,
} from "../../redux/weatherSlice";
import { useSelector, useDispatch } from "react-redux";
import Error from "../Error";
import Loading from "../Loading";
import { SunIcon } from "@chakra-ui/icons";

function Card() {
  const dispatch = useDispatch();
  const city = useSelector(selectedCity);

  useEffect(() => {
    dispatch(fetchData(city));
  }, [city, dispatch]);

  const selectedForecast = useSelector(forecast);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const rainIcon = "http://openweathermap.org/img/wn/10n@2x.png";
  const cloudIcon = "http://openweathermap.org/img/wn/04d@2x.png";
  const snowIcon = "http://openweathermap.org/img/wn/13d@2x.png";
  const drizzleIcon = "http://openweathermap.org/img/wn/09d@2x.png";

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <Center
        display={"block"}
        width={"60vw"}
        margin={"0 auto"}
        bgImage={
          "https://images.unsplash.com/photo-1619453986741-43fe6066a86e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
        }
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <Box>
          <Text fontSize={"3xl"}>
            {new Date(selectedForecast.daily[0].dt * 1000).toLocaleDateString(
              "tr"
            )}
          </Text>
          <Box
            marginBottom={"4rem"}
            display={"flex"}
            justifyContent={"space-evenly"}
            padding={"4rem"}
            alignItems={"center"}
          >
            <Box>
              {selectedForecast.daily[0].weather[0].main === "Clear" && (
                <SunIcon marginY={"1.6rem"} w={20} h={20} />
              )}
              {selectedForecast.daily[0].weather[0].main === "Rain" && (
                <Image src={rainIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[0].weather[0].main === "Clouds" && (
                <Image src={cloudIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[0].weather[0].main === "Snow" && (
                <Image src={snowIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[0].weather[0].main === "Drizzle" && (
                <Image src={drizzleIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[0].weather[0].main === "Thunderstorm" && (
                <Image
                  src={"http://openweathermap.org/img/wn/11d@2x.png"}
                  w={"10vw"}
                  h={"12vh"}
                />
              )}
            </Box>
            <Box>
              <Heading fontWeight={"medium"}>
                {selectedForecast.daily[0].temp.day} °C
              </Heading>
            </Box>
            <Box textAlign={"left"}>
              <Text>
                <span style={{ fontWeight: "bold" }}>Wind: </span>
                {selectedForecast.daily[0].wind_speed} KMPH
              </Text>
              <Text>
                <span style={{ fontWeight: "bold" }}>Humidity: </span>
                {selectedForecast.daily[0].humidity}RH
              </Text>
              <Text>
                <span style={{ fontWeight: "bold" }}>Pressure: </span>
                {selectedForecast.daily[0].pressure} mb
              </Text>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} justifyContent={"space-around"}>
          <Box>
            <Box>
              {" "}
              {new Date(selectedForecast.daily[1].dt * 1000).toLocaleDateString(
                "tr"
              )}{" "}
            </Box>
            <Box>
              {" "}
              {selectedForecast.daily[1].weather[0].main === "Clear" && (
                <SunIcon marginY={"2rem"} w={20} h={20} />
              )}
              {selectedForecast.daily[1].weather[0].main === "Rain" && (
                <Image src={rainIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[1].weather[0].main === "Clouds" && (
                <Image src={cloudIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[1].weather[0].main === "Snow" && (
                <Image src={snowIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[1].weather[0].main === "Drizzle" && (
                <Image src={drizzleIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[1].weather[0].main === "Thunderstorm" && (
                <Image
                  src={"http://openweathermap.org/img/wn/11d@2x.png"}
                  w={"10vw"}
                  h={"12vh"}
                />
              )}
            </Box>
            <Box>{selectedForecast.daily[1].temp.day} °C</Box>
          </Box>
          <Box>
            <Box>
              {" "}
              {new Date(selectedForecast.daily[2].dt * 1000).toLocaleDateString(
                "tr"
              )}{" "}
            </Box>
            <Box>
              {selectedForecast.daily[2].weather[0].main === "Clear" && (
                <SunIcon marginY={"1.6rem"} w={20} h={20} />
              )}
              {selectedForecast.daily[2].weather[0].main === "Rain" && (
                <Image src={rainIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[2].weather[0].main === "Clouds" && (
                <Image src={cloudIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[2].weather[0].main === "Snow" && (
                <Image src={snowIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[2].weather[0].main === "Drizzle" && (
                <Image src={drizzleIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[2].weather[0].main === "Thunderstorm" && (
                <Image
                  src={"http://openweathermap.org/img/wn/11d@2x.png"}
                  w={"10vw"}
                  h={"12vh"}
                />
              )}
            </Box>
            <Box>{selectedForecast.daily[2].temp.day} °C</Box>
          </Box>
          <Box>
            <Box>
              {" "}
              {new Date(selectedForecast.daily[3].dt * 1000).toLocaleDateString(
                "tr"
              )}{" "}
            </Box>
            <Box>
              {selectedForecast.daily[3].weather[0].main === "Clear" && (
                <SunIcon marginY={"1.6rem"} w={20} h={20} />
              )}
              {selectedForecast.daily[3].weather[0].main === "Rain" && (
                <Image src={rainIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[3].weather[0].main === "Clouds" && (
                <Image src={cloudIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[3].weather[0].main === "Snow" && (
                <Image src={snowIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[3].weather[0].main === "Drizzle" && (
                <Image src={drizzleIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[3].weather[0].main === "Thunderstorm" && (
                <Image
                  src={"http://openweathermap.org/img/wn/11d@2x.png"}
                  w={"10vw"}
                  h={"12vh"}
                />
              )}
            </Box>
            <Box>{selectedForecast.daily[3].temp.day} °C</Box>
          </Box>
          <Box>
            <Box>
              {" "}
              {new Date(selectedForecast.daily[4].dt * 1000).toLocaleDateString(
                "tr"
              )}{" "}
            </Box>
            <Box>
              {selectedForecast.daily[4].weather[0].main === "Clear" && (
                <SunIcon marginY={"1.6rem"} w={20} h={20} />
              )}
              {selectedForecast.daily[4].weather[0].main === "Rain" && (
                <Image src={rainIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[4].weather[0].main === "Clouds" && (
                <Image src={cloudIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[4].weather[0].main === "Snow" && (
                <Image src={snowIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[4].weather[0].main === "Drizzle" && (
                <Image src={drizzleIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[4].weather[0].main === "Thunderstorm" && (
                <Image
                  src={"http://openweathermap.org/img/wn/11d@2x.png"}
                  w={"10vw"}
                  h={"12vh"}
                />
              )}
            </Box>
            <Box>{selectedForecast.daily[4].temp.day} °C</Box>
          </Box>
          <Box>
            <Box>
              {" "}
              {new Date(selectedForecast.daily[5].dt * 1000).toLocaleDateString(
                "tr"
              )}{" "}
            </Box>
            <Box>
              {selectedForecast.daily[5].weather[0].main === "Clear" && (
                <SunIcon marginY={"1.6rem"} w={20} h={20} />
              )}
              {selectedForecast.daily[5].weather[0].main === "Rain" && (
                <Image src={rainIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[5].weather[0].main === "Clouds" && (
                <Image src={cloudIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[5].weather[0].main === "Snow" && (
                <Image src={snowIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[5].weather[0].main === "Drizzle" && (
                <Image src={drizzleIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[5].weather[0].main === "Thunderstorm" && (
                <Image
                  src={"http://openweathermap.org/img/wn/11d@2x.png"}
                  w={"10vw"}
                  h={"12vh"}
                />
              )}
            </Box>
            <Box>{selectedForecast.daily[5].temp.day} °C</Box>
          </Box>
          <Box>
            <Box>
              {" "}
              {new Date(selectedForecast.daily[6].dt * 1000).toLocaleDateString(
                "tr"
              )}{" "}
            </Box>
            <Box>
              {selectedForecast.daily[6].weather[0].main === "Clear" && (
                <SunIcon marginY={"1.6rem"} w={20} h={20} />
              )}
              {selectedForecast.daily[6].weather[0].main === "Rain" && (
                <Image src={rainIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[6].weather[0].main === "Clouds" && (
                <Image src={cloudIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[6].weather[0].main === "Snow" && (
                <Image src={snowIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[6].weather[0].main === "Drizzle" && (
                <Image src={drizzleIcon} w={"10vw"} h={"12vh"} />
              )}
              {selectedForecast.daily[6].weather[0].main === "Thunderstorm" && (
                <Image
                  src={"http://openweathermap.org/img/wn/11d@2x.png"}
                  w={"10vw"}
                  h={"12vh"}
                />
              )}
            </Box>
            <Box>{selectedForecast.daily[6].temp.day} °C</Box>
          </Box>
        </Box>
      </Center>
    </div>
  );
}

export default Card;
