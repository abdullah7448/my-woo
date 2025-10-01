// components/HomeSlider.js
"use client"; // if you are using Next.js 13 app directory

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeSlider() {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-120 flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
            Slide 1
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-120 flex items-center justify-center bg-green-500 text-white text-2xl font-bold">
            Slide 2
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-120 flex items-center justify-center bg-red-500 text-white text-2xl font-bold">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
