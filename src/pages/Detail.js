/* eslint-disable */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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


  let {id} = useParams(); //url 파라미터 사용

  let found = props.shoes.find(function(target){
    return target.id == id
  });

  useEffect(()=>{ 
    setTimeout(()=>{ setAlert(false) }, 2000);
  }, [count]) //mount, update시 실행되던 것이 state 변화시마다 실행되도록 만들어줌


  return (
    <div className="container">
      {
        alert == true
        ? <div className="alert alert-warning">2초 이내 구매시 할인</div>
        : null
      }
      
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
          <h4 className="pt-5">{found.title}</h4>
          <p> {found.content}</p>
          <p>{found.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export { Details };