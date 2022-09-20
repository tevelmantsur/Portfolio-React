import * as React from "react";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Box, Container, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
const pages = [
  { text: "START", url: "/#start" },
  { text: "PROJECTS", url: "/#projects" },
  { text: "ABOUT", url: "/#about" },
  { text: "CONTACT", url: "/#contact" },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        <Typography
          variant="body2"
          noWrap
          component="a"
          href="#start"
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <img
            style={{ height: "60px" }}
            alt="Forward Arrow"
            src={require("../images/icons/LOGO.png")}
          />
        </Typography>

        <Box
          style={{ justifyContent: "flex-end" }}
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            style={{ justifyContent: "" }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            M
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem
              style={{ justifyContent: "flex-end" }}
              onClick={handleCloseNavMenu}
            >
              <CloseIcon />
            </MenuItem>
            {pages.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography
                  style={{
                    padding: "8px", 
                    fontFamily: "fantasy" ,
                    color: "black",
                    width: "100vw",
                  }}
                  variant="h4"
                  component="a"
                  href={page.url}
                  textAlign="center"
                >
                  {page.text}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box
          style={{ justifyContent: "flex-end" }}
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          {pages.map((page, index) => (
            <Typography
              style={{ padding: "8px", fontFamily: "fantasy" }}
              key={index}
              variant="h5"
              component={"a"}
              onClick={handleCloseNavMenu}
              href={page.url}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page.text}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
};
export default ResponsiveAppBar;
