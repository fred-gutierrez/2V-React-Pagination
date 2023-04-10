import { useState } from "react";
import Pagination from "../components/Pagination";
import skillsData from "../Data/skillsData.json";
import SkillsItem from "../components/SkillsItem";

export interface Skills {
  skillName: string;
  imageUrl: string;
}

export default function SkillsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [skillsPerPage, setSkillsPerPage] = useState(6);

  const lastSkillIndex = currentPage * skillsPerPage;
  const firstSkillIndex = lastSkillIndex - skillsPerPage;
  const currentSkills = skillsData.slice(firstSkillIndex, lastSkillIndex);

  return (
    <>
      <h1>Skills Page</h1>
      <SkillsItem skillsData={currentSkills} />
      <Pagination
        totalSkills={skillsData.length}
        skillsPerPage={skillsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
