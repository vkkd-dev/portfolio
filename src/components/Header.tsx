"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this for when a section should be considered "active"
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-white fixed hidden lg:block top-8 left-[50%] translate-x-[-50%] z-50 rounded-full p-2">
      <ul className="flex items-center text-sm font-medium">
        {["hero", "about", "services", "testimonials", "projects", "tools"].map(
          (section) => (
            <li
              key={section}
              className={`${
                currentSection === section &&
                "bg-primary text-white rounded-full"
              } py-1.5 px-5 mx-1 cursor-pointer`}
            >
              <Link href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Header;
