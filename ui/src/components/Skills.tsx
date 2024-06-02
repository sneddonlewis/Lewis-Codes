import React from "react";
import { TechLogoList } from "./TechLogoListItem";

const pluralsightSkillsPage = "https://app.pluralsight.com/profile/lewis-sneddon";

const pluralsightLinkStyle: React.CSSProperties = {
  marginBottom: '2rem',
  marginLeft: '2rem',
}

export const Skills: React.FC = () => (
  <div>
    <h2>Skills</h2>

    <div style={pluralsightLinkStyle}>
      <small>Verified skills from <a
        target="_blank" 
        rel="noreferrer" 
        href={pluralsightSkillsPage}
      >Pluralsight</a>
      </small>
    </div>

    <h3>Frontend</h3>
    <TechLogoList techList={[
      'ts',
      'js',
      'react',
      'angular',
    ]} />

    <h3>Backend</h3>
    <TechLogoList techList={[
      'csharp',
      'cpp',
      'java',
      'go',
      'rust',
    ]} />

    <h3>Cloud</h3>
    <TechLogoList techList={[
      'azure',
      'aws',
    ]} />

    <h3>Database</h3>
    <TechLogoList techList={[
      'postgresql'
    ]} />
  </div>
)
