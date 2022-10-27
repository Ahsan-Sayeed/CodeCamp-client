import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useLoaderData } from "react-router-dom";
import PlanCard from "../../Components/PlanCard/PlanCard";

const Checkout = () => {
  const data = useLoaderData();
  console.log(data.plans);
  return (
    <Container>
      <div className="d-flex row align-items-center justify-content-center my-5">
        <h1 >{data.Name}</h1>
        <hr />
        <p>
         <em> Learn {data.Name} step by step in easy way,
          <br /> If you are looking for a good guideline then you are at the
          right place.{" "}</em>
        </p>
        <h2 className="text-center my-5">Choose your plan and get started</h2>
        <Row>
          {data.plans.map((value, idx) => (
            <Col key={idx} lg='4'>
              <PlanCard info={value} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Checkout;
