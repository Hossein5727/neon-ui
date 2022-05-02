import Header from "../components/Header";
import eternal from "../assets/images/real eternal1.png";
import backArrow from "../assets/images/Arrow left button.svg";
import plusIcon from "../assets/images/play1.svg";
import menu from "../assets/images/Menu button.svg";
import rating from "../assets/images/Rating.svg";
import { Navigate, useNavigate } from "react-router-dom";

function ProductInfoPage({
  titleClass,
  title,
  detail,
  detailClass,
  history,
  historyClass,
  rate,
}) {
  const navigate = useNavigate();

  return (
    <div className=" w-full h-[100vh] bg-black">
      <div className="relative productInfo w-[100vw] h-[540px] ">
        <img src={eternal} alt="eternal" className="w-full h-[full]" />
        <div className="absolute top-0 left-0 right-0 w-full">
          <Header />
          <div className="w-full flex justify-between items-center px-4 mt-3">
            <button onClick={() => navigate(-1)} className="z-[2]">
              <img src={backArrow} />
            </button>
            <img src={menu} />
          </div>
        </div>
        <button className="w-[60px] h-[60px] rounded-full bordergradient2 absolute right-[5%] bottom-[160px] flex justify-center items-center">
          <img src={plusIcon} />
        </button>

        <div className="w-full absolute left-0 right-0 bottom-[1px] text-white z-[4] flex justify-center items-center flex-col text-center gap-4">
          <h4 className={titleClass}>{title}</h4>
          <p className={detailClass}>{detail}</p>
          <div>
            <img src={rating} />
          </div>
          <p className={historyClass}>{history}</p>
          <div
            className="w-[290px] h-[2px]"
            style={{ background: "rgba(255, 255, 255, 0.15)" }}
          ></div>
        </div>
      </div>
      <div className="w-full px-6 mt-8 text-white">
        <h2 className="font-[700] text-[20px] leading-[27px] tracking-[0.38px]">
          Casts
        </h2>
      </div>
    </div>
  );
}

export default ProductInfoPage;
