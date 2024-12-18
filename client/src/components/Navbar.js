import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Badge, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        mb: 4,
        backgroundColor: 'secondary.main',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Toolbar 
        sx={{ 
          py: { xs: 2, md: 3 }, 
          minHeight: { xs: '90px', md: '100px' }, 
        }}
      >
        <Box 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            ml: { xs: -1, md: 3 }, 
          }}
        >
          <Box
            component="img"
            src="/images/logo.png"
            alt="Grind & Gloss"
            sx={{
              height: { xs: '70px', sm: '80px', md: '90px' }, 
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
          />
        </Box>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 1.5, sm: 2.5, md: 3.5 }, 
            mr: { xs: -1, md: 3 }, 
          }}
        >
          <Button 
            color="inherit" 
            component={Link} 
            to="/products"
            sx={{ 
              color: 'primary.main',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.1rem' }, 
              px: { xs: 2.5, sm: 3.5 }, 
              py: 1.5, 
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
              }
            }}
          >
            Products
          </Button>
          <IconButton 
            component={Link} 
            to="/cart"
            sx={{ 
              color: 'primary.main',
              p: { xs: 1.5, sm: 2 }, 
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
              }
            }}
          >
            <Badge 
              badgeContent={0} 
              sx={{ 
                '& .MuiBadge-badge': {
                  backgroundColor: 'primary.main',
                  color: 'secondary.main',
                  fontSize: '0.9rem', 
                  minWidth: '22px', 
                  height: '22px',
                }
              }}
            >
              <ShoppingCart sx={{ fontSize: { xs: 28, sm: 32 } }} /> 
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
