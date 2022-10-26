/* eslint-disable */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, NavItem } from 'react-bootstrap';
import { addItem } from './../store/cartSlice.js';


function Details(props) {

  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [blah, setBlah] = useState("");
  let [tab, setTab] = useState(0);
  let [componentAnime, setComponentAnime] = useState('');

  let onChange = (e) => {
    setBlah(e.target.value);
  }

  let { id } = useParams(); //url 파라미터 사용

  let found = props.shoes.find(function (target) {
    return target.id == id
  });

  useEffect(() => {
    let timer = setTimeout(() => { setAlert(false) }, 2000);
    return () => {
      console.log(2)
      clearTimeout(timer)
      // useEffect가 실행되기 전에 실행되는 clean up code
    }
  }, [count]) //mount, update시 실행되던 것이 state 변화시마다 실행되도록 만들어줌

  useEffect(() => {
    setComponentAnime('end')
    return () => {
      setComponentAnime('')
    }
  }, [])

  useEffect(() => {
    let got = JSON.parse(localStorage.getItem('watched'))
    got.push(found.id)
    let set = new Set(got)
    let uniqueArr = [...set]
    uniqueArr = uniqueArr.sort()
    localStorage.setItem('watched', JSON.stringify(uniqueArr))

  }, [])

  return (
    <div className={"start " + componentAnime}>
      <div className="container">
        {alert == true ? (
          <div className="alert alert-warning">2초 이내 구매시 할인</div>
        ) : null}

        <div className="row">
          <div className="col-md-6">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/product" +
                (found.id + 1) +
                ".jpg"
              }
              width="400px"
            />
          </div>

          <div className="col-md-6">
            {isNaN(blah) == true ? (
              <div className="alert alert-danger">숫자만 입력하세요!</div>
            ) : null}
            <input onChange={onChange} value={blah} />
            {console.log(blah)}
            <h4 className="pt-5">{found.title}</h4>
            <p> {found.content}</p>
            <p>{found.price}</p>
            <button className="btn btn-danger" onClick={() => { dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 })) }}>주문하기</button>
          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              eventkey="link0"
              onClick={() => {
                setTab(0);
              }}
            >
              상품상세정보
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventkey="link1"
              onClick={() => {
                setTab(1);
              }}
            >
              상품구매후기
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventkey="link2"
              onClick={() => {
                setTab(2);
              }}
            >
              상품Q&A
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventkey="link2"
              onClick={() => {
                setTab(2);
              }}
            >
              관련상품
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} shoes={props.shoes} />
      </div>
    </div >
  );
}

function TabContent({ tab, shoes }) {

  let [fade, setFade] = useState('');

  useEffect(() => {
    let a = setTimeout(() => { setFade('end') }, 100)

    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

  return (<div className={'start ' + fade}>
    {[<div>{shoes[0].title}</div>, <div>{shoes[1].title}</div>, <div>{shoes[2].title}</div>][tab]}
  </div>)

}



export default Details;