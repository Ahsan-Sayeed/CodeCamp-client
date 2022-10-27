import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const PlanCard = ({ info }) => {
  const { standard, price, project, duration, test, videos } = info;
  return (
    <Container className="p-5 my-5 bg-light shadow" style={{borderRadius:'15px'}}>
      <h3 className="text-center">{standard}</h3>
      <p className="text-center rounded bg-info py-3 fw-bold text-light" style={{fontSize:'30px'}}>${price.split("$")[0]}</p>
      <div>
        <ul style={{lineHeight:4}}>
          <li>Projects: <b> {project} </b></li>
          <li>Duration: <b> {duration} </b></li>
          <li>Total Task: <b> {test} </b></li>
          <li>Total Videos: <b> {videos} </b></li>
        </ul>
        <Button className="w-100">Purches Now</Button>
      </div>
    </Container>
  );
};

export default PlanCard;
