import React from "react";
import aboutHome1 from "../../assets/images/aboutHome/aboutHome1.jpg";
import aboutHome2 from "../../assets/images/aboutHome/aboutHome2.jpg";

const AboutHome = () => {
  return (
    <div className="px-32 flex items-center justify-center flex-col h-screen rounded-[50px] bg-[#124232] mt-20">
      <div className=" w-full">
        <h1 className="text-[#728e41] font-festivo text-4xl">
          ABOUT THE COFFEESHOP COMPANY®
        </h1>
        <p className="mt-7 text-white font-konit text-lg ">
          We provide you with your daily 'ME Moment'. Amidst the hustle and
          bustle of city life, a visit to one of our Coffeeshops <br /> offers
          relaxation and inspiration at the same time. With the combination of a
          pleasant atmosphere and an urban backdrop, <br /> we create a setting
          in which you become the main character.
        </p>
      </div>
      <div className=" flex items-center justify-between w-full mt-14">
        <img className=" rounded-xl w-[870px] h-[520px]" src={aboutHome1} />
        <img className="h-[520px] w-[350px] rounded-xl" src={aboutHome2} />
      </div>
    </div>
  );
};

export default AboutHome;
