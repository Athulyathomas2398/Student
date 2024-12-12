import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-success">
    <Container>
      <Navbar.Brand href="#" ><Link style={{fontWeight:"bold",fontSize:"30px", color:"white",textDecoration:"none"}}  to={'/'}>TechMint</Link></Navbar.Brand>
    </Container>
  </Navbar>
  </>
  )
}

export default Header