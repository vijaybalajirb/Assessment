import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Brands from './Components/Brands/Brands';
import Gettingstarted from './Components/GettingStarted/Gettingstarted';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';


function App() {
  return (
    <React.Fragment>
    <Header/>
    <Banner/>
    <Brands/>
    <Gettingstarted/>
    <ProductList/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
