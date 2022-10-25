import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";

function Registration() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container fluid className="p-3 my-5">
      <Row>
        <Col xs={"10"} md={"6"}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </Col>

        <Col col="4" md="6">
            <h1 className="mb-5">Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Full Name.." required />
              <Form.Text className="text-muted d-flex">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Photo URL.." required />
              <Form.Text className="text-muted d-flex">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted d-flex">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted d-flex">
                Wrong password
              </Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-between mb-4">
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  label="I agree to the Terms of Service and Privacy Policy."
                />
              </Form.Group>
             
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <Button type="submit">Create Your Account</Button>

              <p className="small fw-bold mt-2 pt-1 mb-2">
              Already have an account? 
                <a href="#!" className="link-danger">
                Sign in
                </a>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration;
