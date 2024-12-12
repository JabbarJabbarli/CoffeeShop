import React from "react";

const StroiesHome = ({ stories }) => {
  return (
    <div className="h-auto p-32 border-b border-gray-500 flex items-center justify-center flex-col">
      <div className="w-full mb-20">
        <h1 className="text-white font-festivo text-responsive-lg">STORIES</h1>
        <p className="text-xl w-[700px] text-white">
          Every coffee we serve has its own story - and so does our Brand
          Coffeeshop Company®. From our humble beginnings to our global success,
          we have numerous remarkable milestones and inspiring stories to share.
        </p>
      </div>
      <div className=" flex gap-7 justify-between w-full">
        {stories.map((item) => (
          <div className="flex flex-col gap-4 h-full" key={item.id}>
            <div className="group relative overflow-hidden w-[410px] h-[480px] rounded-[40px]">
              <img
                src={item.image}
                alt="Sample"
                className="w-[410px] h-[480px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="w-[300px]  px-10">
              <span className="text-white text-3xl font-festivo text-center">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StroiesHome;
