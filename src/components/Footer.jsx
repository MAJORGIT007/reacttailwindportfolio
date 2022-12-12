import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 flex justify-center items-center bg-zinc-900 text-center">
      <p className="paragraph">
        Designed by <span className="underline">Jun</span>. Created with{" "}
        <a
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          className="react-color font-bold"
        >
          React
        </a>
        , styled with{" "}
        <a
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          className="tailwind-color font-bold"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
