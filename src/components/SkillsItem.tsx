import React from "react";

interface Props {
  skills: any[];
}

export default function SkillsItem(props: Props) {
  return (
    <div className="skills-container">
      {props.skills.map((skill) => (
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
