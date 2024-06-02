import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const certContainerStyle: React.CSSProperties = {
  marginTop: 'rem',
}

export const Certifications: React.FC = () => (
  <div style={certContainerStyle}>
    <span className="h5">Certifications</span>
    <ListGroup style={{ marginTop: "1rem" }}>
      <ListGroupItem
        action
        href="https://www.credly.com/badges/61cc44a7-378c-42d6-a277-54f42d42a70e/public_url"
        eventKey="java"
      >
        Oracle Certified Associate Java SE 8
      </ListGroupItem>
      <ListGroupItem
        action 
        href="https://www.credly.com/badges/f52a729d-d239-4178-9183-9e022731d144/public_url"
        eventKey="azure" 
      >
        Microsoft Azure Fundamentals
      </ListGroupItem>
    </ListGroup>
  </div>
)
