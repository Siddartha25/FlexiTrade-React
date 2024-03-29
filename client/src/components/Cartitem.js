import React, { useState } from "react";

function Cartitem(props) {

    const [quantity,setquantity]=useState(props.element.quantity)

    const changequantity=(e)=>{
        setquantity(e.target.value);
    }

  return (
    <>
      <div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img
            src={props.element.image}
            class="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <h6 class="text-black mb-0">{props.element.name}</h6>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            class="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
          >
            <i class="fas fa-minus"></i>
          </button>

          <input
            id="quantity"
            name="quantity"
            value={quantity}
            type="Number"
            class="form-control form-control-sm"
            onChange={changequantity}
          />

          <button
            class="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 class="mb-0">${props.element.cost}</h6>
        </div>

        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <button
            type="button"
            class="btn btn-dark btn-block btn-lg"
            data-mdb-ripple-color="dark"
            onClick={()=>{props.ondelete(props.element._id);}}
          >
            Delete
          </button>
          <button
            type="button"
            class="btn btn-dark btn-block btn-lg"
            data-mdb-ripple-color="dark"
            onClick={()=>{props.changequantity(props.element,document.getElementById("quantity").value)}}
          >
            confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default Cartitem;
