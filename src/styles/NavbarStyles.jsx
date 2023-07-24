const NavbarStyle = {
  backgroundColor: "#111D2C",
};

const ContainerLg = {
  marginInline: { xs: "15px", md: "200px" },
  padding: { md: "0px" },
  width: "auto",
};
const LogoLg = {
  display: { xs: "none", md: "flex" },
  mr: 1,
  color: "#1f74e9",
};

const NavigationsContainerLg = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
  alignItems: "center",
};

const NavigationLinks = {
  my: 2,
  display: "block",
  textDecoration: "none",
  mx: "10px",
  color: "#95A4B7",
};

const NavigationDropDownContainer = {
  minWidth: 120,
  color: "white",
  border: "none",
};

const NavigationDropDownLabel = { color: "#95A4B7", border: "none" };

const NavigationDropDown = {
  boxShadow: "none",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
};

const ButtonContainerLg = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
};

const IconLink = {
  my: 2,
  color: "white",
  display: "block",
  textDecoration: "none",
  ml: "10px",
};

const arrowIcon = { height: "17px", color: "#1f74e9" };

const ContainerSm = {
  display: { xs: "flex", md: "none" },
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

const LogoSm = {
  display: { xs: "flex", md: "none" },
  alignItems: "center",
  justifyContent: "start",
  mr: "auto",
  width: "10%",
  color: "#1f74e9",
};

const NavigationsContainerSm = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
  width: "50%",
  justifyContent: "end",
};

const MenuLogo = { color: "#1f74e9" };

const MenuPop = {
  display: { xs: "block", md: "none" },
};

export {
  NavbarStyle,
  ContainerLg,
  LogoLg,
  NavigationsContainerLg,
  NavigationLinks,
  NavigationDropDownContainer,
  NavigationDropDownLabel,
  NavigationDropDown,
  ButtonContainerLg,
  IconLink,
  arrowIcon,
  ContainerSm,
  LogoSm,
  NavigationsContainerSm,
  MenuLogo,
  MenuPop,
};
