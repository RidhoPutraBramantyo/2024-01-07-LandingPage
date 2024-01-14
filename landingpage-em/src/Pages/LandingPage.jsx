import React from "react";
import "./LandingPage.css";
import Navbar from "../components/Navbar.jsx";
import Content from "../components/Content.jsx";

import { Box } from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <Box>
      <Navbar />
      <Content />
    </Box>
  );
}
