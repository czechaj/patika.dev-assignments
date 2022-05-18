import React from "react";
import { Center, Box, Image } from "@chakra-ui/react";
import Logo from "./logo.png";
function Header() {
  return (
    <Center>
      <Box className="logo">
        <Image w={"100%"} src={Logo} alt="logo"/>
      </Box>
    </Center>
  );
}

export default React.memo(Header);
