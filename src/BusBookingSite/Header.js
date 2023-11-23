import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBell } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";
const Header = () => {
  return (
    <div>
        <Navbar expand="md">
      <Container >
        <Navbar.Brand className='fs-3 fw-bold'> <SiYourtraveldottv className='fs-1 '/> Abi Bus </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link ><FaBell className='fs-2 text-black  mx-3 '/></Nav.Link>
            <Nav.Link ><IoPerson className='fs-2 text-black mx-3 '/></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header