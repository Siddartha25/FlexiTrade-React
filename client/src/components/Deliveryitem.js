import React from 'react'

function Deliveryitem(props) {
  return (
    <div className="card" style={{width: "28rem", marginTop:"10px",marginBottom:"10px",border:'5px solid green'}}>
            <img className="card-img-top" src={props.item.image} alt="Card image cap"/>
            <div className="card-body" style={{textAlign:"center"}}>
                <h2 className="card-title">{props.item.name}</h2>
                <h5 className="card-title">Quantity: {props.item.quantity}</h5>
                <a className="btn btn-primary" onClick={()=>{props.reqdel(props.item)}}>Request for delivery</a>  {/*by using target=blank we ensure that the link is open in a new tab*/ }
            </div>
    </div>
  )
}

export default Deliveryitem
