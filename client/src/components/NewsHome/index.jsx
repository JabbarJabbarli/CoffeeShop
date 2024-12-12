import React from "react";

const NewsHome = ({ newsData }) => {
  return (
    <div className="min-h-screen rounded-[30px] bg-[#124232] p-32">
      <div className="flex items-center justify-between pb-2 border-b">
        <h1 className="text-white text-5xl font-festivo">News</h1>
        <button className="text-white text-3xl font-light">
          Contributions
        </button>
      </div>
      <div className="pt-24 flex justify-between">
        {newsData.map((item) => (
          <div className="flex flex-col gap-10">
            <img
              src={item.image}
              className={`${
                item.id == 1 ? "h-[860px]" : "h-[400px]"
              } rounded-2xl`}
            />
            <p className="text-white font-festivo text-3xl w-[200px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHome;
