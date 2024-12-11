import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useRef } from "react";
import {  type Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

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
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
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
            slidesPerView: 4,
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
    </div>
  );
};

export default SelectSlider;
