import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Destination from "./Pages/Destination";
import Hotel from "./Pages/Hotel";
import PageNotFound from "./Pages/PageNotFound";

import "./css/style.css";
import "./css/flaticon.css";
import AdminHotel from "./Pages/AdminHotel";
import AdminDestination from "./Pages/AdminDestination";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="destination" element={<Destination />}></Route>
        <Route path="hotel" element={<Hotel />}></Route>
        <Route path="admin/hotel" element={<AdminHotel />} ></Route>
        <Route path="admin/destination" element={<AdminDestination />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
