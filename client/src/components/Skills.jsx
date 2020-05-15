import React from 'react';

const Skills = ({ skills }) => (
  <div className="skills">
    {skills.map((skill, index) => {
      const { category, technologies } = skill;
      return (
        <div key={index}>
          <span style={{ fontWeight: 400 }}>{category}:&nbsp;</span>
          {technologies.join(" | ")}
        </div>
      );
    })}
  </div>
);

export default Skills;
