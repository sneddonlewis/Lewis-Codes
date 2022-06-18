import logos from "../../common/techLogos";
import {Container} from "reactstrap";

function Skills() {
	return (
		<Container>
			<h1 className="alert alert-primary">Skills</h1>
			<h3 className="m-5">Technologies</h3>
			<ul className="list-inline m-5">
				<li className="list-inline-item">
					{/* csharp */}
					<img src={logos["csharp"]} alt="C# logo" />
				</li>
				<li className="list-inline-item">
					{/* Java */}
					<img src={logos["java"]} alt="Java logo" />
				</li>
				<li className="list-inline-item">
					{/* Kotlin */}
					<img src={logos["kotlin"]} alt="Kotlin logo" />
				</li>
				<li className="list-inline-item">
					{/* JavaScript */}
					<img src={logos["js"]} alt="JavaScript logo" />
				</li>
				<li className="list-inline-item">
					{/* TypeScript */}
					<img src={logos["typeScript"]} alt="TypeScript logo" />
				</li>
				<li className="list-inline-item">
					{/* Spring */}
					<img src={logos["spring"]} alt="Spring logo" />
				</li>
				<li className="list-inline-item">
					{/* Android */}
					<img src={logos["android"]} alt="Android logo" />
				</li>
				<li className="list-inline-item">
					{/* React */}
					<img src={logos["react"]} alt="React logo" />
				</li>
				<li className="list-inline-item">
					{/* AngularJS */}
					<img src={logos["angular"]} alt="AngularJS logo" />
				</li>
				<li className="list-inline-item">
					{/* Node */}
					<img src={logos["node"]} alt="Node logo" />
				</li>
				<li className="list-inline-item">
					{/* Azure */}
					<img src={logos["azure"]} alt="Azure logo" />
				</li>
				<li className="list-inline-item">
					{/* aws */}
					<img src={logos["aws"]} alt="aws logo" />
				</li>
				<li className="list-inline-item">
					{/* Git */}
					<img src={logos["git"]} alt="Git logo" />
				</li>
			</ul>

			<p className="subheading mb-3">See my <a target="_blank" rel="noreferrer" href="https://app.pluralsight.com/profile/lewis-sneddon">Pluralsight</a>  Skill IQ scores</p>

		</Container>
	);
}

export default Skills;
