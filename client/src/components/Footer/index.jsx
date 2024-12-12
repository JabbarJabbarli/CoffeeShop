import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ({ footer, icons }) => {
  return (
    <div className="p-32">
      <div className="flex items-center justify-between pb-20">
        <NavLink to="/location">
          <div className="bg-[#728e41] px-52  rounded-[35px] py-14">
            <h1 className="text-white font-festivo text-4xl">We invite you.</h1>
            <p className="text-white text-xl">Chekc out our locations</p>
          </div>
        </NavLink>
        <NavLink to="/form">
          <div className="bg-[#728e41] px-40 rounded-[35px] py-14">
            <h1 className="text-white font-festivo text-4xl">
              Have Any Questions?
            </h1>
            <p className="text-white text-xl">
              We look forward to hear from you
            </p>
          </div>
        </NavLink>
      </div>

      <div className="flex py-10 justify-between">
        <svg
          viewBox="0 0 293.5 362"
          className="w-[100px] h-[85px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#8fab53">
            <path d="m22.9 273.6 74.3 65.6c6.7 5.9 8.7 12.9-1.1 18 0 0-37.2 17.8-73.4-15.5-36-33.1-18.4-66.8-18.4-66.8 5.1-9.7 11.9-7.2 18.6-1.3z"></path>
            <path d="m122 329.3c-4.1 9.1-12.2 8.2-18.9 2.3l-74.3-65.6c-6.6-5.9-8.6-11.4 0-17.7 0 0 34.3-18.9 71.7 12.7 37.6 31.9 21.5 68.3 21.5 68.3z"></path>
            <path d="m99.5 14.3c.2-.1.4-.2.6-.2.5 0 1.1.3 1.4.6.5.5.8 1.5.4 2.1-25.3 40.6-27.3 76.5-6 106.7 7.7 11 19.5 21.6 32 32.8 39.7 35.7 89.2 80.2 30.4 165.7-.3.4-.8.6-1.3.6-.2 0-.5-.1-.7-.2-.7-.3-1.2-1.1-1-1.8 17.9-64.9-27.7-86.3-71.7-107-28.5-13.4-55.3-26-66.3-49.4-31.2-66.1 48.8-130.6 82.2-149.9z"></path>
            <path d="m167.9 339.7c37.9-40.2 56-73.4 55.2-101.5-.9-31-23.8-52.5-48.1-75.2-40.1-37.7-81.7-76.6-26.7-162.4.3-.4.9-.6 1.4-.6.2 0 .5 0 .7.1.7.3 1.3 1 1.1 1.8-12.3 60.2 32.5 87.7 59.2 104.1 3 1.9 5.8 3.5 8.2 5.1 18.6 12.2 78.9 56.4 74.4 112.4-3.4 43.5-45 83.5-123.4 119-.2.1-.3.1-.5.1-.6 0-1.2-.3-1.5-.8-.4-.6-.5-1.6 0-2.1z"></path>
          </g>
        </svg>
        {footer.map((item) => (
          <div className="flex flex-col gap-3">
            <div className="">
              <NavLink className="text-white font-bold text-3xl font-festivo">
                {item.category}
              </NavLink>
            </div>
            <div className="flex flex-col gap-1 w-[254px]">
              {item.links ? (
                item.links.map((link) => (
                  <div>
                    <NavLink className="text-white text-lg">
                      {link.title}
                    </NavLink>
                  </div>
                ))
              ) : (
                <p className="text-white text-lg">{item.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div class="border border-gray-700"></div>
      <div className="flex text-white gap-10 items-center justify-between pt-10">
        <div className="flex items-center gap-10 ">
          <p>Copyright © 2024 Coffeeshop Company GmbH </p>
          {icons.map((item) => (
            <img className="w-[30px]" src={item.image} />
          ))}
        </div>
        <div>
          <p className="font-festivo">
            An <span className="text-[#6F824E]">Eatery Group</span> Company
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
