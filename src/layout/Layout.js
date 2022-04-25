import React from "react";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="bg-black w-full h-[100vh]">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
