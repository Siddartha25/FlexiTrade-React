import React from "react";

import { useContext, useEffect } from "react";
import shopContext from "../context/shopcontext";
import {useNavigate,Link} from 'react-router-dom';

function Cartsummary(props) {

  let navigate = useNavigate();

  const context = useContext(shopContext);
  const { buycart,createemptycart} = context;

  return (
    <>
      <div class="col-lg-4 bg-grey">
        <div class="p-5">
          <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
          <hr class="my-4" />

          <div class="d-flex justify-content-between mb-4">
            <h5 class="text-uppercase">Total Number of items : {props.items}</h5>
            <br />
            <h5>Total Cost of items : {props.cost}</h5>
          </div>

          <h5 class="text-uppercase mb-3">Shipping</h5>

          <div class="mb-4 pb-2">
            <select class="select">
              <option value="1">Standard-Delivery- €5.00</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </select>
          </div>

          <h5 class="text-uppercase mb-3">Give code</h5>

          <div class="mb-5">
            <div class="form-outline">
              <input
                type="text"
                id="form3Examplea2"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form3Examplea2">
                Enter your code
              </label>
            </div>
          </div>

          <hr class="my-4" />

          <div class="d-flex justify-content-between mb-5">
            <h5 class="text-uppercase">Total price</h5>
            <h5>${props.cost}</h5>
          </div>

          <button
            type="button"
            class="btn btn-dark btn-block btn-lg"
            data-mdb-ripple-color="dark"
            onClick={()=>{
              buycart();
              alert("Order has been placed ")
              createemptycart();
              window.location.reload();
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Cartsummary;
