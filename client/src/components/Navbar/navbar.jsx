import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useState } from "react";
import MobileLink from "./Mobile_Link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import StyledButton from "./button";
import CssBaseline from "@mui/material/CssBaseline";
import srijanlogo from "../Footer/srijan Light (3).png";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

import Wrapper from "./styles";

const StyledDrawer = styled(Drawer)({
  ".bottomBar": {
    borderTop: "1px solid #fff",
    zIndex: "9999",
    background: "black",
    transition: "all 0.3s ease",
    color: "#fff",
  },
});

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const window = document.body;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  return (
    <>
      <Wrapper>
        {/* <section className="navbar"> */}
        <div className="d-center">
          <Box sx={{ display: "flex" }} className="d-center">
            <CssBaseline />
            <AppBar component="nav" className="navbar p-9">
              <Toolbar className="w-full toolbar">
                <IconButton
                  color="white"
                  aria-label="open drawer"
                  edge="start"
                  className="postion"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" } }}
                >
                  {mobileOpen ? (
                    <CloseIcon className="white" />
                  ) : (
                    <MenuIcon className="white" />
                  )}
                </IconButton>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#fff", marginRight: "100px" }}
                  >
                    <Button component={Link} to="/">
                      <img src={srijanlogo} width="130px" alt="Srijan"></img>
                    </Button>
                  </Typography>

                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        md: "flex",
                      },
                      flexGrow: 1,
                      justifyContent: "space-around",
                    }}
                  >
                    {/* <Link to="/admin">
                      <StyledButton name="Events" />
                    </Link> */}
                    <Link to="/event">
                      <StyledButton name="Events" />
                    </Link>
                    <Link to="/profile">
                      <StyledButton name="Profile" />
                    </Link>
                    <Link to="/merchant">
                      <StyledButton name="Merchandise" />
                    </Link>
                    <Link to="/about">
                      <StyledButton name="About Us"></StyledButton>
                    </Link>
                    <Link to="/team">
                      <StyledButton name="Teams"></StyledButton>
                    </Link>

                    {/* <StyledButton name="Sponsors"></StyledButton>

                  <StyledButton name="Merchandise"></StyledButton>
                  <StyledButton name="About Us"></StyledButton>
                  <StyledButton name="Teams"></StyledButton> */}
                  </Box>
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        md: "block",
                      },
                    }}
                  >
                    <IconButton
                      color="inherit"
                      component="a"
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.iitism.concetto&pli=1"
                      className="playStoreIcon"
                    ></IconButton>
                  </Box>
                </Box>
                <Link to="/profile">
                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" >
                  <svg
                    class="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                </Link>
              </Toolbar>
            </AppBar>
            <nav>
              <StyledDrawer
                container={window}
                variant="temporary"
                open={mobileOpen}
                anchor={"bottom"}
                className="bottomBar"
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: "100vw",
                    height: "100vh",
                    background: "#171717",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  },
                }}
              >
                <Box
                  onClick={handleDrawerToggle}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {/* <Divider /> */}
                  <List>
                    <Link to="/event">
                      <MobileLink url="/event" text="Events" />
                    </Link>
                    <Link to="/sponsor">
                      <MobileLink
                        text="Sponsors"
                        component="a"
                        href="https://linktr.ee/Concetto_Workshops"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </Link>
                    <Link to="/merchant">
                      <MobileLink
                        text="Merchandise"
                        component="a"
                        href="https://forms.gle/J5f4kswgcTCcmLB78"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </Link>
                    <Link to="/team">
                      <MobileLink
                        text="Teams"
                        component="a"
                        href="https://forms.gle/J5f4kswgcTCcmLB78"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </Link>

                    {/* <ListItem
                      disablePadding
                      sx={{ borderBottom: "1px solid white" }}
                    >
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          "&:hover": { color: "#f7f75d" },
                        }}
                        className="mobile-nav-links"
                      >
                        <ListItemText
                          className="mobile-nav-links"
                          primaryTypographyProps={{
                            fontSize: "1.5em",
                            fontFamily: `"ReFormationSansRegular", sans-serif !important`,
                          }}
                          primary="Sponsors"
                        />
                      </ListItemButton>
                    </ListItem> */}
                    {/* <MobileLink url="/tshirt" text="Merchandise" /> */}
                    <Link to="/about">
                      <MobileLink url="/about" text="About Us" noBorder />
                    </Link>
                    {/* <MobileLink url="/teams" text="Teams" noBorder /> */}
                  </List>
                </Box>
              </StyledDrawer>
            </nav>
          </Box>
        </div>
      </Wrapper>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
