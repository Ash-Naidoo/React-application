import React from "react";
import {Navbar,Container,Nav,FormControl,Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'



function Navbartop() {

  

    return(

    <div>
    
              <Navbar className="navbartop" bg="dark"variant="dark" >
            <Container>
              <Navbar.Brand href="#home">Night Life</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                   <Nav.Link className="Navlink" href="">Home</Nav.Link>
                    <Nav.Link className="Navlink" target="blank" href="https://www.capetown.travel/50-of-the-best-clubs-and-bars-in-cape-town/">About</Nav.Link>
                    <Nav.Link className="Navlink" target="blank" href="https://www.contactlensclub.co.za/contact-us">Contact</Nav.Link>
                    <Form className="d-flex">

              <FormControl
              
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
              </Form>
                             
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

    </div>


      

    )

} export default Navbartop