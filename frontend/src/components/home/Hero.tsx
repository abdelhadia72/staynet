import SearchBar from "@/components/SearchBar";
import React from "react";

const Hero = () => {
  return (
    <div className="hero mt-20 relative">
      <div className="bg-[url('/images/hero.png')] bg-cover bg-center h-[60vh]"></div>
      <div className="absolute top-32 left-[50%] -translate-x-[50%]">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
