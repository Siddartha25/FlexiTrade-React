import React from 'react'

function Approveitem(props) {
  return (
    <div className="card" style={{width: "28rem", marginTop:"10px",marginBottom:"10px",border:'5px solid green'}}>
            <div className="card-body" style={{textAlign:"center"}}>
                <h5 className="card-title">Order id : {props.item.orderid}</h5>
                <h5 className="card-title">Customer id : {props.item.customerid}</h5>
                <h5 className="card-title">Driver id : {props.item.driverid}</h5>
                <h5 className="card-title">Quantity: {props.item.quantity}</h5>
                <h5 className="card-title">Name of item : {props.item.name}</h5>
                <h5 className="card-title">Status : {props.item.status}</h5>
                <a className="btn btn-primary" onClick={()=>{props.reqapprove(props.item)}}>Approve Delivery</a>  {/*by using target=blank we ensure that the link is open in a new tab*/ }
            </div>
    </div>
  )
}

export default Approveitem
