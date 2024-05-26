import { projects } from "../data/ProjectsData";
import Project from './Project';

export const ProjectList = () => {
  return (
    <>
    <h1>Projects</h1>
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
