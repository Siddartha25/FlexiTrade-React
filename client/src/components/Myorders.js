import React from 'react'
import { useContext, useEffect } from "react";
import shopContext from "../context/shopcontext";
import {useNavigate,Link} from 'react-router-dom';
import Orderitem from './Orderitem';

function Myorders() {

    const context = useContext(shopContext);
    const { order,getmyorders} = context;
    
    let navigate = useNavigate();
    useEffect(() => {
        /*if the auth token in localstorgae is not null then only we getnotes otherwise we send him to login */
        if(localStorage.getItem('token')){
            getmyorders();
        }
        else{
            navigate("/login");
        }
        //eslint-disable-next-line
    }, []);

  return (
    <>
        <div style={{padding:'15px',textAlign:'center'}}>
            <h1>My Orders</h1>
        </div>

        <div class="row" style={{border:'5px solid red', paddingLeft:'20px',background:'grey',width:'90vw'}}>
            {order.map((element)=>{
                  return <div class="col" key={element._id} style={{display:'inline'}}> {/*here for every thing that we return it must have a unique key in this case our thing which is unique is the url if we want we could just use i+1*/}
                    <Orderitem item={element}></Orderitem>
                  </div>
            })}
        </div>
    </>
  )
}

export default Myorders
