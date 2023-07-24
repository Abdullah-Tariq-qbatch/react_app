import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Link,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Menu,
} from "@mui/material";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import MenuIcon from "@mui/icons-material/Menu";

import {
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
} from "../../styles/NavbarStyles";

function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(null);

  const handleOpenNavMenu = (event) => {
    setIsNavMenuOpen(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setIsNavMenuOpen(null);
  };

  return (
    <AppBar position="static" sx={NavbarStyle}>
      <Container maxWidth="xl" sx={ContainerLg}>
        <Toolbar disableGutters>
          <RssFeedSharpIcon sx={LogoLg} />

          <Box sx={NavigationsContainerLg}>
            <Link href="#" onClick={handleCloseNavMenu} sx={NavigationLinks}>
              Pricing
            </Link>
            <Link href="#" onClick={handleCloseNavMenu} sx={NavigationLinks}>
              About
            </Link>
            <Link href="#" onClick={handleCloseNavMenu} sx={NavigationLinks}>
              Blog
            </Link>
            <Link href="#" onClick={handleCloseNavMenu} sx={NavigationLinks}>
              Wall of Love
            </Link>
            <FormControl sx={NavigationDropDownContainer}>
              <InputLabel id="resource-label" sx={NavigationDropDownLabel}>
                Resources
              </InputLabel>
              <Select sx={NavigationDropDown}>
                <MenuItem value={1}>Red</MenuItem>
                <MenuItem value={2}>Black</MenuItem>
                <MenuItem value={3}>Blue</MenuItem>
                <MenuItem value={4}>Green</MenuItem>
                <MenuItem value={5}>Yellow</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={ButtonContainerLg}>
            <Link href="#" onClick={handleCloseNavMenu} sx={NavigationLinks}>
              Sign In
            </Link>
            <Link href="#" onClick={handleCloseNavMenu} sx={IconLink}>
              Request Demo
            </Link>
            <ArrowForwardSharpIcon sx={arrowIcon} />
          </Box>
          <Box sx={ContainerSm}>
            <RssFeedSharpIcon sx={LogoSm} />
            <Box sx={NavigationsContainerSm}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={MenuLogo} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={isNavMenuOpen}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(isNavMenuOpen)}
                onClose={handleCloseNavMenu}
                sx={MenuPop}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="#"
                    onClick={handleCloseNavMenu}
                    sx={NavigationLinks}
                  >
                    Pricing
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="#"
                    onClick={handleCloseNavMenu}
                    sx={NavigationLinks}
                  >
                    About
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="#"
                    onClick={handleCloseNavMenu}
                    sx={NavigationLinks}
                  >
                    Blog
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="#"
                    onClick={handleCloseNavMenu}
                    sx={NavigationLinks}
                  >
                    Wall of Love
                  </Link>
                </MenuItem>
                <MenuItem>
                  <FormControl sx={NavigationDropDownContainer}>
                    <InputLabel
                      id="resource-label"
                      style={NavigationDropDownLabel}
                    >
                      Resources
                    </InputLabel>
                    <Select sx={NavigationDropDown}>
                      <MenuItem onClick={handleCloseNavMenu} value={1}>
                        Red
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu} value={2}>
                        Black
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu} value={3}>
                        Blue
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu} value={4}>
                        Green
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu} value={5}>
                        Yellow
                      </MenuItem>
                    </Select>
                  </FormControl>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
