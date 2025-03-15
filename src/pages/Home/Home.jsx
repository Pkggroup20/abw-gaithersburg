import React from "react";

import NavBar from "../../components/NavBar";
import Hero from "./sections/Hero";
import ModalBox from "./sections/ModalBox";
import Menu from "./sections/Menu";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ModalBox />
      <Menu />
      <Footer />
    </>
  );
}
