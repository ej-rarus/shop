/* eslint-disable */
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from 'axios';

import './App.css';
import { data } from './data';
import { Details } from './pages/Detail';
import Error404 from './pages/404';
import About from './pages/About';
import Event from './pages/Event';
import { One, Two } from './components/event-content';
import Loadingspinner from './components/Loading';


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [seemore, setSeemore] = useState(1);
  let [loadingmode, setLoadingmode] = useState(false);


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
              <Nav.Link
                onClick={() => {
                  navigate("/event");
                }}
              >
                Event
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                Detail
              </Nav.Link>
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
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  { shoes.map(function (md, i) {
                      return <Merchandize i={i} shoes={shoes}></Merchandize>;
                  })}
                </div>
              </div>
              <Loadingspinner></Loadingspinner>
              <button onClick={() => {
                setSeemore(seemore+1)
                // 로딩중 UI 표시
                {
                  console.log(444444)
                }
                axios.get('https://codingapple1.github.io/shop/data' + (seemore+1) + '.json')
                .then((result)=>{ 
                  console.log(result.data);
                  let anotherShoes=[...shoes, ...result.data]; //구조분해할당
                  setShoes(anotherShoes);
                  console.log(shoes);
                  // 로딩중 UI 숨기기
                 })
                .catch(()=>{
                  console.log('실패했다');
                  // 로딩중 UI 숨기기

                })

              }}>더보기</button>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Details shoes={shoes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<One></One>} />
          <Route path="two" element={<Two></Two>} />
        </Route>

        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>

      <div className="footer">
        <p>06974 서울특별시 동작구 흑석로6길 31</p>
        <p>Copyright ⓒ 2022 이얏호 company all rights reserved.</p>
      </div>
    </div>
  );
}

function Merchandize(props) {
  return (
    <div className="col-md-4">
      <Link
        to={"/detail/" + props.i}
        style={{ textDecoration: "none", color: "black" }}
      >

        <img
          src={
            process.env.PUBLIC_URL + "/images/product" + (props.i + 1) + ".jpg"
          }
          object-fit="cover"
          width="300rem"
        />
        <h4 className="product-name">{props.shoes[props.i].title}</h4>
        <p>{props.shoes[props.i].content}</p>
        <p>{props.shoes[props.i].price}</p>
      </Link>
    </div>
  );
}




export default App;
