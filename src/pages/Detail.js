/* eslint-disable */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav, NavItem } from 'react-bootstrap';

let BlueBtn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding: 10px;
`

let Newbtn = styled.button(BlueBtn);

let Box = styled.div`
  background: grey;
  padding: 20px;
`

function Details(props) {

  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [blah, setBlah] = useState("");
  let [tab, setTab] = useState(0);

  let onChange = (e) => {
    setBlah(e.target.value);
  }

  let {id} = useParams(); //url 파라미터 사용

  let found = props.shoes.find(function(target){
    return target.id == id
  });

  useEffect(()=>{ 
    let timer = setTimeout(()=>{ setAlert(false) }, 2000);
    return ()=>{
      console.log(2)
      clearTimeout(timer)
      // useEffect가 실행되기 전에 실행되는 clean up code
    }
  }, [count]) //mount, update시 실행되던 것이 state 변화시마다 실행되도록 만들어줌


  return (
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
          <button className="btn btn-danger">주문하기</button>
        
        </div>
        
        
        
        
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link eventkey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventkey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventkey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
            </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div>
  );
}

function TabContent(props){
  if (props.tab == 0){
    return <div>내용0</div>
  } else if (props.tab == 1 ){
    return <div>내용1</div>
  } else if (props.tab == 2 ){
    return <div>내용2</div>
  }
}



export { Details };