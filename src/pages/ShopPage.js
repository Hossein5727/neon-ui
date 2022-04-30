import React from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper";
import searchBarIcon from "../assets/images/magnifyingglass.svg";
import microphoneIcon from "../assets/images/microphone.svg";
import { movieData } from "../data/movieData";

function ShopPage() {
  const swiperSetting = useSwiper();

  return (
    <div className="w-full shop-page">
      <Header />

      <div className="w-full text-white px-4">
        <div className="w-full flex justify-center items-center flex-col">
          <h2 className="text-white w-[220px] font-bold text-[28px] text-center leading-[38px] tracking-[-0.3px]">
            What would you like to watch?
          </h2>
          <div className="w-full h-[36px] flex justify-start items-center gap-3 searchbar mt-5 rounded-[10px] px-2 py-1">
            <img src={searchBarIcon} alt="searchbaricon" />
            <input
              type="text"
              className="w-full h-full bg-transparent font-[400] text-[17px] leading-[22px] tracking-[-0.408px] text-white border-none outline-none"
              placeholder="Search"
            />
            <img src={microphoneIcon} alt="microphoneicon" />
          </div>
        </div>

        <div className="mt-8 w-full">
          {movieData.map((item) => (
            <div
              key={item.id}
              className="flex justify-start items-start flex-col gap-7 mb-5"
            >
              <h2 className="font-[400] text-[17px] leading-[23px] tracking-[-0.3px] text-white">
                {item.title}
              </h2>
              <Swiper
                modules={[Pagination]}
                slidesPerView={3}
                className="w-full flex"
              >
                <SwiperSlide className="w-full mr-2">
                  <img src={item.img1} />
                </SwiperSlide>

                <SwiperSlide className="w-full mr-2">
                  <img src={item.img2} />
                </SwiperSlide>

                <SwiperSlide className="w-full mr-2">
                  <img src={item.img3} />
                </SwiperSlide>

                <SwiperSlide className="w-full mr-2">
                  <img src={item.img1} />
                </SwiperSlide>
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
