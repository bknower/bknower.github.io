import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import './App.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "bknower",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],

      home: {
        title: "bknower",
        subtitle: "subtitle",
        text: "Here are some of my projects"
      },

      about: {
        title: "About Me",
      },

      contact: {
        title: "Here's how you can reach me",
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Benjamin Knower</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          
        </Container>
      </Router>
    );
  }
}

export default App;
