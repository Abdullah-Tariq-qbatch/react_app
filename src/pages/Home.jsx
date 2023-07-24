import React from "react";
import { Box } from "@mui/material";

import Navbar from "../components/homeComponents/navbar";
import HeroSection from "../components/homeComponents/HeroSection";
import HighlightsSection from "../components/homeComponents/HighlightsSection";
import FeaturesSection from "../components/homeComponents/FeaturesSection";
import QueriesSection from "../components/homeComponents/QueriesSection";
import Footer from "../components/homeComponents/Footer";

const Home = () => {
  return (
    <>
      <Box>
        <Navbar />
        <HeroSection />
        <HighlightsSection />
        <FeaturesSection />
        <QueriesSection />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
