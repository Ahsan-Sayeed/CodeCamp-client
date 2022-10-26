import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { GiQueenCrown } from "react-icons/gi";
import Button from "react-bootstrap/esm/Button";

const CourseDetails = () => {
  const location = useLocation();
  const { name, photo, details } = location.state;
  const navigate = useNavigate();

  const handleCheckOut = (id) =>{
    navigate(`/checkout/${id}`,{replace:true});
  }

  if (location.state === null) {
    return <Navigate to="/courses" />;
  } else {
    return (
      <div style={{overflow:'hidden'}}>
        <Row>
          <Col xs="2" className="mx-5 my-5">
            <h5 style={{wordWrap:'nowrap'}}>On this page</h5>
            <hr />
            <div>
              <a>Introduction</a>
              <br />
              <a>{details[2].purposeQuestion}</a>
              <br />
              <a>{details[4].application}</a>
              <br />
              <a>{details[5].application}</a>
              <a>{details[6].title}</a>
            </div>
          </Col>
          <Col>
                <Container>
            <Row className="border-bottom p-3 mb-5 mt-3">
              <Col xs="11" id="intro">
                <h1>{name}</h1>
                <p>{details[0].Introduce}</p>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <button className="border-0 bg-transparent">
                  <BsDownload size="20px" />
                </button>
              </Col>
            </Row>
            <div className="d-flex justify-content-center align-items-center p-5">
              <img src={photo} />
            </div>
            <div>
              <p>{details[1].shortDetails}</p>
            </div>
            <div id="purpose">
              <h3>{details[2].purposeQuestion}</h3>
              <p>{details[2].purpose}</p>
              <div>
                <ul>
                  {details[3].pointsOfLearning.map((value, idx) => {
                    return (
                      <li key={idx}>
                        <b>{value.title}</b> {value.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div id="application1">
                <h3>{details[4].application}</h3>
                <p>{details[4].info}</p>
                <ul>
                  {details[4].points.map((value, idx) => {
                    return (
                      <li key={idx}>
                        <b>{value.title}</b> {value.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div id="application2">
                <h3>{details[5].application}</h3>
                <p>{details[5].info}</p>
              </div>
              <div id="prerequisites">
                <h3>{details[6].title}</h3>
                <p>{details[6].text.split("−")[0]}</p>
                <ul>
                  {details[6].text
                    .split("−")[1]
                    .split("#")
                    .map((value, idx) =>
                      idx !== 0 ? <li key={idx}>{value}</li> : ""
                    )}
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Button className="my-5 w-100 py-3" onClick={()=>handleCheckOut(details[7]._id)}>
                <GiQueenCrown /> Get premium access
              </Button>
            </div>
          </Container>
          </Col>
        </Row>
      </div>
    );
  }
};

export default CourseDetails;
