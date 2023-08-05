import React from "react";

import Header from "./components/header/Header.jsx";
import Navi from "./components/navi/Navi.jsx";
import About from "./components/about/About.jsx";
import Exprience from "./components/exprience/Exprience.jsx";
// import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";

import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

const app = () => {
  return (
    <>
      <Header></Header>
      <Navi></Navi>
      <About></About>
      <Exprience></Exprience>
      {/* <Services></Services> */}
      <Portfolio></Portfolio>

      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default app;
