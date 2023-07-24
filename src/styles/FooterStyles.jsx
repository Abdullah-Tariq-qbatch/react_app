const FooterMainContaainer = { height: "auto", width: "100%" };

const FooterInsideContainer = {
  paddingTop: "100px",
  paddingBottom: "50px",
  marginInline: "75px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  flexDirection: { xs: "column", md: "row" },
};

const FooterLeftContainer = {
  width: { xs: "100%", md: "30%" },
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
};

const FooterLeftIcon = { color: "#1f74e9", fontSize: "50px" };

const FooterLeftText = {
  fontSize: "18px",
  fontWeight: "bold",
};

const FooterRightContainer = {
  width: { xs: "100%", md: "70%" },
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  flexDirection: { xs: "column", md: "row" },
};

const FooterLinkContainer = { width: "25%" };

const FooterLinkText = { fontWeight: "bold" };

const FooterLinkInsideContainer = { width: "100%", height: "auto", my: "12px" };

const FooterLink = {
  color: "#6a7a8e",
  textDecoration: "none",
};

export {
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
};
