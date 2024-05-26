import { ListGroup, ListGroupItem } from "react-bootstrap";

export const Certifications = () => {
	return (
		<div>
				<div>
					<h1>Certifications</h1>
					<ListGroup>
						<ListGroupItem
							href="https://www.credly.com/badges/61cc44a7-378c-42d6-a277-54f42d42a70e/public_url"
							target="blank">
							Oracle Certified Associate Java SE 8
						</ListGroupItem>
					</ListGroup>
					<ListGroup style={{ marginTop: "2rem" }}>
						<ListGroupItem
							href="https://www.credly.com/badges/f52a729d-d239-4178-9183-9e022731d144/public_url"
							target="blank">
							Microsoft Azure Fundamentals
						</ListGroupItem>
					</ListGroup>
				</div>
		</div>
	)
}
