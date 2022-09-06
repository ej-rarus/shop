/* eslint-disable */
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import './App.css';
import { data } from './data';
import { Details } from './pages/custom';
import About from './pages/About';

import 라쿤 from './img/raccoon.jpeg';
 

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar className="Navigate" expand="lg">
        <Container>
          <Navbar.Brand href="/">유리너구리</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Menu">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/detail') }}>Event</Nav.Link>
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

      <Routes>
        <Route path="/" element={
          <div>
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
        </div>} />
        <Route path="/detail" element={<Details/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='*' element={<div>없는 페이지라오 404 </div>}></Route>
      </Routes>

      
      
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
