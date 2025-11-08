import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
