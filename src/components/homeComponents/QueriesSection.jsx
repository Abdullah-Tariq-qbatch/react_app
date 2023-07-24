import React from "react";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import {
  QueryMainContainer,
  QueryInsideContainer,
  QueryTitle,
  QueryTitleSpan,
  QueryText,
  QueryButton,
  QueryIcon,
} from "../../styles/QueriesSectionStyles";
const QueriesSection = () => {
  return (
    <Box sx={QueryMainContainer}>
      <Box sx={QueryInsideContainer}>
        <Typography variant="h4" sx={QueryTitle}>
          Say goodbye to long queues, big
          <br /> updates, and <span style={QueryTitleSpan}>confusion</span>.
        </Typography>

        <svg
          class="c0gc4"
          width="56"
          height="43"
          fill="#cbd6e0"
          style={{ position: "absolute", left: "71%", top: "270%" }}
        >
          <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688"></path>
        </svg>
        <Typography sx={QueryText}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt
          <br /> mollit anim id est laborum --- semper quis lectus nulla at
          volutpat diam ut
          <br /> veneatis.
        </Typography>
        <Button variant="contained" sx={QueryButton}>
          Request Demo <ArrowForwardSharpIcon sx={QueryIcon} />
        </Button>
      </Box>
    </Box>
  );
};

export default QueriesSection;
