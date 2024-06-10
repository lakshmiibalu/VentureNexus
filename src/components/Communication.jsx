import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import Peer from 'simple-peer';
import UserNavbar from './UserNavbar';

const Communication = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [stream, setStream] = useState(null);
  const videoRef = useRef();

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  const handleVideoCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(stream);
      videoRef.current.srcObject = stream;

      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream,
      });

      peer.on('signal', (data) => {
        console.log(data);
      });

      peer.on('stream', (stream) => {
        videoRef.current.srcObject = stream;
      });
    } catch (error) {
      console.error('Error accessing media devices.', error);
    }
  };

  return (
    <div>
      <UserNavbar/>
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Secure Messaging System</h2>
          <ListGroup>
            {messages.map((msg, index) => (
              <ListGroup.Item key={index}><strong>{msg.sender}:</strong> {msg.text}</ListGroup.Item>
            ))}
          </ListGroup>
          <Form className="mt-3">
            <Form.Group controlId="message">
              <Form.Control
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={sendMessage} className="mt-2">Send</Button>
          </Form>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>Video Call</h2>
          <Button variant="success" onClick={handleVideoCall}>Start Video Call</Button>
          <video ref={videoRef} autoPlay className="mt-3 w-100" style={{ height: '400px' }}></video>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Communication;
