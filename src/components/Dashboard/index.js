import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  Stack,
} from "@mui/material";
import { Close } from "@mui/icons-material";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const images = [
    {
      id: "34yegvxcb",
      name: "Energion Smart",
      image:
        "https://d13bbii8ozdt01.cloudfront.net/uploads/2022/12/Roverr-Smart-Shimmer-Brown-01-scaled.jpg",
      price: 3000,
    },
    {
      id: "34sfg43xcb",
      name: "Crompton",
      image:
        "https://d13bbii8ozdt01.cloudfront.net/uploads/2022/08/61lsL369n5L._SL1500_.jpg",
      price: 2400,
    },
    {
      id: "45ergewcb",
      name: "Atomberg Fan",
      image:
        "https://media.atomberg.com/media/catalog/product/b/r/brownblack2_1_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
      price: 2900,
    },
    {
      id: "x456shrscb",
      name: "ALBUS UL BLDC+",
      image:
        "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCAQSTSBW52/cover.png",
      price: 2499,
    },
    {
      id: "w5e6dfgtt7",
      name: "CRISTA UL BLDC+",
      image:
        "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCCG5SPLC48/cover.png",
      price: 2999,
    },
    {
      id: "w465ersgdf",
      name: "CRISTA UL BLDC+",
       image:
        "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCCG5SPLC48/cover.png",
      price: 4999,
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              <Link
                to="/signin"
                style={{
                  color: "white",
                  textDecoration: "none",
                  margin: "10px",
                }}
              >
                products
              </Link>
              <Link
                to="/products"
                style={{
                  color: "white",
                  textDecoration: "none",
                  margin: "10px",
                }}
              >
                cart
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container></Container>

      <Box id="files">
        <ImageList
          sx={{
            minHeight: "40vh",
            marginBottom: 2,
            width: "100%",
            overflowY: "auto",
          }}
          cols={5}
          rowHeight={360}
          
          fullWidth
          // cols={details.status === "reviewed" ? 3 : 6}
        >
          <>
            {images?.map((previewImage, index) => (
              <ImageListItem key={index}>
                <Box
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    maxWidth: "200px",
                    maxHeight: "200px",
                  }}
                >
                  <img
                    src={previewImage.image}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography
                    style={{ display: "flex" }}
                    variant="body1"
                    fontWeight="500"
                  >
                    {previewImage.name}
                  </Typography>
                  <Typography maxHeight="20px" variant="caption">
                    ₹{previewImage.price}
                  </Typography>

                  <Button>add to cart</Button>
                </Box>
              </ImageListItem>
            ))}
          </>
        </ImageList>
      </Box>
    </React.Fragment>
  );
}
