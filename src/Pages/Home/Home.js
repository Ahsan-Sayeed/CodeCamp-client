import React from "react";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div>
      <CarouselHome></CarouselHome>
      <div className="d-flex row justify-content-center align-items-center my-5">
        <h1 className="text-center">Demo templates</h1>
        <div>
          <div className="my-5 d-flex align-items-center justify-content-center">
            <img
              src="https://themeprestashop.net/img/cms/akira/footer-2.png"
              alt=""
              className="w-75 shadow"
            />
          </div>
          <div className="my-5 d-flex align-items-center justify-content-center">
            <img
              src="https://themeprestashop.net/img/cms/akira/footer-3.png"
              alt=""
              className="w-75 shadow"
            />
          </div>
          <div className="my-5 d-flex align-items-center justify-content-center">
            <img
              src="https://themeprestashop.net/img/cms/akira/footer-5.png"
              alt=""
              className="w-75 shadow"
            />
          </div>
          <div className="my-5 d-flex align-items-center justify-content-center">
            <img
              src="https://themeprestashop.net/img/cms/akira/footer-9.png"
              alt=""
              className="w-75 shadow"
            />
          </div>
        </div>
      </div>
      <div
        className="p-5 mt-5 text-center d-flex row align-items-center justify-content-center"
        style={{ backgroundImage: "linear-gradient(violet, transparent)",height:'350px' }}
      >
        <h1 style={{ color: "white" }}>
          Start to build your wonderful store now!
        </h1>
        <Button variant="outline-danger" size="lg" className="rounded my-3 px-5">
          {" "}
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default Home;
