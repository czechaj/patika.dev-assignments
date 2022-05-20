import React from "react";
import { Center, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Center
      bgColor={"blue.300"}
      justifyContent={"left"}
      height={"8vh"}
      padding={"0 3rem"}
      alignItems={"center"}
    >
      <Text fontWeight={"bold"}> OpenWeather</Text>
    </Center>
  );
}

export default React.memo(Header);
