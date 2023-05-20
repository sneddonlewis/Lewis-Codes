import React from "react";

import './Certifications.css';
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";

const Certifications = () => {
	return (
		<Container>
			<section className="resume-section" id="certifications">
				<div className="resume-section-content">
					<h1 style={{ margin: "1em", }}>Certifications</h1>
					<ListGroup>
						<ListGroupItemHeading>
							Language
						</ListGroupItemHeading>
						<ListGroupItem
							href="https://www.credly.com/badges/61cc44a7-378c-42d6-a277-54f42d42a70e/public_url"
							tag="a"
							target="blank">
							Oracle Certified Associate Java SE 8
						</ListGroupItem>
					</ListGroup>
					<ListGroup style={{ marginTop: "2rem" }}>
						<ListGroupItemHeading>
							Cloud
						</ListGroupItemHeading>
						<ListGroupItem
							href="https://www.credly.com/badges/f52a729d-d239-4178-9183-9e022731d144/public_url"
							tag="a"
							target="blank">
							Microsoft Azure Fundamentals
						</ListGroupItem>
					</ListGroup>
				</div>
			</section>
		</Container>
	);
};


export default Certifications;
