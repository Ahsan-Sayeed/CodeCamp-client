import React, { useContext, useState } from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import {Link, useNavigate} from 'react-router-dom';
import { UserContext } from "../../Context/Context";

function Registration() {
  const [emailErr,setEmailErr] = useState('We\'ll never share your email with anyone else.');
  const [passErr,setPassErr] = useState();

  const [show, setShow] = useState(false);
  const [checked,setChecked] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setChecked(e.target.checked);
    setShow(true);
  }


  const {signUp,getPhotoAndName,verify} = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const obj = {
      displayName:form.fullName.value,
      photoURL:form.photoUrl.value
    }

    signUp(form.email.value,form.password.value)
    .then(user=>{
      //getting photos and display name
      getPhotoAndName(obj)
      .then(()=>{
        //email verification
        verify().
        then(()=>{
          alert('Check email and verify');
          navigate('/login');
        }).catch(err=>{
          console.log(err);
        });
        //
      })
      .catch(err=>{
        console.log(err);
      })
    })
    .catch(err=>{
      if(err.message === "Firebase: Error (auth/invalid-email)."){
        setEmailErr("Invalid Email");
      }
      else if(err.message === "Firebase: Error (auth/email-already-in-use)."){
        setEmailErr("Account already exist");
      }
      else if(err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
        setPassErr("Password must be at least 5 character");
      }
      else{
        setEmailErr("Something went wrong")
      }
    })

    form.reset();

  };


  return (
    <Container fluid className="p-3 my-5">
      <Row>
        <Col xs={"10"} md={"6"}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </Col>

        <Col col="4" md="6">
            <h1 className="mb-5">Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Full Name.." name="fullName" required />
              <Form.Text className="text-muted d-flex">
                Provide your full name/nick name.
              </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Photo URL.." name="photoUrl" required />
              <Form.Text className="text-muted d-flex">
                Share us your photo link, It'll be displayed on your profile.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" name="email" required />
              <Form.Text className="text-muted d-flex">
                {emailErr}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" name="password" required/>
              <Form.Text className="text-muted d-flex">
                {passErr}
              </Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-between mb-4">
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  label="I agree to the Terms of Service and Privacy Policy."
                  onChange={handleShow}
                />
              </Form.Group>
             
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <Button type="submit" disabled={!checked}>Create Your Account</Button>

              <p className="small fw-bold mt-2 pt-1 mb-2">
              Already have an account? 
                <Link to="/login" className="link-danger">
                Sign in
                </Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}

export default Registration;
