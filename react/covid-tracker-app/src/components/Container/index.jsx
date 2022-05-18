import React from "react";
import Header from "../Header";
import SelectCountry from "../SelectCountry/index.jsx";
import Cards from "../Cards";
import Footer from "../Footer";

function Container() {
  return (
    <div>
      <Header />
      <SelectCountry />
      <Cards />
      <Footer />
    </div>
  );
}

export default Container;
