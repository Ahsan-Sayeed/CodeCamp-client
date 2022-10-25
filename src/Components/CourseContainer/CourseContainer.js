import React from "react";
import Cards from "../Cards/Cards";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const CourseContainer = ({ courses }) => {
    
  return (
    <Container>
      <Row className="mx-auto">
        {
            courses.map((value,idx)=><Cards key={idx} name={value.Name} photo={value.Photo}/>)
            
        }
      </Row>
    </Container>
  );
};

export default CourseContainer;
