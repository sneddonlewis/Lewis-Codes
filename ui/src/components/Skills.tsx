import React from "react";
import { TechLogoList } from "./TechLogoListItem";

export const Skills: React.FC = () => {
  const pluralsightSkillsPage = "https://app.pluralsight.com/profile/lewis-sneddon";
  const pluralsightLinkStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '5rem',
  }
  return (
    <div>
      <p className="h6">Frontend</p>
      <TechLogoList techList={[
        'ts',
        'js',
        'react',
        'angular',
      ]} />

      <p className="h6">Backend</p>
      <TechLogoList techList={[
        'csharp',
        'cpp',
        'java',
        'go',
        'rust',
      ]} />

      <p className="h6">Cloud</p>
      <TechLogoList techList={[
        'azure',
        'aws',
      ]} />

      <p className="h6">Database</p>
      <TechLogoList techList={[
        'postgresql'
      ]} />
      <div style={pluralsightLinkStyle}>
        <p className="h6">Verified skills from <a
          target="_blank" 
          rel="noreferrer" 
          href={pluralsightSkillsPage}
        >Pluralsight</a>
        </p>
      </div>
    </div>
    );
}
