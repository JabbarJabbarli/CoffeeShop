import React from "react";
import coffeeLocation from "../../assets/coffeeLocation/coffeLocation.jpg"; // Import as default

const LocationFind = () => {
  return (
    <div className="px-32 py-32 ">
      <div className="flex gap-10 w-[1000px]">
        <img
          src={coffeeLocation}
          className="w-[540px] h-[835px]"
          alt="Coffee Location"
        />
        <h1 className="font-festivo leading-tight  text-white text-[120px]">Location Finder</h1>
      </div>
    </div>
  );
};

export default LocationFind;
