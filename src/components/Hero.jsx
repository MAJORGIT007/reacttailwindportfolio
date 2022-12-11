import React from "react";
import html from "../assets/htmlicon.svg";
import css3 from "../assets/css3icon.svg";
import javascript from "../assets/javascripticon.svg";
import react from "../assets/reacticon.svg";
import tailwind from "../assets/tailwindicon.svg";
import figma from "../assets/figmaicon.svg";
import linkedin from "../assets/linkedinicon.svg";
import github from "../assets/githubicon.svg";
import twitter from "../assets/twittericon.svg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="h-screen flex flex-col justify-center items-center mx-8 lg:text-left lg:flex-row m-auto gap-8"
    >
      <div className="w-[320px] sm:w-[370px] md:w-[470px] lg:w-[470px] flex lg:flex-col gap-[30px]">
        <div className="w-[250px] sm:w-[330px] md:w-[420px] lg:w-[470px]">
          <h1>
            Hi there!
            <br />
            My name is <span className="tailwind-color">Jun</span>
          </h1>
          <p className="paragraph">
            I am a fresh graduate, focusing on Frontend Web Developement,
            passionate about{" "}
            <span className="text-white font-bold">responsive web design</span>{" "}
            and <span className="text-white font-bold">UI design</span>.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start gap-2 sm:gap-4">
          <a
            href="https://www.linkedin.com/in/jun-kuan-lee-8716691aa/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-10 h-10 hover:-translate-y-3 transition duration-700 ease-in-out"
            />
          </a>
          <a href="https://github.com/MAJORGIT007" target="_blank">
            <img
              src={github}
              alt="LinkedIn"
              className="w-10 h-10 hover:-translate-y-3 transition duration-700 ease-in-out"
            />
          </a>
          <a href="https://twitter.com/jjjaepeg" target="_blank">
            <img
              src={twitter}
              alt="LinkedIn"
              className="w-10 h-10 hover:-translate-y-3 transition duration-700 ease-in-out"
            />
          </a>
          <a
            href="#"
            target="_blank"
            className="hidden lg:block h-10 px-4 py-[6px] font-bold bg-white rounded-full hover:-translate-y-3 transition duration-700 ease-in-out"
          >
            RESUME
          </a>
        </div>
      </div>
      <div className="w-[320px] sm:w-[370px] md:w-[465px] flex flex-wrap justify-center items-center gap-3 sm:gap-4">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex justify-center items-center bg-gray-200 hover:bg-gray-300 hover:font-bold rounded-md">
          <img
            src={html}
            alt="HTML"
            className="w-full h-full object-contain hover:scale-110 p-5 sm:p-7 md:p-9 transition duration-300 ease-in-out"
          />
          {/* <p className="absolute hidden md:block bottom-2 left-2 text-sm text-slate-800">
            HTML
          </p> */}
        </div>
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex justify-center items-center bg-gray-200 hover:bg-gray-300 hover:font-bold rounded-md">
          <img
            src={css3}
            alt="CSS"
            className="w-full h-full object-contain hover:scale-110 p-5 sm:p-7 md:p-9 transition duration-300 ease-in-out"
          />
          {/* <p className="absolute hidden md:block bottom-2 left-2 text-sm text-slate-800">
            CSS
          </p> */}
        </div>
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex justify-center items-center bg-gray-200 hover:bg-gray-300 hover:font-bold rounded-md">
          <img
            src={javascript}
            alt="JavaScript"
            className="w-full h-full object-contain hover:scale-110 p-5 sm:p-7 md:p-9 transition duration-300 ease-in-out"
          />
          {/* <p className="absolute hidden md:block bottom-2 left-2 text-sm text-slate-800">
            JavaScript
          </p> */}
        </div>
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex justify-center items-center bg-gray-200 hover:bg-gray-300 hover:font-bold rounded-md">
          <img
            src={react}
            alt="React"
            className="w-full h-full object-contain hover:scale-110 p-6 sm:p-8 md:p-10 transition duration-300 ease-in-out"
          />
          <p className="icon-name">React</p>
        </div>
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-md">
          <img
            src={tailwind}
            alt="Tailwind CSS"
            className="w-full h-full object-contain hover:scale-110 p-5 sm:p-7 md:p-9 transition duration-300 ease-in-out"
          />
          <p className="icon-name">Tailwind CSS</p>
        </div>
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex justify-center items-center bg-gray-200 hover:bg-gray-300 hover:font-bold rounded-md">
          <img
            src={figma}
            alt="Figma"
            className="w-full h-full object-contain hover:scale-110 p-7 sm:p-9 md:p-11 transition duration-300 ease-in-out"
          />
          <p className="icon-name">Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
