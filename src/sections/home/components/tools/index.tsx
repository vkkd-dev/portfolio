"use client";

import ComponentTitle from "@/components/ComponentTitle";
import { my_tools_data } from "../../../../../public/data/tool";
import { Tools } from "@/types/Tool";
import Image from "next/image";

const HomeMyTools = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-10">
      <ComponentTitle title="My Tools" />
      <div className="relative grid grid-cols-2 place-items-center gap-8 w-full mt-5 py-10">
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
        {my_tools_data.map((tool: Tools) => (
          <Image
            key={tool.id}
            src={tool.img}
            width={150}
            height={150}
            alt={tool.id.toString()}
            className="z-20"
          />
        ))}
      </div>
    </div>
  );
};

export default HomeMyTools;
