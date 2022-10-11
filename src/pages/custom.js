/* eslint-disable */

import { useParams } from "react-router-dom";
import styled from "styled-components";

let BlueBtn = styled.button`
  background: blue;
  color: black;
  padding: 10px;
`
let Box = styled.div`
  background: grey;
  padding: 20px;
`

function Details(props) {
  let {id} = useParams();
  let found = props.shoes.find(function(target){
    return target.id == id
  });
  return(
      <div className="container">
        <Box><BlueBtn>버튼</BlueBtn></Box>
        <div className="row">
          
          <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          
          <div className="col-md-6">
          <h4 className="pt-5">{ found.title }</h4>
          <p> { found.content }</p>
          <p>{ found.price }</p>
          <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
  );
}

export { Details };