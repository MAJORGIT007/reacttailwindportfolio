import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-12 flex justify-center items-center bg-zinc-900 text-center">
      <p className="paragraph">
        Created with <span className="react-color font-bold">React</span>,
        styled with{" "}
        <span className="tailwind-color font-bold">Tailwind CSS</span>.
      </p>
    </div>
  );
};

export default Footer;
