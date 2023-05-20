import React, {useState} from "react";
import SendEmail from "../../modal/SendEmail";
import {NavItem, NavLink} from "reactstrap";


function NavBar() {
	const [showModal, setShowModal] = useState(false );

	function toggleModal() {
		setShowModal(!showModal );
	}
	return (
		<nav className="navbar bg-dark navbar-dark navbar-expand-lg" id="sideNav">
			<a className="navbar-brand ps-5 mr-auto" href="/">
        		Lewis Sneddon
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
					<NavItem>
						<NavLink href="/projects">
							Projects
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/certifications">
							Certifications
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink onClick={toggleModal} href="#">
							Contact
						</NavLink>
					</NavItem>
				</ul>
			</div>
			<SendEmail showModal={showModal} toggleModal={toggleModal}/>
		</nav>
	);
}

export default NavBar;
