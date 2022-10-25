import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiCodeAlt,BiX } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";

import React, { useState } from "react";
import DarkLight from "../DarkLight/DarkLight";
import Avatar from "../Avatar/Avatar";
import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
    const [toggle,setToggle] = useState(false);
    const toggleNav = ()=>{
        setToggle(!toggle);
    }

    const activeStyle= {
      color:'black',
      fontWeight:'bold'
    }

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <BiCodeAlt />
          CodeCamp
        </Navbar.Brand>
        <div className="d-flex">
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0 shadow-none" onClick={toggleNav}>{toggle?<BiX/>:<HiMenuAlt1/>}</Navbar.Toggle>
          <div className="d-lg-none d-flex justify-content-center align-items-center">
            <DarkLight />
            <Avatar></Avatar>
          </div>
        </div>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav className="d-flex align-items-center">
            <NavLink to="/courses" className="mx-2 text-decoration-none" style={({ isActive }) =>isActive ? activeStyle : {color:'grey'}}>Courses</NavLink>
            <NavLink to="/faq" className="mx-2 text-decoration-none" style={({ isActive }) =>isActive ? activeStyle : {color:'grey'}}>FAQ</NavLink>
            <NavLink to="/blog" className="mx-2 text-decoration-none" style={({ isActive }) =>isActive ? activeStyle : {color:'grey'}}>Blog</NavLink>
            <div className="d-none d-lg-flex justify-content-center align-items-center">
              <DarkLight />
              <Avatar></Avatar>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
