"use client";

import ServicesCard from "@/components/ServicesCard";
import ComponentTitle from "@/components/ComponentTitle";
import { Service } from "@/types/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { services_data } from "../../../../../public/data/services";
import "swiper/css";

const Services = () => {
  return (
    <section id="services" className="min-h-screen flex flex-col justify-evenly items-center py-16">
      <ComponentTitle title="Services" />
      <div className="flex flex-col lg:flex-row gap-5 lg:hidden">
        {services_data.map((service: Service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
      <div className="hidden lg:flex w-full">
        <Swiper spaceBetween={10} slidesPerView={3}>
          {services_data.map((service: Service) => (
            <SwiperSlide key={service.id} className="mb-10">
              <ServicesCard key={service.id} service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
