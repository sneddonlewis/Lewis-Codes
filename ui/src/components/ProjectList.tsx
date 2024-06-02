import React, { useEffect } from 'react';
import { useGetProjects } from '../hooks/useGetProjects';
import { Project } from './Project';

export const ProjectList: React.FC = () => {
  const { projects, getProjects } = useGetProjects()

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <>
    <h2>Projects</h2>
      <div>
        {projects.map((i) => {
          return (
            <Project
              title={i.title}
              description={i.description}
              codeUrl={i.codeUrl}
              launchUrl={i.launchUrl} 
              techStack={i.techStack}
              key={i.title}
            />
          );
        })}
      </div>
    </>
  )
}
