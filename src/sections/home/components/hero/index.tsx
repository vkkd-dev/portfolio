"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center w-full min-h-screen"
    >
      <div className="relative flex flex-col items-center justify-center gap-24 lg:gap-10 w-[90%] lg:w-[65%] mt-20 z-10">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-contentPrimary text-4xl lg:text-6xl heading-font">
            Hey, I&apos;m xxxxx
          </h1>
          <p className="text-contentSecondary lg:hidden">Tech Expertise</p>
        </div>
        <Image
          width={isDesktop ? 125 : 75}
          height={isDesktop ? 125 : 75}
          src="/images/node.png"
          alt="clients"
          className="absolute top-24 lg:top-0 left-14 lg:left-28 floating"
        />
        <Image
          width={isDesktop ? 125 : 75}
          height={isDesktop ? 125 : 75}
          src="/images/php.png"
          alt="clients"
          className="absolute top-24 lg:top-0 right-14 lg:right-28 floating"
        />
        <Image
          width={isDesktop ? 125 : 75}
          height={isDesktop ? 125 : 75}
          src="/images/express.png"
          alt="clients"
          className="absolute left-0 lg:left-14 floating"
        />
        <Image
          width={isDesktop ? 300 : 220}
          height={isDesktop ? 300 : 220}
          src="/images/profile.png"
          alt="clients"
        />

        <Image
          width={isDesktop ? 125 : 75}
          height={isDesktop ? 125 : 75}
          src="/images/css.png"
          alt="clients"
          className="absolute right-0 lg:right-14 floating"
        />
        <Image
          width={isDesktop ? 125 : 75}
          height={isDesktop ? 125 : 75}
          src="/images/react.png"
          alt="clients"
          className="absolute bottom-24 lg:bottom-8 left-14 lg:left-52 floating"
        />
        <Image
          width={isDesktop ? 125 : 75}
          height={isDesktop ? 125 : 75}
          src="/images/javascript.png"
          alt="clients"
          className="absolute bottom-24 lg:bottom-8 right-14 lg:right-52 floating"
        />
        <div className="flex flex-col gap-6 items-center">
          <Image
            width={200}
            height={200}
            src="/images/hireme.png"
            alt="clients"
          />
        </div>
      </div>
      <h2 className="absolute top-[50%] translate-y-[-50%] hidden lg:flex justify-center items-center self-center mx-auto w-full text-[9.8rem] font-extrabold uppercase text-contentTertiary">
        Tech Expertise
      </h2>
      <div className="flex flex-col gap-2 items-center mt-6">
        <Image width={75} height={75} src="/images/clients.png" alt="clients" />
        <p className="text-contentSecondary text-sm">10+ Happy clients</p>
      </div>
    </section>
  );
};

export default Hero;
