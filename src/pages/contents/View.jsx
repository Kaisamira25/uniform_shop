
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../layouts/components/Navbar";
import Footer from "../../layouts/components/Footer";
import routes from "../../router/router";



export default function View() {
  return (
    <div>
      <Navbar />
      {/* // Cho page vào và xem tại đây */}
      
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
