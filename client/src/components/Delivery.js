import React from 'react'
import {useNavigate,Link} from 'react-router-dom';
import { useContext, useEffect } from "react";
import shopContext from "../context/shopcontext";
import Deliveryitem from './Deliveryitem';

function Delivery() {

    const context = useContext(shopContext);
    const {get_available_delivery,available_deliveries,deliveryreq} = context;

    let navigate = useNavigate();
    useEffect(() => {
        /*if the auth token in localstorgae is not null then only we getnotes otherwise we send him to login */
        if(localStorage.getItem('token')){
            get_available_delivery();
        }
        else{
            navigate("/login");
        }
        //eslint-disable-next-line
    }, []);

    const reqdel=(element)=>{
        deliveryreq(element);
        alert("Item has been requested for delivery");
    }
  return (
    <>
        <div style={{padding:'15px',textAlign:'center'}}>
            <h1>Available items to Deliver</h1>
        </div>

        <div class="row" style={{border:'5px solid red', paddingLeft:'20px',background:'grey',width:'90vw'}}>
            {available_deliveries.map((element)=>{
                  return <div class="col" key={element._id} style={{display:'inline'}}> {/*here for every thing that we return it must have a unique key in this case our thing which is unique is the url if we want we could just use i+1*/}
                    <Deliveryitem item={element} reqdel={reqdel}></Deliveryitem>
                  </div>
            })}
        </div>
    </>
  )
}

export default Delivery
