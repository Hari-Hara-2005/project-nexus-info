import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  useScrollTrigger,
  Slide,
  CssBaseline,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Navbar(props) {
  const { color } = props;
  const [isDown, setIsDown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsDown(true);
      } else {
        setIsDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      link: "/home",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/service",
      name: "Service",
    },
    {
      link: "/contact",
      name: "Contact Us",
    },
  ];

  const drawer = (
    <Stack direction="column">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          pr: 2,
        }}
      >
        <CloseIcon
          sx={{ color: "#fff" }}
          onClick={() => {
            setMobileOpen(false);
          }}
        />
      </Toolbar>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          mt: [10],
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {navItems.map((item, index) => (
          <Link
            to={item.link}
            color={"inherit"}
            underline="none"
            key={index}
            style={{ textDecoration: "none" }}
            onClick={() => {
              ScrollToTop();
              setMobileOpen(false);
            }}
          >
            <ListItem
              button
              sx={{
                fontWeight: "bold",
                color: "#fff",
                ":hover": {
                  color: "#fff",
                },
              }}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    {item.name}
                  </Typography>
                }
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "transparent",
            boxShadow: 0,
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "transparent",
              py: [0, 0, 2, 1, 2],
              px: [0, 1, 1, 6, "10%"],
              color: isDown ? "#000" : color,
              bgcolor: isDown ? "rgba(255,255,255,.6)" : null,
              backdropFilter: isDown ? "blur(25px)" : null,
              borderRadius: isDown
                ? ["0 0 .7rem .7rem", "0 0 1.5rem 1.5rem"]
                : null,
              boxShadow: isDown ? 3 : null,
              justifyContent: "space-between",
            }}
          >
            <Stack
              direction={"row"}
              width={"100%"}
              gap={1}
              sx={{
                display: ["flex", "flex", "none"],
                justifyContent: "space-between",
              }}
            >
              <Link color={"inherit"} underline="none" to="/home">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    bg: "transparent",
                  }}
                >
                  <h1>Stratus</h1>
                </Box>
              </Link>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton
                  onClick={handleDrawerToggle}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Stack>

            <Link color={"inherit"} underline="none" to="/home">
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "2.2rem",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                Stratus
              </Typography>
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex", gap: "1rem" } }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={item.link}
                  sx={{
                    fontSize: [17],
                    fontWeight: "600",
                    color: isDown ? "#000" : color,
                    textTransform: "none",
                    textDecoration: "none",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                  onClick={ScrollToTop}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box
        display={{ xs: "block", md: "none" }}
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              background:
                "linear-gradient(180.83deg, #181818 0%, #181818 100%)",
              transition: "width 0.3s ease-in-out",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
