import React from 'react';
import { Certifications } from "./Certifications";
import Icons from "./Icons";

export const About: React.FC = () => {
	return (
		<>
      <div>
				<h2>Lewis Sneddon</h2>
        <Icons />
				<p className="mt-3">Welcome to my site, I'm Lewis and I'm a full stack developer.</p>
        <p>I love building software, jump straight to <a href="#projects">Projects</a> to see some of the things I've been working on.</p>
        <Certifications />
			</div>
		</>
	)
}
