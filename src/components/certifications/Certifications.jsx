import React from "react";

const Certifications = () => {
	return (
		<section className="resume-section" id="certifications">
			<div className="resume-section-content">
				<h2 className="alert alert-primary mb-5">Certifications</h2>
				<ul className="list-inline dev-icons">
					<li className="list-inline-item">
						<a href="https://www.credly.com/badges/f52a729d-d239-4178-9183-9e022731d144/public_url"
						   target="_blank"
						   rel="noreferrer"
						>
							<img
								className="cert-badges"
								src="/microsoft-certified-azure-fundamentals.png"
								alt="Microsoft Azure Fundamentals"
								style={{
									"max-width": "150px"
								}}
							/>
						</a>
					</li>
				</ul>

			</div>
		</section>
	);
};


export default Certifications;
