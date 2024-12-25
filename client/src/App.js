import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { CssBaseline, Container, Box } from '@mui/material';
import About from './pages/About';
import { ThemeProvider, createTheme, Box } from '@mui/material';

// Import pages (we'll create these next)
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // Gold from logo
      light: '#E5C158',
      dark: '#B39329',
      contrastText: '#000000',
    },
    secondary: {
      main: '#000000', // Black
      light: '#2C2C2C',
      dark: '#000000',
      contrastText: '#D4AF37',
    },
    background: {
      default: '#FF6F61', // Coral background
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
        background: '#D4AF37',
      },
    },
    h3: {
      fontWeight: 600,
      color: '#000000',
    },
    button: {
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          padding: '12px 24px',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, transparent, rgba(212, 175, 55, 0.2), transparent)',
            transition: 'all 0.6s',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        contained: {
          backgroundColor: '#D4AF37',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#B39329',
            boxShadow: '0 6px 20px rgba(212, 175, 55, 0.3)',
          },
        },
        outlined: {
          borderColor: '#D4AF37',
          borderWidth: '2px',
          color: '#D4AF37',
          '&:hover': {
            borderColor: '#B39329',
            borderWidth: '2px',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(212, 175, 55, 0.2)',
            transform: 'translateY(-4px)',
            transition: 'all 0.3s ease',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ 
        bgcolor: 'background.default',
        minHeight: '100vh'
      }}>
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
      </Box>
    </ThemeProvider>
  );
}

export default App;
