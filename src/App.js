import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contacts from './pages/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import About from "./pages/About/About";
import Tours from "./pages/Tours/Tours";
import Discount from "./pages/Discount/Discount";
import AnchorButton from "./components/AnchorButton/AnchorButton";
import Nav from './components/Nav/Nav'
import TourseSingle from "./pages/TourseSingle/TourseSingle";
import DiscountSingle from "./pages/DiscountSingle/DiscountSingle";


function App() {
  const location = useLocation();
 useEffect(() => {
    window.scrollTo(0,0);
 
  }, [location]);
  Nav();

 return (
    <>
 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/tours-single/:id" element={<TourseSingle/>} />
        <Route path="/discount" element={<Discount/>} />
        <Route path="/discount-single/:id" element={<DiscountSingle/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>

    <AnchorButton/>
      <Footer />
    </>
  );
}
export default App;
