"use client";

import ComponentTitle from "@/components/ComponentTitle";
import Image from "next/image";
import { my_tools_data } from "../../../../../public/data/tool";
import { Tool } from "@/types/Tool";
import { useMediaQuery } from "react-responsive";

const MyTools = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  return (
    <section id="tools" className="w-full min-h-screen flex flex-col justify-center items-center py-10">
      <ComponentTitle title="My Tools" />
      <div className="relative grid grid-cols-2 lg:grid-cols-3 place-items-center gap-8 w-full lg:max-w-3xl mt-5 py-10">
        <Image
          src="/images/my_tools1.png"
          width={450}
          height={450}
          alt="tools bg"
          className="absolute top-0"
        />
        <Image
          src="/images/my_tools2.png"
          width={350}
          height={350}
          alt="tools bg"
          className="absolute bottom-0"
        />
        {my_tools_data.map((tool: Tool) => (
          <Image
            key={tool.id}
            src={tool.img}
            width={isDesktop ? 250 : 150}
            height={isDesktop ? 250 : 150}
            alt={tool.id.toString()}
            className="z-20"
          />
        ))}
      </div>
    </section>
  );
};

export default MyTools;
