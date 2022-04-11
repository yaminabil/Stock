import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Data from "./data";
import Nav from "./pages/Nav";
import { useState, useEffect } from "react";

function App() {
  const [stock, setStock] = useState(null);

  //function get the  single data
  const getStock = (value) => {
    if (value !== "" && value !== null) {
      //condition
      let response = null;
      response = Data.find((ele) => {
        if (ele.name === value) {
          return ele;
        }
      });
      console.log(response);
      if (response !== null && response !== undefined) {
        setStock([response]);
      } else {
        setStock(null);
      }
    } else {
      setStock(null);
    }
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {!stock || stock[0] === null ? (
          <Route
            path="/stocks"
            element={<Dashboard stocks={Data} getStock={getStock} />}
          />
        ) : (
          <Route
            path="/stocks"
            element={<Dashboard stocks={stock} getStock={getStock} />}
          />
        )}

        <Route path="/stocks/:symbol" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
