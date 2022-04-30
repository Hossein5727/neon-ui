import { useEffect, useRef } from "react";
import avatarImg from "../assets/images/Avatar.svg";
import Header from "../components/Header";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const slideProperty = [{ id: 1 }, { id: 2 }, { id: 3 }];

function HomePage() {
  const slideRef = useRef();
  const swiperSetting = useSwiper();

  useEffect(() => {
    if (swiperSetting && swiperSetting.slides) {
      console.log(swiperSetting.activeIndex);
    }
  }, [swiperSetting]);

  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      className="h-[100vh]"
      ref={slideRef}
    >
      {slideProperty.map((item) => (
        <SwiperSlide
          className="bggradinet border-none outline-none w-full"
          key={item.id}
        >
          <Header />
          <div className="w-[full] flex justify-center items-center px-3 py-2">
            <img className="" src={avatarImg} alt="avatar" />
          </div>

          <div className="w-full flex justify-center items-center flex-col gap-4 mt-4 px-8">
            <h2 className="font-[700] text-[34px] leading-[46px] tracking-[-0.3px] text-center textWhite">
              Watch movies in Virtual Reality
            </h2>

            <p className="font-[400] w-[200px] text-[16px] leading-[22px] tracking-[-0.3px] text-center textWhite">
              Download and watch offline wherever you are
            </p>
            {item.id !== 3 && (
              <button
                onClick={() => slideRef.current.swiper.slideNext()}
                className="w-[160px] h-[41px] text-white rounded-lg bordergradient"
              >
                Next
              </button>
            )}
            {item.id === 3 && (
              <Link
                to="/shoppage"
                className="w-[160px] h-[41px] text-center flex justify-center items-center text-white rounded-lg bordergradient"
              >
                Get Started
              </Link>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomePage;
