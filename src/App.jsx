import React from "react";
import Home from "./pages/Home";
import Mau from "./pages/Mau";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="outfit overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mau" element={<Mau />} />
     </Routes>
    </div>
  );
}

export default App;
