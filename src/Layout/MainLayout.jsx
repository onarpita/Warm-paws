import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div 
    // className="flex flex-col min-h-screen max-w-7xl mx-auto "
    >
      <Navbar></Navbar>
      <div className="flex-grow">

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;