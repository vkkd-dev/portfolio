"use client";

import ComponentTitle from "@/components/ComponentTitle";
import TestimonialsCard from "@/components/TestimonialsCard";
import { Testimonial } from "@/types/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonials_data } from "../../../../../public/data/testimonials";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <ComponentTitle title="Client Testimonials" />
      <div className="w-full max-w-4xl lg:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {testimonials_data.map((testimonial: Testimonial) => (
            <SwiperSlide key={testimonial.id} className="mb-10">
              <TestimonialsCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:block max-w-4xl">
        {testimonials_data.map((testimonial: Testimonial) => (
          <SwiperSlide key={testimonial.id} className="mb-10">
            <TestimonialsCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
