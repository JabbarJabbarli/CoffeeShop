import React from "react";

const FromViena = () => {
  return (
    <div className="relative flex items-center justify-center px-32 py-10 ">
      <div className="relative bg-vienaImg bg-no-repeat bg-contain  bg-center w-full h-[300px] sm:h-[500px] md:h-[658px]">
        <h1 className="leading-none tracking-wider pt-8 font-festivo text-white text-[40px] sm:text-[80px] lg:text-[120px]">
          FROM VIENA <br /> WITH LOVE
        </h1>
        <div className="absolute p-3 top-[50%] sm:top-[420px] right-0 sm:right-[-30px] w-[90%] sm:w-[560px]">
          <p className="text-white text-sm sm:text-base lg:text-xl">
            Our coffee uniquely combines creativity and science. With great
            passion, we develop handcrafted recipes in-house, paying strict
            attention to high-quality, organic, and natural ingredients that are
            exclusively sourced for us in the region. This approach forms the
            foundation for the stability and sustainability of our brand, and it
            goes hand in hand with the satisfaction of our guests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FromViena;
