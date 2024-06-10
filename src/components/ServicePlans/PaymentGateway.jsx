import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import UserNavbar from '../UserNavbar';

const PaymentGateway = () => {
  const plans = [
    { id: 1, name: 'Basic Business', description: 'Basic Business Profile', amount: 'FREE' },
    { id: 2, name: 'Premium', description: 'Premium Business Profile', amount: '$50' },
    { id: 3, name: 'Pro', description: 'Pro Business Profile', amount: '$100' },
  ];
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a payment process delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div>
      <UserNavbar /><br />
      <Container>
        <Row>
          <Col>
            <h2>Select a Business Plan</h2>
            <div className="row g-3">
              {plans.map((plan) => (
                <div key={plan.id} className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                  <Card>
                    <Card.Body>
                      <Card.Title><center>{plan.name}</center></Card.Title>
                      <Card.Text><center>{plan.amount}</center></Card.Text>
                      <Card.Text><center>{plan.description}</center></Card.Text>
                      <Button variant="primary" onClick={() => handlePlanSelect(plan)}>Choose this Plan</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            {selectedPlan && (
              <div className="row mt-4">
                <div className="col-12">
                  <h3>Complete your payment for {selectedPlan.name}</h3>
                  <Form onSubmit={handlePaymentSubmit}>
                    <Form.Group className="mb-3" controlId="cardNumber">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter card number"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="expiryDate">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="MM/YY"
                        name="expiryDate"
                        value={paymentInfo.expiryDate}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cvv">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="CVV"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={loading}>
                      {loading ? 'Processing...' : 'Pay Now'}
                    </Button>
                  </Form>
                  {success && <p className="mt-3 text-success">Payment Successful!</p>}
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentGateway;
