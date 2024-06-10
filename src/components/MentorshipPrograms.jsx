import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import UserNavbar from './UserNavbar';

const mentors = [
  { id: 1, name: 'John Doe', expertise: 'Marketing', description: 'Expert in digital marketing and growth strategies.', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Smith', expertise: 'Finance', description: 'Experienced in financial planning and investment strategies.', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Michael Brown', expertise: 'Technology', description: 'Specialist in software development and tech startups.', image: 'https://via.placeholder.com/150' },
];

const MentorshipPrograms = () => {
  const [show, setShow] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (mentor) => {
    setSelectedMentor(mentor);
    setShow(true);
  };

  return (
    <div>
    <UserNavbar/>
    <Container className="my-4">
      <Row>
        <Col>
          <h2>Mentorship Programs</h2>
          <p>Experienced business leaders and investors providing guidance and support for startups and SMEs.</p>
        </Col>
      </Row>
      <Row>
        {mentors.map((mentor) => (
          <Col key={mentor.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src='' />
              <Card.Body>
                <Card.Title>{mentor.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{mentor.expertise}</Card.Subtitle>
                <Card.Text>{mentor.description}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(mentor)}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedMentor && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMentor.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Expertise:</strong> {selectedMentor.expertise}</p>
            <p>{selectedMentor.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary">Connect with Mentor</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
    </div>
  );
};

export default MentorshipPrograms;
