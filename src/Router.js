import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFTHome from "./Routes/NFTHome";

function Router(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NFTHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
