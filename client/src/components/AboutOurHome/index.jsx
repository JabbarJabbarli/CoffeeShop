import React from "react";

const AboutOurHome = ({ aboutUs = [] }) => {
  return (
    <div className="p-32 h-screen">
      <div>
        <h1 className="font-festivo text-responsive-lg text-white text-center">
          About Us
        </h1>
        <div className="flex items-center justify-between overflow-hidden">
          {aboutUs.map((item) => (
            <div
              key={item.id}
              className="mt-20 relative overflow-hidden group w-[350px] h-[703px] rounded-[200px]"
            >
              <img
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                src={item.image}
              />
              <p className="text-white bg-opacity-60 absolute left-[50px] top-[300px] text-3xl font-bold">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutOurHome;
