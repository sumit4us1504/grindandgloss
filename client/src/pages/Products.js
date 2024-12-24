import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

// Sample product data - replace with your actual product data
const products = [
  {
    id: 1,
    name: 'Classic Black Fitness Tee',
    price: 39.99,
    image: '/images/products/classic-tee-black.jpg',
    description: 'Premium cotton blend fitness t-shirt in sleek black.',
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'mens'
  },
  {
    id: 2,
    name: 'Performance Crop Top',
    price: 34.99,
    image: '/images/products/crop-top-white.jpg',
    description: 'Breathable crop top perfect for high-intensity workouts.',
    sizes: ['XS', 'S', 'M', 'L'],
    category: 'womens'
  },
  // Add more products as needed
];

const Products = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedSize(null); // Reset size when opening new product
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setSelectedSize(null);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      return; // Don't add to cart if no size is selected
    }
    addToCart(selectedProduct, selectedSize);
    setOpenSnackbar(true);
    handleClose();
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        align="center" 
        sx={{ 
          mb: 6,
          color: '#D4AF37',
          fontWeight: 'bold'
        }}
      >
        Our Products
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                '&:hover': {
                  '& .MuiCardMedia-root': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }
              }}
              onClick={() => handleProductClick(product)}
            >
              <Box sx={{ overflow: 'hidden', pt: '125%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  sx={{ 
                    mb: 1,
                    color: '#D4AF37',
                  }}
                >
                  {product.name}
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#D4AF37',
                    fontWeight: 600,
                  }}
                >
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Product Detail Modal */}
      <Dialog
        open={Boolean(selectedProduct)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedProduct && (
          <>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#D4AF37',
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent sx={{ p: 0 }}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: 'relative', pt: '125%' }}>
                    <CardMedia
                      component="img"
                      image={selectedProduct.image}
                      alt={selectedProduct.name}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 4 }}>
                    <Typography variant="h4" component="h2" sx={{ mb: 2, color: '#D4AF37' }}>
                      {selectedProduct.name}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 3, color: '#D4AF37', fontWeight: 600 }}>
                      ${selectedProduct.price}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                      {selectedProduct.description}
                    </Typography>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="subtitle1" sx={{ mb: 2, color: '#D4AF37' }}>
                        Select Size:
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {selectedProduct.sizes.map((size) => (
                          <Button
                            key={size}
                            variant={selectedSize === size ? "contained" : "outlined"}
                            onClick={() => handleSizeSelect(size)}
                            sx={{
                              minWidth: '48px',
                              height: '48px',
                              borderColor: '#D4AF37',
                              color: selectedSize === size ? 'black' : '#D4AF37',
                              backgroundColor: selectedSize === size ? '#D4AF37' : 'transparent',
                              '&:hover': {
                                borderColor: '#B69121',
                                backgroundColor: selectedSize === size ? '#B69121' : 'rgba(212, 175, 55, 0.1)',
                              }
                            }}
                          >
                            {size}
                          </Button>
                        ))}
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={handleAddToCart}
                      disabled={!selectedSize}
                      sx={{
                        backgroundColor: '#D4AF37',
                        color: 'black',
                        py: 2,
                        '&:hover': {
                          backgroundColor: '#B69121',
                        },
                        '&.Mui-disabled': {
                          backgroundColor: 'rgba(212, 175, 55, 0.3)',
                          color: 'rgba(0, 0, 0, 0.4)',
                        }
                      }}
                    >
                      {selectedSize ? 'Add to Cart' : 'Select a Size'}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%',
            backgroundColor: '#D4AF37',
            color: 'black',
            '& .MuiAlert-icon': {
              color: 'black'
            }
          }}
        >
          Item added to cart successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Products;
