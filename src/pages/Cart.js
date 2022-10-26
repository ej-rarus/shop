/* eslint-disable */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeAge } from "./../store/userSlice.js";
import { addQty, decQty } from "./../store/cartSlice.js";

let Child = memo( function(){
  return (
    <div>Child임</div>
  )
})


function Cart() {

  let state = useSelector((state) => { return state })
  let dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>{setCount(count + 1)}}>+_</button>
      <h3>{state.user.age}살 {state.user.name}의 장바구니</h3>
      <button onClick={() => { dispatch(changeAge(100)) }}>버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i) =>
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button onClick={() => {
                    dispatch(addQty(state.cart[i].id))
                  }}>+</button>
                  <button onClick={() => {
                    dispatch(decQty(state.cart[i].id))
                  }}>-</button>
                </td>
              </tr>

            )
          }


        </tbody>
      </Table>
    </div>
  );
}

export default Cart;