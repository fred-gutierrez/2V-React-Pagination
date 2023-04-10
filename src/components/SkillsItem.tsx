import React from "react";

interface Props {
  skillsData: any[];
}

export default function SkillsItem(props: Props) {
  return (
    <div className="skills-container">
      {props.skillsData.map((skill) => (
        <article className="skills-article">
          <img
            className="skills-img"
            src={skill.imageUrl}
            alt={`${skill.skillName} image`}
          />
          <p>{skill.skillName}</p>
        </article>
      ))}
    </div>
  );
}
