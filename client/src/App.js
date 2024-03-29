import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import ShopState from './context/ShopState'
import Myorders from './components/Myorders';
import Delivery from './components/Delivery';
import Approvedeliveries from './components/Approvedeliveries';
import Myapproveddeliveries from './components/Myapproveddeliveries';
import Upload from './components/Upload';
import Additem from './components/Additem';



function App() {
  return (
   <>
    <ShopState>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route exact path="/login" element={<Login></Login>}></Route>
              <Route exact path="/signup" element={<Signup></Signup>}></Route>
              <Route exact path="/products" element={<Products></Products>}></Route>
              <Route exact path="/cart" element={ <Cart></Cart>}></Route>
              <Route exact path="/myorders" element={<Myorders></Myorders>}></Route>
              <Route exact path="/deliveries" element={<Delivery></Delivery>}></Route>
              <Route exact path="/approvedeliveries" element={<Approvedeliveries></Approvedeliveries>}></Route>
              <Route exact path="/mydeliveries" element={<Myapproveddeliveries></Myapproveddeliveries>}></Route>
              {/* <Route exact path="/upload" element={<Upload></Upload>}></Route> */}
              <Route exact path="/additem" element={<Additem></Additem>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
    </ShopState>
   </>
  );
}

export default App;
