/* eslint-disable */

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";


function Cart(){

    let state = useSelector((state)=>{ return state })


    return (
      <div>
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
              state.cart.map((a, i)=>
                <tr key={i}>
                  <td>{state.cart[i].id}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td>@mdo</td>
                </tr>
                
              )
            }
          </tbody>
        </Table>
      </div>
    );
}

export default Cart;