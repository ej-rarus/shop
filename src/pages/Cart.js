/* eslint-disable */

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";


function Cart(){
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}

export default Cart;