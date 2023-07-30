import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing.js';
import Flights from './pages/Flights.js';
import Book from './pages/Book.js';
import Meal from './pages/Meal.js';
import Luggage from './pages/Luggage.js';
import Confirm from './pages/Confirm.js';
import About from './pages/About.js';
import Carousel from './components/Carousel';
import Explore from './pages/Explore';
import Footer from './components/Footer';
import Details from './components/Details';
import PlaceDetails from './components/PlaceDetails';
import { productData } from './components/Data';
import ScrollToTop from './functions/ScrollToTop';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/meal" element={<Meal />} />
            <Route path="/luggage" element={<Luggage />} />
            <Route path="/confirm" element={<Confirm />} />
            {productData.map((place) => (
              <Route key={place.id} path={`/places/${place.id}`} element={<PlaceDetails id={place.id} />} />
            ))}
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
