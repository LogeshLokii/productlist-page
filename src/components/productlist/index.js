import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import NavBar from "../NavBar";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const sampleProducts = [
  {
    id: "34sfg43xcb",
    name: "Crompton Energion Groove Remote Wooden",
    price: 180,
    description: "Energion Groove 5 Star Rated Fan with ActivBLDC Technology",
    image:
      "https://d13bbii8ozdt01.cloudfront.net/uploads/2022/08/61lsL369n5L._SL1500_.jpg",
  },
  {
    id: "45ergewcb",
    name: "Atomberg Renesa Ceiling Fan",
    price: 300,
    description:
      "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote",
    image:
      "https://media.atomberg.com/media/catalog/product/b/r/brownblack2_1_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
  },
  {
    id: "x456shrscb",
    name: "ALBUS UL BLDC+",
    price: 280,
    description:
      "1320 mm sweep (Smoke Brown Wood) Unique Feature Wood Blades RF pebble remote control with all direction sensing Motor Super silent BLDC motor with 100% Cooper",
    image:
      "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCAQSTSBW52/cover.png",
  },
  {
    id: "w5e6dfgtt7",
    price: 240,
    name: "CRISTA UL BLDC+",
    description:
      "Unique Feature IOT Enabled Fan Remote Control RF pebble remote control with all direction sensing",
    image:
      "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCCG5SPLC48/cover.png",
  },
  {
    id: "w465ersgdf",
    price: 200,
    name: "CRISTA UL BLDC+",
    description:
      "Unique Feature IOT Enabled Fan Remote Control RF pebble remote control with all direction sensing",
    image:
      "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCCG5SPLC48/cover.png",
  },
  {
    id: "w465ersg2df",
    price: 60,
    name: "Never Give up",
    description:
      "The Story of An Underdog | Embrace Resilience & Defy Limits | Achieve the Extraordinary | Motivational Story of Triumph",
    image: "https://m.media-amazon.com/images/I/81SEn9c98WL._SL1500_.jpg",
  },
  {
    id: "w5e6dfgtt7",
    price: 240,
    name: "CRISTA UL BLDC+",
    description:
      "Unique Feature IOT Enabled Fan Remote Control RF pebble remote control with all direction sensing",
    image:
      "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCCG5SPLC48/cover.png",
  },
  {
    id: "w465ersgdf",
    price: 200,
    name: "CRISTA UL BLDC+",
    description:
      "Unique Feature IOT Enabled Fan Remote Control RF pebble remote control with all direction sensing",
    image:
      "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCCG5SPLC48/cover.png",
  },
  {
    id: "w465ersg2df",
    price: 60,
    name: "Never Give up",
    description:
      "The Story of An Underdog | Embrace Resilience & Defy Limits | Achieve the Extraordinary | Motivational Story of Triumph",
    image: "https://m.media-amazon.com/images/I/81SEn9c98WL._SL1500_.jpg",
  },
  {
    id: "w5e6dfgtt7",
    price: 240,
    name: "CRISTA UL BLDC+",
    description:
      "Unique Feature IOT Enabled Fan Remote Control RF pebble remote control with all direction sensing",
    image:
      "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCCG5SPLC48/cover.png",
  },
  {
    id: "w465ersgdf",
    price: 200,
    name: "CRISTA UL BLDC+",
    description:
      "Unique Feature IOT Enabled Fan Remote Control RF pebble remote control with all direction sensing",
    image:
      "https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/Fans/ceiling-fans/BLDC-Plus/FHCCG5SPLC48/cover.png",
  },
  {
    id: "w465ersg2df",
    price: 60,
    name: "Never Give up",
    description:
      "The Story of An Underdog | Embrace Resilience & Defy Limits | Achieve the Extraordinary | Motivational Story of Triumph",
    image: "https://m.media-amazon.com/images/I/81SEn9c98WL._SL1500_.jpg",
  },
];

const ProductList = ({ }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  const pageSize = 5;

  const handleReset = () => {
    setProducts(sampleProducts);
    setSearchTerm("");
    setShowBtn(false);
  };

  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    })
    setProducts(sortedProducts);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };



  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);
  console.log(currentProducts)

  const searchInputhandler = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length === 0) {
      setShowBtn(false);
    } else if (e.target.value.length > 0) {
      setShowBtn(false);
    }
  };

  const handleSearch = () => {
    let trimvalue = searchTerm.trim().toLowerCase();
    const filtered = sampleProducts.filter((product) =>
      product.name.toLowerCase().includes(trimvalue)
    );

    setProducts(filtered);
    setShowBtn(true);
  };


  const addToCart = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <NavBar />
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Add to cart"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            your product has been added to your cart
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>continue</Button>
        </DialogActions>
      </Dialog>
      <Typography
        variant="h4"
        fontWeight="600"
        style={{
          boxShadow: 20,
          padding: "3px",
          position: "sticky",
          top: 0,
          width: " 100%",
          zIndex: 35,
          backgroundColor: "white",
          textAlign: "start",
          padding: "20px",
        }}
      >
        Products Lists
      </Typography>
      <Grid container spacing={2} style={{ backgroundColor: "#e2e3e3" }}>
        <Grid item xs={4} md={3} lg={4} >
          <div style={{ minHeight: "80%" }}>


            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                margin: "10px",
              }}
            >
              <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => searchInputhandler(e)}
                style={{ marginRight: 10, width: "500px" }}
              />
              {showBtn === false ? (
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              ) : (
                <IconButton onClick={handleReset}>
                  <CancelIcon />
                </IconButton>
              )}
            </div>
            <div style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              margin: "10px",
            }}>
              <Button variant="outlined" onClick={handleSort}>
                Sort by Price (
                {sortOrder === "asc" ? "Low to High" : "High to Low"})
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} md={9} lg={8}>
          <div
            style={{
              display: "flex",
              alignContent: "stretch",
              flexWrap: "wrap",
              backgroundColor: "#e2e3e3",
            }}
            alignItem="center"
          >
            {currentProducts.map((product) => (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 300,
                  m: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 160 }}
                  style={{
                    minHeight: "160px",
                    maxHeight: "200px",
                    minWidth: "300px",
                    maxWidth: "300px",
                  }}
                  image={product.image}
                  alt={product.name}
                />
                <CardContent
                  sx={{ flex: 1 }}
                  style={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    component="h5"
                    variant="h5"
                    style={{
                      width: "250px",
                      overflow: "hidden",
                      whiteSpace: "noWrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    ${product.price}
                  </Typography>
                </CardContent>
                <Button
                  sx={{ margin: "4px" }}
                  variant="contained"
                  color="primary"
                  onClick={addToCart}
                >
                  Add to Cart
                </Button>
              </Card>
            ))}
          </div>
        </Grid>
      </Grid>
      <Pagination
        count={Math.ceil(products.length / pageSize)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        color="primary"
        size="large"
        style={{ marginTop: "20px" }}
      />
    </>
  );
};

export default ProductList;
