import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="w-full py-24 px-4 md:px-8 lg:px-16 font-sans bg-skills-gradient">
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          className="w-full">
          <div className="h-full flex flex-col justify-between bg-gray-900 backdrop-blur-md px-6 sm:px-8 py-8 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.02]">
            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center space-y-1 bg-transparent border border-gray-700 rounded-xl py-3 px-2 w-full hover:border-[#8245ec] transition-all">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
