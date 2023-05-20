import logos from "../../common/techLogos";
import { Container } from "reactstrap";

function Skills() {
	return (
		<Container style={{ marginTop: "3rem" }}>
			<h5>Some programming languages I know well</h5>
			<ul>
				<li className="list-inline-item">
					{/* csharp */}
					<img src={logos["csharp"]} alt="C# logo" />
				</li>
				<li className="list-inline-item">
					{/* Java */}
					<img src={logos["java"]} alt="Java logo" />
				</li>
				<li className="list-inline-item">
					<img src={logos["rust"]} alt="Rust logo" />
				</li>
				<li className="list-inline-item">
					<img src={logos["go"]} alt="Go logo" />
				</li>
				<li className="list-inline-item">
					<img src={logos["typeScript"]} alt="TypeScript logo" />
				</li>
			</ul>
			<h5>Frameworks I have experience using</h5>
			<ul>
				<li className="list-inline-item">
					<img src={logos["spring"]} alt="Spring logo" />
				</li>
				<li className="list-inline-item">
					<img src={logos["react"]} alt="React logo" />
				</li>
				<li className="list-inline-item">
					<img src={logos["angular"]} alt="AngularJS logo" />
				</li>
			</ul>
			<h5>Cloud providers whose services I use</h5>
			<ul>
				<li className="list-inline-item">
					<img src={logos["azure"]} alt="Azure logo" />
				</li>
				<li className="list-inline-item">
					<img src={logos["aws"]} alt="aws logo" />
				</li>
			</ul>
			<h5>Verify my skills by reviewing my scores on <a  target="_blank" rel="noreferrer" href="https://app.pluralsight.com/profile/lewis-sneddon">Pluralsight</a></h5>
			<h5>See what I've been learning on <a target="_blank" rel="noreferrer" href="https://frontendmasters.com/u/lsneddon/">Frontend Masters</a></h5>
		</Container>
	);
}

export default Skills;
