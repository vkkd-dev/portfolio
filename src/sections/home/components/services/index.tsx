import ServicesCard from "@/components/ServicesCard";
import { services_data } from "../../../../../public/data/services";
import { Services } from "@/types/Services";

const HomeServices = () => {
  return (
    <div className="min-h-screen flex flex-col justify-evenly items-center py-16">
      <h2 className="text-contentPrimary text-3xl font-bold mb-3">Services</h2>
      <div>
        {services_data.map((service: Services) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
