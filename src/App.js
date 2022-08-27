import "./App.css";
import Navbar from "./Components/Navbar";
// import Search from "./Components/Search";
import Shop from "./Components/Shop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cart from "./Components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // console.log(cart);
    if (cart.indexOf(item) !== -1) return;
    const ids = cart.map((o) => o.id);

    if (item.quantity > 0) {
      if (!ids.includes(item.id)) {
        setCart((prevstate) => [...prevstate, item]);
      } else {
        alert("alreay in the cart");
      }
    } else {
      alert("Out of stock");
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cart={cart} />

        <div className="container my-3">
          <Routes>
            {}
            <Route path="/" element={<Shop addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
