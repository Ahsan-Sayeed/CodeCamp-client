import React from "react";
import Cards from "../Cards/Cards";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const CourseContainer = ({ courses,title }) => {

  return (
    <Container>
      <Row className="mx-auto">
        <h1 className="my-3">{title}</h1>
        {
            courses.map((value,idx)=><Cards key={idx} name={value.Name} photo={value.Photo} details={value.Details}/>)
            
        }
      </Row>
    </Container>
  );
};

export default CourseContainer;
