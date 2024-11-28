import { Services } from "@/types/Services";
import Image from "next/image";

const ServicesCard = ({ service }: { service: Services }) => {
  return (
    <div className="backdrop-blur-sm bg-white/0 border-2 border-white shadow-lg m-5 px-5 py-7 rounded-3xl">
      <Image
        src={service.img}
        width={500}
        height={500}
        alt="service"
        className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] -z-10 blur-md"
      />
      <h2 className="text-9xl font-bold">{service.id}</h2>
      <h2 className="text-xl font-medium -mt-2 mb-3">{service.heading}</h2>
      <p className="text-justify text-sm text-contentSecondary">
        {service.content}
      </p>
    </div>
  );
};

export default ServicesCard;
