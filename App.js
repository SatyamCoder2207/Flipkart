// import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import FlipkartHeader from './NavBar';
import NavigationBar from './NavigationBar';
import SimpleSlider from './SlickCarosul';
import BestOfToys from './toys.js';
import ProductGrid from './ProductOffer.js';
import { Container } from 'react-bootstrap';
import FashionDeals from './FashionDeals.js';
import HomeDecorDeals from './HomeDecorDeals.js';
import Footer from './Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ProductList from './ProductList.js';
import CategoryPage from './CategoryPage.js';
import FeaturedBrandsSlider from './FeaturedBrandsSlider .js';
// import FlipkartHeaderWithCart from './NavBar';


function App() {
  return (
      <Container>
        
        <FlipkartHeader />
        <NavigationBar />
        <SimpleSlider />
        <Router>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
          </Routes>
        </Router>
        <BestOfToys />
        <ProductGrid />
        <FeaturedBrandsSlider />
        <FashionDeals />
        <HomeDecorDeals />
        <Footer />
        {/* <FlipkartHeaderWithCart/> */}
      </Container>
  );
}

export default App;