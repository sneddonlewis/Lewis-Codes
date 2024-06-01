import { useState } from "react";
import { ProjectDetail } from "../types/ProjectTypes";

export const useGetProjects = () => {
  const dataUri = 'https://sneddsy-project-data.s3.eu-west-2.amazonaws.com/projects.json'
  const [projects, setProjects] = useState<ProjectDetail[]>([])

  const getProjects = () => {
    fetch(dataUri, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(setProjects)
  }

  return { projects, getProjects }
}
