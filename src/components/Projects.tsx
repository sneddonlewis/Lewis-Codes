import { projects } from "../data/ProjectsData";
import Project from './Project';

function Projects() {
	// const [allProjects, setAllProjects] = useState(projects);
	// const allTech = Array.from(new Set(allProjects.map(proj => proj.techStack).flat(2)));

	// const actionsTechSelect = (tech: string) => {
	// 	setAllProjects([...allProjects].sort((curr, next) => curr.techStack.includes(tech) ? -1 : 1));
	// };
	return (
		<>
			<h1>Projects</h1>
			{/* <SortSelector techs={allTech} actionsOn={actionsTechSelect}></SortSelector> */}
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
	);
}

export default Projects;
