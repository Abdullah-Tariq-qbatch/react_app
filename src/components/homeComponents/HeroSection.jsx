import React from "react";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

import {
  PageOneContainer,
  InsideContainer,
  MainContainer,
  LeftContainer,
  LeftTitle,
  LeftText,
  ButtonContainer,
  Button1,
  Icon,
  Button2,
  RightContainer,
  BottomContainer,
} from "../../styles/HeroSectionStyles";

import image from "../../assets/img-1.jpg";

const HeroSection = () => {
  return (
    <>
      <Box sx={PageOneContainer}>
        <Box sx={InsideContainer}>
          <Box sx={MainContainer}>
            <Box sx={LeftContainer}>
              <Typography variant="h3" sx={LeftTitle}>
                Create Stunning
                <br /> Web Experiences
              </Typography>
              <Typography sx={LeftText}>
                Our landing page templates works on all devices, so <br />
                you only have to set it up once, and gets beautiful <br />
                results forever.{" "}
              </Typography>
              <Box sx={ButtonContainer}>
                <Button variant="contained" sx={Button1}>
                  Request Demo <ArrowForwardSharpIcon sx={Icon} />
                </Button>
                <Button variant="contained" sx={Button2}>
                  Explore product
                </Button>
              </Box>
            </Box>
            <Box sx={RightContainer}>
              <img
                src={image}
                style={{
                  position: "relative",
                  zIndex: "1",
                  height: "auto",
                  width: "100%",
                }}
                alt="Hero"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  width: "98%",
                  height: "98%",
                  textAlign: "center",
                  fontSize: "18px",
                  border: "2px solid #304350",
                  zIndex: "0",
                }}
              >
                hello
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={BottomContainer}></Box>
    </>
  );
};

export default HeroSection;
