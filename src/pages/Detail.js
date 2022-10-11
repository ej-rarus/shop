/* eslint-disable */

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
  let {id} = useParams();
  let found = props.shoes.find(function(target){
    return target.id == id
  });
  return(
      <div className="container">

        <div className="row">
          
          <div className="col-md-6">
          <img src= { process.env.PUBLIC_URL+ '/images/product'+ (found.id+1) +'.jpg'} width='400px'/>
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