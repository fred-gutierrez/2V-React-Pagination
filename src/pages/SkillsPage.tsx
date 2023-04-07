import { useState } from "react";
import Pagination from "../components/Pagination";
import skills from "../Data/skills.json";
import SkillsItem from "../components/SkillsItem";

export interface Skills {
  skillName: string;
  imageUrl: string;
}

export default function SkillsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [skillsPerPage, setSkillsPerPage] = useState(6);

  const lastPostIndex = currentPage * skillsPerPage;
  const firstPostIndex = lastPostIndex - skillsPerPage;
  const currentSkills = skills.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <h1>Skills Page</h1>
      <SkillsItem skills={currentSkills} />
      <Pagination
        totalSkills={skills.length}
        skillsPerPage={skillsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
