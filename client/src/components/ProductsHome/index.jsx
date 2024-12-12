import React from "react";

const ProductsHome = ({ productsImg }) => {
  return (
    <div className="flex border border-gray-400 items-center px-32 justify-start border-l-0 border-r-0 h-screen">
      <div>
        <h1 className="text-white font-festivo text-responsive-lg text-left">
          PRODUCTS
        </h1>
        <div className="flex gap-10 relative flex-row">
          {productsImg.map((item, index) => (
            <div key={item.index} className="relative">
              <img
                className="rounded-xl w-[418px] h-[420px]"
                src={item.image}
                alt={`Product ${item.index}`}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl bg-black bg-opacity-40">
                <p className="text-white text-3xl font-festivo">
                  {item.index % 2 === 0
                    ? "Hot & Cold Drinks"
                    : "Sweets & Snacks"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsHome;
