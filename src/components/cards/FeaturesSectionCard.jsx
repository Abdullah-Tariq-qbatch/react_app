import React from "react";

import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

import {
  FeaturesCardMainContainer,
  FeaturesCardNumber,
  FeaturesCardImage,
  FeaturesCardTextContainer,
  FeaturesCardTitle,
  FeaturesCardText,
} from "../../styles/FeaturesSectionCardStyles";

const FeaturesSectionCard = ({ image, text, title, icon }) => {
  return (
    <Box sx={FeaturesCardMainContainer}>
      <Box sx={FeaturesCardNumber}>{icon}</Box>
      <Box
        sx={{
          height: "25vh",
          width: "55%",
          border: "2px solid #324355",
        }}
      >
        {" "}
      </Box>
      <img src={image} style={FeaturesCardImage} alt="features" />
      <Box sx={FeaturesCardTextContainer}>
        <Typography sx={FeaturesCardTitle}>{title}</Typography>
        <Typography sx={FeaturesCardText}>{text}</Typography>
      </Box>
    </Box>
  );
};

FeaturesSectionCard.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node,
};

export default FeaturesSectionCard;
