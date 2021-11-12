import React from "react";
import {Button,Form,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'


function footer() {

    return(


      <Navbar className="bottompage" bg="dark" variant="light">
            <Form >
            <p className="formlabel">Sign up</p>
            <Form.Group className="form email" controlId="formBasicEmail">
              <Form.Label className ="formlabel">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group className="formlabel" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="formlabel" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label=" Select for free updates" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
    </Navbar>
    )
  } export default footer