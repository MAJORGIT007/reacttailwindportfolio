import React from "react";
import me from "../assets/photoOfMe.jpg";

const About = () => {
  return (
    <div
      id="aboutme"
      className="h-screen mx-8 flex flex-col justify-center items-center gap-3 lg:gap-8"
    >
      <h1>About Me</h1>
      <div className="flex flex-col lg:flex-row max-w-[967px] justify-center items-center lg:gap-8">
        <img
          src={me}
          alt="Picture of me"
          className="w-full h-[200px] lg:w-[300px] lg:h-[440px] object-cover rounded-md"
        />
        <div className="max-w-[640px] pt-5 lg:p-0 flex flex-col gap-2 lg:gap-4">
          <p className="paragraph ">
            My name is Lee Jun Kuan, a recent university graduate. During my
            time in university, I discovered my passion for Frontend Web
            Development while working on my final year project. I started my
            journey watching YouTube tutorials on CSS and from there enrolled
            into online courses, learning essential skills like{" "}
            <span className="text-white font-bold">HTML</span>,{" "}
            <span className="text-white font-bold">CSS</span>,{" "}
            <span className="text-white font-bold">JavaScript(ES6)</span> and{" "}
            <span className="text-white font-bold">React</span>. Since then, I
            have continued to hone my skills and expand my knowledge of web
            development, particularly in the areas of React and{" "}
            <span className="text-white font-bold">TailwindCSS</span>.
            Throughout my learning journey, I realized the importance of good UI
            Design and how it compliments a developer's work.
          </p>
          <p className="paragraph ">
            Apart from coding, I have an interest in building gaming PCs and
            help my friends and family build theirs during my spare time. I am
            also an avid fish enthusiast and enjoy the fish keep hobby.
          </p>
          <p className="paragraph ">
            Thank you for taking your time to look through my website, if you
            would like to connect, you may wish to do so via{" "}
            <a
              href="https://www.linkedin.com/in/jun-kuan-lee-8716691aa/"
              target="_blank"
              className="linkedin-color font-bold"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
