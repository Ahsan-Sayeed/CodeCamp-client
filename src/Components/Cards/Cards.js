import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";

const Cards = ({name,photo}) => {

  return (
          <Col>
            <Card
              border='info'
              bg=""
              key="primary"
              text="dark"
              style={{ width: "18rem",height:'200px' }}
              className="my-4 mx-auto shadow"
            >

              <Card.Body style={{backgroundImage:`url(${photo})`,backgroundRepeat: 'no-repeat',  backgroundSize:'contain',backgroundPosition:'center',backgroundOrigin: 'content-box'}}>
                <Card.Title 
                style={{textAlign:'left',position:'absolute',bottom:'5%',backgroundColor:'rgba(240, 240, 240,0.5)'}} 
                className="w-75 p-2 rounded" >
                  {name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
  );
}

export default Cards;
