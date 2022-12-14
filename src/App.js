/* eslint-disable */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from 'axios';

import './App.css';
import { data } from './data';
//import { Details } from './pages/Detail';
const Details = lazy(() => import('./pages/Detail'));
const Error404 = lazy(()=> import('./pages/404.js'));
//import Error404 from './pages/404';
import About from './pages/About';
import Event from './pages/Event';
import { One, Two } from './components/event-content';
import Cart from './pages/Cart';
import Loadingspinner from './components/Loading';
import { useQuery } from '@tanstack/react-query';




function App() {

  useEffect(() => {
    if (localStorage.getItem('watched') === null) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, []);

  let obj = { name: 'kim' }
  localStorage.setItem('data', JSON.stringify(obj))
  let getting = localStorage.getItem('data')

  console.log(JSON.parse(getting).name)

  let [shoes, setShoes] = useState(data);
  let [stash, setStash] = useState([10, 11, 12]);
  let navigate = useNavigate();
  let [seemore, setSeemore] = useState(1);
  let [loadingmode, setLoadingmode] = useState(false);

  let result = useQuery(['testQuery'], () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      console.log("요청됨");
      return a.data
    })
  })

  result.data
  result.isLoading
  result.error

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
              <NavDropdown title="Goods" id="basic-nav-dropdown">
                <NavDropdown.Item href="sg">Stained Glass</NavDropdown.Item>
                <NavDropdown.Item href="bags">Bags</NavDropdown.Item>
                <NavDropdown.Item href="acc">Acc.</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="outlet">Outlet</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => {
                navigate("/cart");
              }}>Cart</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>반가워요 {result.isLoading && '로딩중입니다'}
              {result.error && '에러'}
              {result.data && result.data.name}
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
                  {shoes.map(function (md, i) {
                    return <Merchandize i={i} shoes={shoes}></Merchandize>;
                  })}
                </div>
              </div>
              <Loadingspinner loadingmode={loadingmode}></Loadingspinner>
              <button onClick={() => {
                setSeemore(seemore + 1);
                // 로딩중 UI 표시
                setLoadingmode(true);
                axios.get('https://codingapple1.github.io/shop/data' + (seemore + 1) + '.json')
                  .then((result) => {
                    console.log(result.data);
                    let anotherShoes = [...shoes, ...result.data]; //구조분해할당
                    setShoes(anotherShoes);
                    console.log(shoes);
                    // 로딩중 UI 숨기기
                    setLoadingmode(false);
                  })
                  .catch(() => {
                    console.log('실패했다');
                    // 로딩중 UI 숨기기
                    setLoadingmode(false);

                  })

                // 한 번에 여러 서버요청 처리하기 Promise
                // Promise.all([axios.get('http://www.naver.com'), axios.get('http://www.kakao.com')])
                // .then(()=>{

                // })
                // 서버와는 원칙상 문자 데이터만 주고 받을 수 있다.
                // JSON은 따옴표를 사용해서 우회.
              }}>더보기</button>
            </div>
          }
        />
        <Route path="/detail/:id" element={
            <Suspense fallback={<div>로딩중입니다...</div>}>
              <Details shoes={shoes} />
            </Suspense>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<One></One>} />
          <Route path="two" element={<Two></Two>} />
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>

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
