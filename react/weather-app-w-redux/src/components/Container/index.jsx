import React from "react";
// pages
import Header from "../Header";
import Dropdown from "../Dropdown";
import Cards from "../Cards";
import Footer from "../Footer";
//

function Container() {
  return (
    <div>
      <>
        <Header />
        <Dropdown />
        <Cards />
        <Footer />
      </>
    </div>
  );
}

export default Container;
