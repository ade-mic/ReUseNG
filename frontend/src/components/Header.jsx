import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import LogoText from "./LogoText";


const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { label: "Marketplace", path: "/marketplace" },
    { label: "Free Items", path: "/free-items" },
    { label: "Technology", path: "/technology" },
    { label: "Fashion", path: "/fashion" },
    { label: "Furniture", path: "/furniture" },
  ];
  const menuItemsSell = { label: "Sell/Give Item", path: "/sell-give" };
  const menuAuth = [
    { label: "Signup", path: "/signup" },
    { label: "Login", path: "/login" },
  ];

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            navigate(item.path);
            handleMenuClose();
          }}
        >
          {item.label}
        </MenuItem>
      ))}
      <MenuItem
        onClick={() => {
          navigate(menuItemsSell.path);
          handleMenuClose();
        }}
        sx={{ fontWeight: "bold" }}
      >
        {menuItemsSell.label}
      </MenuItem>
      {menuAuth.map((item, index) => (
        <MenuItem
          key={`auth-${index}`}
          onClick={() => {
            navigate(item.path);
            handleMenuClose();
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AppBar position="fixed" sx={{background: "#301E14", color: "white"}}  className="header">
      <Toolbar>
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        )}
        <LogoText />
        {!isMobile ? (
          <>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => navigate(item.path)}
                sx={{ marginLeft: 1, textTransform: "none" }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              color="inherit"
              onClick={() => navigate(menuItemsSell.path)}
              sx={{ marginLeft: 1, textTransform: "none", border: "1px solid white" }}
            >
              {menuItemsSell.label}
            </Button>
            <div className="authButton">
              <Button
                color="inherit"
                onClick={() => navigate(menuAuth[0].path)}
                sx={{ marginLeft: 1, textTransform: "none" }}
              >
                {menuAuth[0].label}
              </Button>
              |
              <Button
                color="inherit"
                onClick={() => navigate(menuAuth[1].path)}
                sx={{ marginLeft: 1, textTransform: "none" }}
              >
                {menuAuth[1].label}
              </Button>
            </div>
          </>
        ) : null}
      </Toolbar>
      {isMobile && renderMenu}
    </AppBar>
  );
};

export default Header;
