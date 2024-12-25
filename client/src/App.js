import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box, CssBaseline, Container } from '@mui/material';
import About from './pages/About';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'coral',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#D4AF37',
      light: '#E5C158',
      dark: '#B39329',
      contrastText: '#000000',
    },
    secondary: {
      main: '#000000',
      light: '#2C2C2C',
      dark: '#000000',
      contrastText: '#D4AF37',
    },
    background: {
      default: 'coral',
      paper: '#F8F8F8',
    },
    text: {
      primary: '#000000',
      secondary: '#D4AF37',
    },
    divider: 'rgba(212, 175, 55, 0.2)',
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#D4AF37',
      letterSpacing: '0.05em',
    },
    h2: {
      fontWeight: 700,
      textTransform: 'uppercase',
      color: '#000000',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '3px',
        backgroundColor: '#D4AF37',
      },
    },
    h3: {
      fontWeight: 600,
      color: '#D4AF37',
    },
    h4: {
      fontWeight: 600,
      color: '#000000',
    },
    h5: {
      fontWeight: 500,
      color: '#D4AF37',
    },
    h6: {
      fontWeight: 500,
      color: '#000000',
    },
    subtitle1: {
      fontSize: '1.1rem',
      color: '#666666',
    },
    subtitle2: {
      fontSize: '0.9rem',
      color: '#888888',
    },
    body1: {
      fontSize: '1rem',
      color: '#333333',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.9rem',
      color: '#666666',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 4px 8px rgba(0,0,0,0.1)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 16px 24px rgba(0,0,0,0.1)',
    '0px 24px 32px rgba(0,0,0,0.1)',
  ],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          backgroundColor: 'coral !important',
          minHeight: '100vh',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }} 
      />
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;