import React from 'react';

const NavBar = () => {
	return (
		<nav className="navbar bg-dark navbar-dark navbar-expand-lg" id="sideNav">
			<a className="navbar-brand p-3 mr-auto" href="/">
        		Lewis Codes
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="/projects">
							Projects
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="/certifications">
							Certifications
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="/skills">
							Skills
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
