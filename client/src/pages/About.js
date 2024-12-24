import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper 
        elevation={3}
        sx={{
          p: { xs: 3, md: 6 },
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: '#D4AF37',
              fontWeight: 'bold',
              mb: 3
            }}
          >
            About Us
          </Typography>
          
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: '#333',
              mb: 4
            }}
          >
            Crafting Quality Through Passion
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{ 
              color: '#D4AF37',
              mb: 2,
              fontWeight: 600
            }}
          >
            Our Story
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}
          >
            Welcome to Grind & Gloss, where passion meets fashion. Under the visionary leadership of our CEO, Ushus Krishnan Nair, we've dedicated ourselves to creating high-quality printed t-shirts that make a statement.
          </Typography>

          <Typography
            variant="h5"
            component="h3"
            sx={{ 
              color: '#D4AF37',
              mb: 2,
              fontWeight: 600
            }}
          >
            Our Vision
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}
          >
            At Grind & Gloss, we believe that every t-shirt tells a story. Our CEO, Ushus Krishnan Nair, brings her passion for design and commitment to quality into every piece we create. Each product is carefully crafted to ensure the highest standards of print quality and comfort.
          </Typography>

          <Typography
            variant="h5"
            component="h3"
            sx={{ 
              color: '#D4AF37',
              mb: 2,
              fontWeight: 600
            }}
          >
            Our Commitment
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}
          >
            We're committed to delivering not just products, but experiences. From selecting the finest materials to implementing cutting-edge printing techniques, every step of our process is guided by our dedication to excellence and customer satisfaction.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;