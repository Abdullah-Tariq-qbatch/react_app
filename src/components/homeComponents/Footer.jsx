import React from "react";

import { Box, Typography, Link } from "@mui/material";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";

import {
  FooterMainContaainer,
  FooterInsideContainer,
  FooterLeftContainer,
  FooterLeftIcon,
  FooterLeftText,
  FooterRightContainer,
  FooterLinkContainer,
  FooterLinkText,
  FooterLinkInsideContainer,
  FooterLink,
} from "../../styles/FooterStyles";

const footerLinks = [
  {
    name: "How it works",
    links: ["Overview", "Pricing", "Service Areas"],
  },
  {
    name: "Resources",
    links: ["Customer Stories", "Knowledge Base", "Contact Us"],
  },
  {
    name: "Products",
    links: [
      "Corporate Partners",
      "Secure Identity",
      "Legal Help",
      "First Capital",
    ],
  },
  {
    name: "Company",
    links: ["About Us", "Careers", "Terms of Use"],
  },
];

const Footer = () => {
  return (
    <Box sx={FooterMainContaainer}>
      <Box sx={FooterInsideContainer}>
        <Box sx={FooterLeftContainer}>
          <RssFeedSharpIcon sx={FooterLeftIcon} />
          <Typography sx={FooterLeftText}>
            The smarter way to start your next
            <br /> idea.
          </Typography>
        </Box>
        <Box sx={FooterRightContainer}>
          {footerLinks.map((x, index) => (
            <Box sx={FooterLinkContainer} key={index}>
              <Typography sx={FooterLinkText}>{x.name}</Typography>
              {x.links.map((name, index) => (
                <Box sx={FooterLinkInsideContainer}>
                  <Link href="#" key={index} sx={FooterLink}>
                    {name}
                  </Link>
                  <br />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <hr
        style={{
          marginInline: "75px",
          borderColor: "#f2f5fb",
          marginBottom: "75px",
        }}
      />
    </Box>
  );
};

export default Footer;
