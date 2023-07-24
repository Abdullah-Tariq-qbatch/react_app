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
          height: "220px",
          width: "70%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={image} style={FeaturesCardImage} alt="features" />
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "220px",
            top: "-5%",
            left: "5%",
            border: "2px solid #304350",
            zIndex: "0",
          }}
        >
          {" "}
        </Box>
      </Box>
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
