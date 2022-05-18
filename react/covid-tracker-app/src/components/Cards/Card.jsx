import { Box, Text } from "@chakra-ui/react";
import React from "react";
import moment from "moment";

function Card({ background, text, value, lastUpdate }) {
  return (
    <Box mt={6} bgColor={background} height={"30vh"} width={"14vw"}>
      <Box>
        <Text fontSize={"2xl"}>{text[0]}</Text>
        <Text fontSize="4xl">{value}</Text>
      </Box>
      <Box>
        <Text>
          Last Updated At:{" "}
          <span style={{ fontWeight: "bold" }}>
            {moment(lastUpdate).format("DD/MM/YYYY")}
          </span>
        </Text>
      </Box>
      <Box marginTop={"3rem"}>
        <Text fontStyle={"italic"}>{text[1]}</Text>
      </Box>
    </Box>
  );
}

export default Card;
