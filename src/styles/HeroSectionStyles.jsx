const PageOneContainer = {
  backgroundColor: "#111D2C",
  height: "auto",
};

const InsideContainer = {
  marginInline: { xs: "15px", md: "200px" },
};

const MainContainer = {
  height: { xs: "auto", md: "80vh" },
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: { xs: "column", md: "row" },
};

const LeftContainer = {
  width: { xs: "100%", md: "50%" },
  display: "flex",
  alignItems: { xs: "start", md: "center" },
  justifyContent: "center",
  flexDirection: "column",
  marginBottom: { xs: "35px", md: "0px" },
};

const LeftTitle = {
  fontFamily: "'PT Serif', serif;",
  fontWeight: "bold",
  color: "white",
  textAlign: { xs: "center", md: "start" },
  width: { xs: "100%", md: "80%" },
};

const LeftText = {
  color: "#92a0b5",
  marginTop: "15px",
  width: { xs: "100%", md: "80%" },
  textAlign: { xs: "center", md: "start" },
};

const ButtonContainer = {
  display: "flex",
  justifyContent: "start",
  marginTop: "20px",
  width: { xs: "100%", md: "80%" },
};

const Button1 = { textTransform: "none", borderRadius: "1px" };

const Icon = {
  width: "15px",
  color: "#8ac2fb",
};

const Button2 = {
  textTransform: "none",
  backgroundColor: "#344155",
  borderRadius: "1px",
  marginLeft: "15px",
};

const RightContainer = {
  width: { xs: "100%", md: "50%" },
  position: "relative",
};

const RightImage = {
  width: { xs: "80%", md: "100%" },
  height: "90%",
};

const BottomContainer = {
  height: "12vh",
  background: "linear-gradient(to right bottom, #111D2C 50%, #ffff 50%)",
};

export {
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
};
