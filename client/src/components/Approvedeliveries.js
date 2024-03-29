import React from 'react'
import Approveitem from './Approveitem'
import {useNavigate,Link} from 'react-router-dom';
import { useContext, useEffect } from "react";
import shopContext from "../context/shopcontext";

function Approvedeliveries() {

    
    const context = useContext(shopContext);
    const {getdeliveryreq,alldeliveryreq,approvedeliveryreq,getuserinfo,username} = context;

    let navigate = useNavigate();
    useEffect(() => {
        /*if the auth token in localstorgae is not null then only we getnotes otherwise we send him to login */
        if(localStorage.getItem('token')){
            getuserinfo();
            if(username!=="Master"){
                alert("You are not allowed to approve deleveries")
                navigate("/");
            }
            else{
                getdeliveryreq();
            }
        }
        else{
            navigate("/login");
        }
        //eslint-disable-next-line
    }, []);

    const approvereq=(element)=>{
        approvedeliveryreq(element);
        window.location.reload();
    }

  return (
  <>
        <div style={{padding:'15px',textAlign:'center'}}>
            <h1>Available Delivery Requests to Approve</h1>
        </div>

        <div class="row" style={{border:'5px solid red', paddingLeft:'20px',background:'grey',width:'90vw'}}>
            {alldeliveryreq.map((element)=>{
                  return <div class="col" key={element._id} style={{display:'inline'}}> {/*here for every thing that we return it must have a unique key in this case our thing which is unique is the url if we want we could just use i+1*/}
                    <Approveitem item={element} reqapprove={approvereq}></Approveitem>
                  </div>
            })}
        </div>
    </>
  )
}

export default Approvedeliveries
