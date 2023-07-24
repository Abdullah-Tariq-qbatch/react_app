import React from "react";

import { Box, Typography, Grid } from "@mui/material";

import FeaturesSectionCard from "../cards/FeaturesSectionCard";

import image from "../../assets/img-2.jpg";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";

import {
  PageThreeMainContainer,
  PageThreeInsideContainer,
  PageThreeTitle,
  PageThreeGridContainer,
  PageThreeIcon,
} from "../../styles/FeaturesSectionStyles";

const dummyData = [
  {
    icon: <LooksOneOutlinedIcon sx={PageThreeIcon} />,
    image: image,
    title: "Advanced Features",
    text: "Lorem Ispum is Placeholder text used in the graphic, print and publishing for previewing layouts.",
  },
  {
    icon: <LooksTwoOutlinedIcon sx={PageThreeIcon} />,
    image: image,
    title: "Advanced Features",
    text: "Lorem Ispum is Placeholder text used in the graphic, print and publishing for previewing layouts.",
  },
  {
    icon: <Looks3OutlinedIcon sx={PageThreeIcon} />,
    image: image,
    title: "Advanced Features",
    text: "Lorem Ispum is Placeholder text used in the graphic, print and publishing for previewing layouts.",
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={PageThreeMainContainer}>
      <Box sx={PageThreeInsideContainer}>
        <Typography variant="h4" sx={PageThreeTitle}>
          Simplify Operating and manage <br /> with transparency
        </Typography>
        <Box sx={PageThreeGridContainer}>
          <Grid container spacing={2}>
            {dummyData.map((x, index) => (
              <Grid item xs={12} md={4} key={index}>
                <FeaturesSectionCard
                  icon={x.icon}
                  image={x.image}
                  title={x.title}
                  text={x.text}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
