import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, minHeight: '60vh' }}>
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, color: '#D4AF37' }}>
            Your Cart is Empty
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            sx={{
              backgroundColor: '#D4AF37',
              color: 'black',
              '&:hover': {
                backgroundColor: '#B69121',
              },
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ mb: 4, color: '#D4AF37' }}>
        Shopping Cart ({getCartCount()} items)
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <Card
              key={`${item.id}-${item.size}`}
              sx={{ 
                mb: 2, 
                display: 'flex', 
                position: 'relative',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 150, objectFit: 'cover' }}
                image={item.image}
                alt={item.name}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Size: {item.size}
                </Typography>
                <Typography variant="body1" sx={{ color: '#D4AF37', mb: 2 }}>
                  ${item.price}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                  <IconButton
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    sx={{
                      color: '#D4AF37',
                      '&.Mui-disabled': {
                        color: 'rgba(212, 175, 55, 0.3)',
                      },
                    }}
                  >
                    <Remove />
                  </IconButton>
                  <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                  <IconButton
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    sx={{ color: '#D4AF37' }}
                  >
                    <Add />
                  </IconButton>
                  <IconButton
                    onClick={() => removeFromCart(item.id, item.size)}
                    sx={{ ml: 'auto', color: 'error.main' }}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Order Summary
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Subtotal:</Typography>
              <Typography>${getCartTotal().toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography>Shipping:</Typography>
              <Typography>Free</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 3,
                pt: 2,
              }}
            >
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" sx={{ color: '#D4AF37' }}>
                ${getCartTotal().toFixed(2)}
              </Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#D4AF37',
                color: 'black',
                py: 2,
                '&:hover': {
                  backgroundColor: '#B69121',
                },
              }}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;