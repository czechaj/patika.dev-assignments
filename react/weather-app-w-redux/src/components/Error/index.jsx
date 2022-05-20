import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

function Error({ info }) {
  return (
    <Alert width={"50%"} mx={"auto"} mt={"5vh"} status="warning">
      <AlertIcon />
      Sorry, we couldn't provide any information for this country.{" "}
      <span style={{ fontWeight: "bold", color: "#ed4337" }}> {info}</span>
    </Alert>
  );
}

export default Error;
