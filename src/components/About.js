import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">About I-Note</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Welcome to I-Note</Card.Title>
              <Card.Text>
                I-Note is a modern note-taking application designed to help you organize your thoughts, tasks, and ideas in one place. 
                With I-Note, you can create, edit, and manage your notes effortlessly, ensuring that you never miss a beat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Features</Card.Title>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Effortless Note Management</li>
                <li className="list-group-item">Real-Time Syncing</li>
                <li className="list-group-item">Secure Storage</li>
                <li className="list-group-item">Customizable Themes</li>
                <li className="list-group-item">Accessibility Features</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">Ideal for Everyone</Card.Title>
              <Card.Text>
                I-Note is perfect for students, professionals, and anyone in need of a reliable note-taking solution. 
                Whether you're in the classroom, the boardroom, or on the go, I-Note has you covered.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
