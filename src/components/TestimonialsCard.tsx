import { Testimonial } from "@/types/Testimonials";
import Image from "next/image";

const TestimonialsCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-0 lg:gap-5 items-center justify-evenly backdrop-blur-sm bg-white/0 border-2 border-white shadow-lg lg:shadow-shadow m-5 p-5 rounded-3xl overflow-hidden">
      <Image
        src="/images/testimonial-bg.png"
        width={500}
        height={500}
        alt="service"
        className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] -z-10 blur-md"
      />
      <Image src={testimonial.img} width={180} height={180} alt="testimonial" />
      <div className="text-center lg:text-start">
        <h2 className="text-lg font-semibold mt-5">{testimonial.name}</h2>
        <h2 className="font-medium text-sm mt-1">{testimonial.company}</h2>
        <p className="text-justify text-contentSecondary text-sm mt-4">
          "{testimonial.message}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
