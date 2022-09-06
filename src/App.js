/* eslint-disable */
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import { data } from './data';


import 라쿤 from './img/raccoon.jpeg';
 

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<div>상세페이지</div>}/>
      </Routes>
      <Navbar className="Navigate" expand="lg">
        <Container>
          <Navbar.Brand href="home">유리너구리</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Menu">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="link">Event</Nav.Link>
              <NavDropdown title="Goods" id="basic-nav-dropdown">
                <NavDropdown.Item href="sg">Stained Glass</NavDropdown.Item>
                <NavDropdown.Item href="bags">Bags</NavDropdown.Item>
                <NavDropdown.Item href="acc">Acc.</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="outlet">Outlet</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="link">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main-bg">
      
      </div>
      {/* <div className = "main-bg" style={{ backgroundImage : 'url('+ 라쿤 +')'}}></div> */}
      <div className="container">
        <div className="row">
        {
          shoes.map(function(md, i){
            return(
              <Merchandize i={i} shoes={shoes} 라쿤={라쿤}></Merchandize>
            )
          })
        }


        </div>

        
      </div>
      
      <div className="footer">
        <p>06974 서울특별시 동작구 흑석로6길 31</p>
        <p>Copyright ⓒ 2022 이얏호 company all rights reserved.</p>
      </div>
    </div>
  );
}

function Merchandize(props) {
  return(
    <div className="col-md-4">
      <img src= { props.라쿤 } width="400rem"/>
      <h4 className='product-name'>{ props.shoes[props.i].title }</h4>
      <p>{ props.shoes[props.i].content }</p>
      <p>{ props.shoes[props.i].price }</p>
    </div>
  );
}


export default App;
