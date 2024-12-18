import React from 'react';
import { Typography, Button, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      title: "Men's Collection",
      image: '/images/mens.jpg',
      link: '/products?category=men'
    },
    {
      title: "Women's Collection",
      image: '/images/womens.jpg',
      link: '/products?category=women'
    },
    {
      title: 'Featured Looks',
      image: '/images/featured.jpg',
      link: '/products?category=featured'
    }
  ];

  return (
    <Box>
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: '#000000',
          position: 'relative',
          mb: 6,
        }}
      >
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            mb: 4,
            animation: 'slideUp 1.5s ease-out',
            '@keyframes slideUp': {
              from: {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          Luxury Fitness Wear
        </Typography>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            mb: 4,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'primary.main',
            fontWeight: 600,
            animation: 'slideUp 1.5s ease-out 0.3s',
            animationFillMode: 'backwards',
          }}
        >
          Where Style Meets Performance
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/products"
          sx={{ 
            minWidth: 200,
            fontSize: '1.1rem',
            animation: 'fadeIn 2s ease-out 0.6s',
            animationFillMode: 'backwards',
            '@keyframes fadeIn': {
              from: {
                opacity: 0,
              },
              to: {
                opacity: 1,
              },
            },
          }}
        >
          Shop Now
        </Button>
      </Box>

      <Typography 
        variant="h2" 
        component="h2" 
        align="center" 
        sx={{ mb: 6 }}
      >
        Our Collections
      </Typography>

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }}>
        {categories.map((category) => (
          <Grid item xs={12} md={4} key={category.title}>
            <Card 
              component={Link}
              to={category.link}
              sx={{ 
                textDecoration: 'none',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={category.image}
                alt={category.title}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h5" component="h3">
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
