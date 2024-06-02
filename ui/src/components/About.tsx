import React from 'react';
import { Certifications } from "./Certifications";
import { Icons } from "./Icons";

const textStyle: React.CSSProperties = {
  margin: '2rem',
  fontSize: '18px',
}

export const About: React.FC = () => (
  <div>
    <h1>Lewis Sneddon</h1>
    <Icons />
    <div style={textStyle}>
      <p>Welcome to my site, I'm Lewis and I'm a full stack developer.</p>
      <p>I love building software, jump straight to <a href="#projects">Projects</a> to see some of the things I've been working on.</p>
    </div>
    <Certifications />
  </div>
)
