"use client";
import React, { memo } from "react";
import { cn } from "../../../utils.ts";

export const TextRevealCard = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "border border-black w-[160%] h-[10rem] rounded-lg p-6 relative overflow-hidden flex bg-white"
      )}
    >
      {/* First Section */}
      <div className="group flex-1 m-1 rounded flex flex-col justify-center items-start p-4 border-r border-gray-200 relative hover:shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
        <div className="group-hover:hidden">
          <h2 style={{ color: "#73b72c", fontWeight: "bold" }}>Izinhlelo Ezizayo</h2>
          <h3 className="text-black font-semibold">Upcoming Events</h3>
          <p className="text-gray-500">Join us during our local events</p>
        </div>
        <button
          onClick={() => scrollToSection("events")}
          className="hidden group-hover:block bg-[#73b72c] text-white px-6 py-2 rounded transition-opacity duration-300"
        >
          Learn More
        </button>
      </div>

      {/* Second Section */}
      <div className="group flex-1 m-1 rounded flex flex-col justify-center items-start p-4 border-r border-gray-200 relative hover:shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
        <div className="group-hover:hidden">
          <h2 style={{ color: "#73b72c", fontWeight: "bold" }}>Izinsizakalo</h2>
          <h3 className="text-black font-semibold">Services</h3>
          <p className="text-gray-500">Eye care, Group Therapy and many more</p>
        </div>
        <button
          onClick={() => scrollToSection("services")}
          className="hidden group-hover:block bg-[#73b72c] text-white px-6 py-2 rounded transition-opacity duration-300"
        >
          Explore Services
        </button>
      </div>

      {/* Third Section */}
      <div className="group flex-1 m-1 rounded flex flex-col justify-center items-start p-4 border-r border-gray-200 relative hover:shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
        <div className="group-hover:hidden">
          <h2 style={{ color: "#73b72c", fontWeight: "bold" }}>Abaxhasi Bethu</h2>
          <h3 className="text-black font-semibold">Our Supporters</h3>
          <p className="text-gray-500">We thank all people who make us better</p>
        </div>
        <button
          onClick={() => scrollToSection("supporters")}
          className="hidden group-hover:block bg-[#73b72c] text-white px-6 py-2 rounded transition-opacity duration-300"
        >
          Meet Supporters
        </button>
      </div>

      {/* Button Section */}
      <div className="flex-1 m-1 rounded flex flex-col justify-center items-center p-4">
        <button
          onClick={() => scrollToSection("start")}
          style={{ backgroundColor: "#73b72c" }}
          className="text-white px-6 py-2 rounded-full hover:bg-green-600"
        >
          <h2>Qala</h2>
          <h2 className="font-semibold">Explore Now</h2>
        </button>
      </div>
    </div>
  );
};

const Stars = () => {
  return <div className="absolute inset-0"></div>;
};

export const MemoizedStars = memo(Stars);
