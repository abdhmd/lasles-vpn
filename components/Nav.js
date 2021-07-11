import React from "react";

const menu = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "features",
  },
  {
    id: 3,
    name: "pricing",
  },
  {
    id: 4,
    name: "testimonials",
  },
  {
    id: 5,
    name: "help",
  },
];

const Nav = () => {
  return (
    <nav className=" container grid grid-cols-3  py-8  sm: py-4 bg-gray-300">
      <div className="flex justify-start items-center">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className=" hidden sm:flex justify-center items-center    ">
        <ul className="flex">
          {menu.map((item) => (
            <li key={item.id} className="flex mx-3">
              <a href={`#${item.name}`} className="capitalize opacity-80 hover:text-primary duration-300">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end items-center">
          <div className="flex  items-center">
              <a href="#" className="font-medium capitalize hover:text-primary duration-300 mr-8">sign in</a>
              <a href="#" className="flex-1 font-medium capitalize rounded-full border border-primary py-1.5 px-10 hover:bg-primary hover:text-white text-primary  duration-300 ">sign up</a>
          </div>
      </div>
    </nav>
  );
};

export default Nav;
