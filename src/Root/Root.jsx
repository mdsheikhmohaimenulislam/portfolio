import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
