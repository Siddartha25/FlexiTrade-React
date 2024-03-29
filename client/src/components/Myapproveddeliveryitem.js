import React from 'react'

function Myapproveddeliveryitem(props) {
  return (
    <div className="card" style={{width: "28rem", marginTop:"10px",marginBottom:"10px",border:'5px solid green'}}>
            <div className="card-body" style={{textAlign:"center"}}>
                <h5 className="card-title">Order id : {props.item.orderid}</h5>
                <h5 className="card-title">Customer id : {props.item.customerid}</h5>
                <h5 className="card-title">Quantity: {props.item.quantity}</h5>
                <h5 className="card-title">Name of item : {props.item.name}</h5>
                <h5 className="card-title">Status : {props.item.status}</h5>
                {props.item.status=="Pending Delivery"?      
                <a className="btn btn-primary" onClick={()=>{props.deliver(props.item);}}>Confirm Delivery</a> 
                    :<a className="btn btn-primary">Delivery Done</a> }
            </div>
    </div>
  )
}

export default Myapproveddeliveryitem
