import React from "react";

import { Box, Typography } from "@mui/material";

import {
  PageTwoCardInsideContainer,
  PageTwoCardTitle,
  PageTwoCardText,
} from "../../styles/HighlightsSectionCardStyles";

import PropTypes from "prop-types";

const HighlightsSectionCard = ({ Icon, title, text }) => {
  return (
    <Box>
      <Box sx={PageTwoCardInsideContainer}>{Icon}</Box>
      <Typography variant="h5" sx={PageTwoCardTitle}>
        {title}
      </Typography>
      <Typography sx={PageTwoCardText}>{text}</Typography>
    </Box>
  );
};

HighlightsSectionCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  Icon: PropTypes.node,
};

export default HighlightsSectionCard;
