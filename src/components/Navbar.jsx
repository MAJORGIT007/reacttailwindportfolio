import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-[80px] bg-zinc-900 flex justify-center items-center z-10">
      <ul className="flex gap-4">
        <li>
          <a href="#hero" className="text-xl text-white font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" className="text-xl text-white font-bold">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#aboutme" className="text-xl text-white font-bold">
            About Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
