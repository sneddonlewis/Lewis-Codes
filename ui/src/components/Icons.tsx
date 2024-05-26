import "./Icons.css";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";


const Icons = () => {
	return (
		<div className="wrapper">
			<a
				className="icon github"
				href="https://github.com/sneddonlewis"
				target="_blank"
				rel="noreferrer"
			>
				<div className="tooltip">Github</div>
				<span>
					<FaGithub />
				</span>
			</a>
			<a
				className="icon linkedin-in"
				href="https://www.linkedin.com/in/lsneddoncodes/"
				target="_blank"
        rel="noreferrer"
      >
        <div className="tooltip">LinkedIn</div>
        <span>
          <FaLinkedin />
        </span>
        </a>
      <a
        className="icon email"
        href="#contact"
      >
        <div className="tooltip">Get in touch</div>
        <span>
          <FaRegEnvelope />
        </span>
      </a>
    </div>
	);
};

export default Icons;
