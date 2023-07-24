import React from "react";
import { Box, Grid } from "@mui/material";

import HighlightsSectionCard from "../cards/HighlightsSectionCard";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import PaymentsSharpIcon from "@mui/icons-material/PaymentsSharp";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import CollectionsBookmarkSharpIcon from "@mui/icons-material/CollectionsBookmarkSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

import {
  MainContainerStyles,
  IconStyles,
} from "../../styles/HighlightsSectionStyles";

const dummyData = [
  {
    Icon: <DescriptionSharpIcon sx={IconStyles} />,
    title: "Robust Workflow",
    text: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    Icon: <PaymentsSharpIcon sx={IconStyles} />,
    title: "Robust Workflow",
    text: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    Icon: <ThumbUpAltSharpIcon sx={IconStyles} />,
    title: "Robust Workflow",
    text: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    Icon: <ImportContactsSharpIcon sx={IconStyles} />,
    title: "Robust Workflow",
    text: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    Icon: <CollectionsBookmarkSharpIcon sx={IconStyles} />,
    title: "Robust Workflow",
    text: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    Icon: <FavoriteSharpIcon sx={IconStyles} />,
    title: "Robust Workflow",
    text: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
];

const HighlightsSection = () => {
  return (
    <Box sx={MainContainerStyles}>
      <Grid container spacing={2} rowGap={7}>
        {dummyData.map((x, index) => (
          <Grid item xs={12} md={4} key={index}>
            <HighlightsSectionCard
              Icon={x.Icon}
              title={x.title}
              text={x.text}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HighlightsSection;
