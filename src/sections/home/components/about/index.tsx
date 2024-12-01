"use client";

import ComponentTitle from "@/components/ComponentTitle";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsAtBottom(entry.isIntersecting),
      {
        root: null, // viewport
        threshold: 1.0, // Trigger only when the entire component is visible
      }
    );

    const target = document.querySelector("#about-bottom");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full lg:max-w-4xl mx-auto flex flex-col justify-center items-center"
    >
      <ComponentTitle title="About Me" />
      <Image
        width={150}
        height={150}
        src="/images/react-big.png"
        alt="clients"
        className="absolute top-52 left-0"
      />
      <div
        className={`backdrop-blur-sm bg-white/0 border border-white shadow-lg lg:shadow-shadow w-[90%] p-7 rounded-3xl mt-10 z-10 transition-all duration-1000 ${
          isAtBottom ? "opacity-100 translate-y-0" : "opacity-100"
        } ${isDesktop && "-rotate-2"} `}
      >
        {isAtBottom ? (
          <p className="min-h-[40vh] text-justify text-sm text-contentSecondary font-light">
            Constantly staying up-to-date with the latest industry trends and
            best practices, I strive to improve both my technical acumen and
            leadership abilities. I am deeply motivated by opportunities that
            allow me to contribute to growth, while also learning and evolving
            wifont-light the ever-changing tech landscape. <br />
            <br /> Whether building new systems, optimizing existing ones, or
            mentoring others, I am committed to making a meaningful impact
            through technology.
          </p>
        ) : (
          <p className="min-h-[40vh] text-justify text-sm text-contentSecondary font-thin">
            As a passionate and results-driven technology professional with over
            3 years of hands-on experience, I specialize in delivering
            innovative solutions to complex technical challenges. My expertise
            spans across a variety of fields including software development,
            systems administration, and cloud technologies, where I have honed
            my skills in building scalable systems and optimizing operational
            efficiency. <br />
            <br /> With a strong foundation in problem-solving, I thrive on
            collaborating with cross-functional teams to drive projects from
            concept to completion. My technical proficiency includes working
            with languages such as Python, JavaScript, and SQL, along with deep
            knowledge of cloud platforms like AWS and Azure. I am also adept in
            troubleshooting, software testing, and implementing automation to
            streamline processes.
          </p>
        )}
      </div>
      <Image
        width={150}
        height={150}
        src="/images/js-big.png"
        alt="clients"
        className="absolute bottom-28 right-0"
      />
      {/* Invisible marker */}
      <div id="about-bottom" className="absolute bottom-0"></div>
    </section>
  );
};

export default About;
