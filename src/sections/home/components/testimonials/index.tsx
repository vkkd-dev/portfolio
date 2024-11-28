"use client";

import { Testimonials } from "@/types/Testimonials";
import { testimonials_data } from "../../../../../public/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialsCard from "@/components/TestimonialsCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeTestimonials = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-contentPrimary text-3xl font-bold mb-3">
        Client Testimonials
      </h2>
      <div className="w-full max-w-4xl">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {testimonials_data.map((testimonial: Testimonials) => (
            <SwiperSlide key={testimonial.id} className="mb-10">
              <TestimonialsCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTestimonials;
