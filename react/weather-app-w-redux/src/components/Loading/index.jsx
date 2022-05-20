import React from "react";
import { Spinner } from "@chakra-ui/react";
function Loading() {
  return <Spinner />;
}

export default React.memo(Loading);
