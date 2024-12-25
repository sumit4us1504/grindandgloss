import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/images/hero-fashion.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          color: 'coral',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(212,175,55,0.3) 100%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  color: '#D4AF37'
                }}
              >
                Elevate Your Style
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  mb: 4,
                  color: 'white'
                }}
              >
                Premium Quality Printed T-Shirts
              </Typography>
              <Button
                component={Link}
                to="/products"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#D4AF37',
                  color: 'black',
                  px: 4,
                  py: 2,
                  '&:hover': {
                    backgroundColor: '#B69121',
                  }
                }}
              >
                Shop Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" sx={{ color: '#D4AF37', mb: 2 }}>
                Premium Quality
              </Typography>
              <Typography>
                Crafted with the finest materials for ultimate comfort and durability
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" sx={{ color: '#D4AF37', mb: 2 }}>
                Unique Designs
              </Typography>
              <Typography>
                Express yourself with our exclusive collection of designs
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" sx={{ color: '#D4AF37', mb: 2 }}>
                Custom Orders
              </Typography>
              <Typography>
                Create your own design with our customization service
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Collections Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          sx={{ 
            mb: 6,
            color: '#D4AF37',
            fontWeight: 'bold'
          }}
        >
          Our Collections
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              component={Link}
              to="/products?category=men"
              sx={{
                display: 'block',
                textDecoration: 'none',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)'
                }
              }}
            >
              <Box
                component="img"
                src="/images/preview.png"
                alt="Men's Collection"
                sx={{
                  width: '100%',
                  height: 300,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 2
                }}
              />
              <Typography 
                variant="h5" 
                align="center"
                sx={{ 
                  color: '#D4AF37',
                  fontWeight: 600
                }}
              >
                Men's Collection
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              component={Link}
              to="/products?category=women"
              sx={{
                display: 'block',
                textDecoration: 'none',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)'
                }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 300,
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: 2,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h6" sx={{ color: '#D4AF37' }}>Coming Soon</Typography>
              </Box>
              <Typography 
                variant="h5" 
                align="center"
                sx={{ 
                  color: '#D4AF37',
                  fontWeight: 600
                }}
              >
                Women's Collection
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              component={Link}
              to="/products?category=featured"
              sx={{
                display: 'block',
                textDecoration: 'none',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)'
                }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 300,
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: 2,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h6" sx={{ color: '#D4AF37' }}>Coming Soon</Typography>
              </Box>
              <Typography 
                variant="h5" 
                align="center"
                sx={{ 
                  color: '#D4AF37',
                  fontWeight: 600
                }}
              >
                Featured Collection
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;