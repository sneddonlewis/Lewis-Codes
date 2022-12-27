import React from "react";

import './Certifications.css';
import {Container} from "reactstrap";

const Certifications = () => {
	return (
		<Container>
			<section className="resume-section" id="certifications">
				<div className="resume-section-content">
					<h2 className="alert alert-primary mb-5">Certifications</h2>
					<ul className="list-inline dev-icons">
						<li>
							<a href="https://www.credly.com/badges/61cc44a7-378c-42d6-a277-54f42d42a70e/public_url"
								 target="_blank"
								 rel="noreferrer"
							>
								<img
									className="cert-badges"
									src="https://images.credly.com/size/340x340/images/a9848abf-f8bd-474d-a9b4-6086da11a916/Oracle_Associates_Badge__1_.png"
									alt="Oracle Certified Associate Java SE 8 Programmer"
								/>
								<p>Oracle Certified Associate Java SE 8</p>
							</a>
						</li>
						<li className="list-inline-item">
							<a href="https://www.credly.com/badges/f52a729d-d239-4178-9183-9e022731d144/public_url"
								 target="_blank"
								 rel="noreferrer"
							>
								<p>Microsoft Azure Fundamentals</p>
							</a>
						</li>
					</ul>

				</div>
			</section>
		</Container>
	);
};


export default Certifications;
