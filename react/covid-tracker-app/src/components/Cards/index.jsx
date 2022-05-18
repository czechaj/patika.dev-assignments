import React from "react";
import Card from "./Card";
import { Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectCovidInfos, selectLoading } from "../../redux/countrySlice";
import Loading from "../Loading";
import Error from "../Error";
import Chart from "../Chart/BarChart";

function Cards() {
  const isLoading = useSelector(selectLoading);
  const covidInfos = useSelector(selectCovidInfos);
  const error = useSelector((state) => state.countries.error);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error info={error} />;
  }

  return (
    <>
      <Center>
        {covidInfos && (
          <div className="card">
            <Card
              text={[
                "Infected",
                "Total number of infected patients from COVID-19",
              ]}
              value={covidInfos.confirmed.value}
              background={"#92B4EC"}
              lastUpdate={covidInfos.lastUpdate}
            />
            <Card
              text={["Deaths", "Number of deaths caused by COVID-19"]}
              value={covidInfos.deaths.value}
              background={"pink"}
              lastUpdate={covidInfos.lastUpdate}
            />
          </div>
        )}
      </Center>

      <Chart />
    </>
  );
}
export default Cards;
