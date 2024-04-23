import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div>
            <Typography variant="h3" component="div" fontWeight={600} >
              Shopify
            </Typography>
          </div>
          <div>
            <Button color="inherit" sx={{ fontWeight: "800" }} style={{ color: "#3f4a5f" }}>Model 1</Button>
            <Button color="inherit" sx={{ fontWeight: "800" }} style={{ color: "#3f4a5f" }}>Model 2</Button>
            <Button color="inherit" sx={{ fontWeight: "800" }} style={{ color: "#3f4a5f" }}>Model 3</Button>
            <Button color="inherit" sx={{ fontWeight: "800" }} style={{ color: "#3f4a5f" }}>Model 4</Button>
          </div>
          <div>
            <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
              <LiveHelpOutlinedIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
              <LanguageOutlinedIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
              <AccountCircleOutlinedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};



export default NavBar;
