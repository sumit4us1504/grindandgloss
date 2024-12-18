import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Box,
  Divider,
  Paper,
} from '@mui/material';
import { Delete, ShoppingBag } from '@mui/icons-material';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Classic Black Fitness Tee',
      price: 29.99,
      quantity: 1,
      size: 'M',
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 6 } }}>
      <Typography 
        variant="h2" 
        component="h1" 
        align="center" 
        sx={{ 
          mb: 6,
          position: 'relative',
        }}
      >
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Paper 
          elevation={0} 
          sx={{ 
            p: 6, 
            textAlign: 'center',
            border: '2px solid',
            borderColor: 'primary.main',
            backgroundColor: 'background.paper',
          }}
        >
          <ShoppingBag sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom color="primary.main">
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Add some products to start shopping
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/products"
            size="large"
          >
            Browse Products
          </Button>
        </Paper>
      ) : (
        <Paper 
          elevation={0}
          sx={{ 
            p: 4,
            border: '2px solid',
            borderColor: 'primary.main',
            backgroundColor: 'background.paper',
          }}
        >
          <List>
            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem 
                  sx={{
                    py: 3,
                    '&:hover': {
                      backgroundColor: 'rgba(212, 175, 55, 0.05)',
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="h6" color="secondary.main">
                        {item.name}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Size: {item.size} | Quantity: {item.quantity}
                      </Typography>
                    }
                  />
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mx: 2,
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                  <ListItemSecondaryAction>
                    <IconButton 
                      edge="end" 
                      aria-label="delete"
                      sx={{
                        color: 'secondary.main',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          
          <Box 
            sx={{ 
              mt: 4, 
              p: 3, 
              borderTop: '2px solid',
              borderColor: 'primary.main',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'stretch', sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h5" color="secondary.main">
                Total:
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 700,
                }}
              >
                ${total.toFixed(2)}
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ 
                minWidth: 200,
                height: 50,
              }}
            >
              Checkout
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Cart;
