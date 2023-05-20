import { FaGithub, FaRocket } from 'react-icons/fa';
import { Button } from "reactstrap";
import logos from "../../common/techLogos";
import { ProjectProps } from '../../Typings/Project';

function Project(props: ProjectProps) {
	const { title, techStack, description, launchable, launchUrl, codeUrl } = props
	return (
		<div className="card" style={{ width: "20rem", margin: "10px" }}>
			<div className="card-header">
				<h3>{title}</h3>
			</div>
			<div className="card-body">
				<ul className="d-flex flex-row-reverse" style={{listStyle: "none"}}>
					{techStack.map((i) => {
						let image;
						switch (i) {
							case "kotlin":
								image = <img src={logos["kotlin"]} alt="Kotlin logo" />;
								break;
							case "js":
								image = <img src={logos["js"]} alt="JavaScript logo" />;
								break;
							case "ts":
								image = <img src={logos["typeScript"]} alt="TypeScript logo" />;
								break;
							case "java":
								image = <img src={logos["java"]} alt="Java logo" />;
								break;
							case "android":
								image = <img src={logos["android"]} alt="Android logo" />;
								break;
							case "react":
								image = <img src={logos["react"]} alt="ReactJS logo" />;
								break;
							case "node":
								image = <img src={logos["node"]} alt="NodeJS logo" />;
								break;
							case "angular":
								image = <img src={logos["angular"]} alt="AngularJS logo" />;
								break;
							case "spring":
								image = <img src={logos["spring"]} alt="Spring logo" />;
								break;
							case "postgresql":
								image = <img src={logos["postgresql"]} alt="PostgreSQL logo" />;
								break;
							case "aws":
								image = <img src={logos["aws"]} alt="Amazon Web Services logo" />;
								break;
							case "go":
								image = <img src={logos["go"]} alt="Go logo" />;
								break;
							case "rust":
								image = <img src={logos["rust"]} alt="Rust logo" />;
								break;
							case "cpp":
								image = <img src={logos["cpp"]} alt="C++ logo" />;
								break;
							default:
								image = null;
						}
						return <li key={i} style={{ margin: "5px" }}>{image}</li>;
					})}
				</ul>
				<p className="text-start">{description}</p>
			</div>
			<div className='card-footer'>
				<div className="text-end">
					{launchable && (
						<a href={launchUrl} target="_blank" rel="noreferrer">
							<Button
								className="ms-1"
								outline
								color="dark"
								size="sm"
							>
								<FaRocket /> Demo
							</Button>
						</a>
					)}
					<a href={codeUrl} target="_blank" rel="noreferrer">
						<Button
							className="ms-1"
							outline
							color="dark"
							size="sm"
						>
							<FaGithub /> Code
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Project;
