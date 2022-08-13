import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Shop from "./Components/Shop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-3">
        <Shop />
      </div>
    </div>
  );
}

export default App;
