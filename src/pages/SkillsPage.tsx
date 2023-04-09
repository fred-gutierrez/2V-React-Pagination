import { useState } from "react";
import Pagination from "../components/Pagination";
import skills from "../Data/skills.json";
import SkillsItem from "../components/SkillsItem";

export default function SkillsPage() {
  return (
    <>
      <h1>Skills Page</h1>
      <SkillsItem skills={skills} />
      <Pagination />
    </>
  );
}
