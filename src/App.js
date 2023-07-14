import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner/Banner';
import Brands from './Components/Brands/Brands';
import Gettingstarted from './Components/GettingStarted/Gettingstarted';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import ProductList from './Components/ProductList/ProductList';
import GroupedCards from './Components/GroupedCards/GroupedCards';
import DataTable from './Components/Table/Table';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <GroupedCards/>
    <Brands/>
    <Gettingstarted/>
    <ProductList/>
    <Footer/>
    </>
  );
}

export default App;
