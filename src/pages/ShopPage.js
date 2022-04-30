import React from "react";
import Header from "../components/Header";

function ShopPage() {
  return (
    <div className="w-full shop-page">
      <Header />

      <div className="w-full text-white px-4">
        <div className="w-full flex justify-center items-center flex-col">
          <h2 className="text-white w-[220px] font-bold text-[28px] text-center leading-[38px] tracking-[-0.3px]">
            What would you like to watch?
          </h2>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
