import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/cartSection/Cart";

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <div style={{ width: "70%" }}>
          <Navbar />
          <Outlet />
        </div>
        <div style={{ width: "30%" }}>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
