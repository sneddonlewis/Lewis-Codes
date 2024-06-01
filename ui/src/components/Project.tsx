import { FaGithub, FaRocket } from 'react-icons/fa';
import { ProjectDetail } from '../types/ProjectTypes';
import { TechLogoList } from './TechLogoListItem';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'react-bootstrap';


function Project(props: ProjectDetail) {
  const { title, techStack, description, launchUrl, codeUrl } = props

  return (
    <div style={{ marginTop: '2rem' }} >
      <Card>
        <CardHeader>
          <CardTitle>
            {title}
          </CardTitle>
        </CardHeader>
        <CardBody>
          <TechLogoList techList={techStack} />
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
    </div>
  );
}

export default Project;
