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
  RightImage,
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
              <Box sx={RightImage}>
                <Box
                  sx={{
                    height: "38%",
                    width: "28%",
                    position: "absolute",
                    top: "30%",
                    right: "20%",
                    border: "2px solid #324355",
                    zIndex: "0",
                  }}
                ></Box>
                <img
                  src={image}
                  style={{
                    height: "auto",
                    width: "100%",
                    zIndex: "99",
                  }}
                  alt="Hero"
                />
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
