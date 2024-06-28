import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthController';
import { CartProvider } from './contexts/CartContext';
import Routes from './routes';
import GlobalStyle from './GlobalStyle';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
        <CartProvider>
              <Router>
                    <GlobalStyle />
                    <NavBar />
                    <Routes/>
              </Router>
        </CartProvider>
    </AuthProvider>
  );
};

export default App;
