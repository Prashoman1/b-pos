import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useRef } from "react";
import {  type Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const SelectSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  const sliderArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  return (
    <div className="flex items-center gap-2">
      <span onClick={handlePrev} className="cursor-pointer bg-primary p-2 rounded-full ">
        <HiOutlineArrowLeft className="w-5 h-5 text-white"/>
      </span>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper flex items-center justify-between gap-3"
        breakpoints={{
          // When the viewport is 640px or larger
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // When the viewport is 768px or larger
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When the viewport is 1024px or larger
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {sliderArray?.map((item, index: number) => (
          <SwiperSlide key={index}>
            <select className="border border-success " id="">
                <option value="">Choose warehouse...</option>
                <option value="">One</option>
                <option value="">two</option>
            </select>
          </SwiperSlide>
        ))}
      </Swiper>
      <span onClick={handleNext} className="cursor-pointer bg-primary p-2 rounded-full ">
        <HiOutlineArrowRight className="w-5 h-5 text-white"/>
      </span>
    </div>
  );
};

export default SelectSlider;
