import React from "react";
import Home from "./Home.jsx";
import OfficeInventory from "./OfficeInventory.jsx";
import About from "./About.jsx";
import ContainerFluid from "./ContainerFluid.jsx";
import Feature from "./Feature.jsx";
import Pricing from "./Pricing.jsx";
import News from "./News.jsx";
import Contact from "./Contact.jsx";
import OurClient from "./OurClient.jsx";
import BottomList from "./BottomList.jsx";
import { Box } from "@chakra-ui/react";

export default function Content() {
  return (
    <Box>
      <section id="home-section">
        <Home />
      </section>

      <OfficeInventory />

      <section id="about-section">
        <About />
      </section>

      <ContainerFluid />

      <section id="feature-section">
        <Feature />
      </section>

      <section id="pricing-section">
        <Pricing />
      </section>

      <OurClient />

      <section id="news-section">
        <News />
      </section>

      <section id="contact-section">
        <Contact />
      </section>

      <BottomList />
    </Box>
  );
}
