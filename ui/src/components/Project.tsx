import { FaGithub, FaRocket } from 'react-icons/fa';
import { ProjectDetail } from '../types/ProjectTypes';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText } from 'react-bootstrap';
import { TechStack } from './TechLogoListItem';


function Project(props: ProjectDetail) {
  const { title, techStack, description, launchUrl, codeUrl } = props

  return (
    <div style={{ marginTop: '2rem' }} >
      <Card>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4>{title}</h4>
            <TechStack techList={techStack} />
          </div>
        </CardHeader>
        <CardBody>
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
