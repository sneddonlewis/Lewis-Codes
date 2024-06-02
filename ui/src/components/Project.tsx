import { FaGithub, FaRocket } from 'react-icons/fa';
import { ProjectDetail } from '../types';
import { Button } from 'react-bootstrap';
import { TechStack } from './TechLogoListItem';
import React from 'react';

const panelBoxShadow = '0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)'

const projectContainerStyle: React.CSSProperties = {
  margin: '2rem',
  borderRadius: '10px',
  backgroundColor: 'var(--bs-body-bg)',
  boxShadow: panelBoxShadow,
}

const projectHeaderStyle: React.CSSProperties = {
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const projectFooterStyle: React.CSSProperties = {
  padding: '1rem',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}

const projectBodyStyle: React.CSSProperties = {
  padding: '1rem',
}


export const Project: React.FC<ProjectDetail> = ({ title, techStack, description, launchUrl, codeUrl }) => (
  <div style={projectContainerStyle} >
    <div style={projectHeaderStyle}>
      <h4>{title}</h4>
      <TechStack techList={techStack} />
    </div>

    <div style={projectBodyStyle} >
      <p>{description}</p>
    </div>

    <div style={projectFooterStyle}>
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
    </div>
  </div>
)
