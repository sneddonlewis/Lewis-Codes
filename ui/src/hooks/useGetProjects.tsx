import { useState } from "react";
import { ProjectDetail } from "../types/ProjectTypes";
import { projectData } from "../data/ProjectsData";

export const useGetProjects = () => {
  const [projects, setProjects] = useState<ProjectDetail[]>([])

  const getProjects = () => {
    setProjects(projectData)
  }

  return { projects, getProjects }
}
