/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import 라쿤 from './img/raccoon.jpeg';

function App() {
  return (
    <div className="App">
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
          <div className="col-md-4">
            <img src= { 라쿤 } width="400rem"/>
            <h4 className='product-name'>상품명</h4>
            <p>개강은</p>
          </div>
          <div className="col-md-4">
            <img src= { 라쿤 } width="400rem"/>
            <h4 className='product-name'>상품명</h4>
            <p>너굴맨이</p>
          </div>
          <div className="col-md-4">
            <img src= { 라쿤 } width="400rem"/>
            <h4 className='product-name'>상품명</h4>
            <p>해치웠으니</p>
          </div>
          <div className="col-md-4">
            <img src= { 라쿤 } width="400rem"/>
            <h4 className='product-name'>상품명</h4>
            <p>안심하라구!</p>
          </div>
        </div>

        
      </div>
      
      <div className="footer">
        <p>06974 서울특별시 동작구 흑석로6길 31</p>
        <p>Copyright ⓒ 2022 이얏호 company all rights reserved.</p>
      </div>
    </div>
  );
}


export default App;
