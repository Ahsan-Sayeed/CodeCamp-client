import React, { useContext, useState } from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { UserContext } from "../../Context/Context";

function Login() {
  const [error,setError] = useState('');
  const {loginByEmailAndPassword,loginWithGoogle,loginWithGithub} = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const To = location?.state?.from||'/';

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        loginByEmailAndPassword(form.email.value,form.password.value)
        .then(({user})=>{
          if(user.emailVerified){
            navigate(To,{replace:true});
          }
          else{
            alert('Please verify your email address');
          }
        })
        .catch(err=>{
          if(err.message === 'Firebase: Error (auth/user-not-found).'){
            setError("User not found");
          }
          else if(err.message === 'Firebase: Error (auth/wrong-password).'){
            setError('Wrong password');
          }else{
            setError("Something went wrong");
          }
        })
    }

    const handleGoogleLogin = () =>{
      loginWithGoogle()
      .then(({user})=>{
        if(user&&user.uid){
          navigate(To,{replace:true});
        }
      })
      .catch(err=>{
        console.log(err.message);
      })
    }

    const handleGitHubLogin = () =>{
      loginWithGithub()
      .then(({user})=>{
        if(user&&user.uid){
          navigate(To,{replace:true});
        }
      })
      .catch(err=>{
        console.log(err.message);
      })
    }

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
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <Button
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ height: "40px", width: "40px" }}
              onClick={handleGoogleLogin}
            >
              <BsGoogle size={"14px"} />
            </Button>

            <Button
              className="rounded-circle d-flex align-items-center justify-content-center mx-2"
              style={{ height: "40px", width: "40px" }}
              onClick={handleGitHubLogin}
            >
              <BsGithub size={"14px"} />
            </Button>
          </div>

          <Row className="mt-5 mb-4">
            <Col>
              <hr />
            </Col>
            <Col xs="auto">OR</Col>
            <Col>
              <hr />
            </Col>
          </Row>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" name="email" required />
              <Form.Text className="text-muted d-flex">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" name="password" required/>
              <Form.Text className="text-muted d-flex">
                Wrong password
              </Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-between mb-4">
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  label="Remember me"
                />
              </Form.Group>
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <Button type="submit">Login</Button>

              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <Link to="/register" className="link-danger">
                  Register
                </Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
