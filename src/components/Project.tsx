import { FaGithub, FaRocket } from 'react-icons/fa';
import logos from "../common/techLogos";
import { ProjectDetail } from '../types/ProjectTypes';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'react-bootstrap';

function Project(props: ProjectDetail) {
  const { title, techStack, description, launchUrl, codeUrl } = props

  const techLogos = techStack.map((i) => {
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
              return <li key={i} style={{ margin: "5px", display: 'inline' }}>{image}</li>
  })

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            {title}
          </CardTitle>
        </CardHeader>
        <CardBody>
          <ul style={{ listStyleType: 'none' }}>
          {techLogos}
          </ul>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          {launchUrl && (
            <a href={launchUrl} target="_blank" rel="noreferrer">
              <Button variant='dark'>
                <FaRocket /> Demo
              </Button>
            </a>
          )}

          <a href={codeUrl} target="_blank" rel="noreferrer">
            <Button variant='dark'>
              <FaGithub /> Code
            </Button>

          </a>
        </CardFooter>
      </Card>
    </>
  );
}

export default Project;
