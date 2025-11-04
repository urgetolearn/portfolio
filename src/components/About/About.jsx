import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/image.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-16 px-4 md:px-8 lg:px-16 font-sans flex items-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Chinmayi D S
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Open Source Contributor",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            Hey, I’m Chinmayi D S, a final-year student at NIT Karnataka,
            passionate about building meaningful tech that bridges innovation
            and impact. I’m a Google Summer of Code (GSoC) 2025 contributor with
            Drupal and a Linux Foundation mentee (LFX) 2024, where I worked on
            Hyperledger Fabric to simplify chaincode debugging. I also interned
            at Apollo as a Tech Analyst, gaining experience in solving business
            problems through data and automation. I’m deeply interested in web
            development, blockchain, and AI/ML, and I enjoy creating tools that
            make complex systems more accessible. Beyond code, I’m a speaker at
            Girls Leading Tech and enjoy sharing insights about open source and
            career growth. I also love organizing college fests and contributing
            to communities that promote mentorship and innovation.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}>
            <img
              src={profileImage}
              alt="Chinmayi D S"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
