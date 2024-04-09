import React from 'react'
import {useNavigate,Link} from 'react-router-dom';
import { useContext, useEffect } from "react";
import shopContext from "../context/shopcontext";
import Myapproveddeliveryitem from './Myapproveddeliveryitem';
function Myapproveddeliveries() {

    const context = useContext(shopContext);
    const {getmyapproveddelivery,approveddeliveries,confirmdelivery} = context;

    let navigate = useNavigate();
    useEffect(() => {
        /*if the auth token in localstorgae is not null then only we getnotes otherwise we send him to login */
        if(localStorage.getItem('token')){
            getmyapproveddelivery();
        }
        else{
            navigate("/login");
        }
        //eslint-disable-next-line
    }, []);

    const ondeliver=(element)=>{
        confirmdelivery(element);
        alert("The delivery status of the item has been updated")
        window.location.reload();
    }

  return (
    <>
                <div style={{padding:'15px',textAlign:'center'}}>
                    <h1>My Deliveries</h1>
                </div>

                <div class="row" style={{border:'5px solid red', paddingLeft:'20px',background:'grey',width:'90vw'}}>
                    {approveddeliveries.map((element)=>{
                        return <div class="col" key={element._id} style={{display:'inline'}}> {/*here for every thing that we return it must have a unique key in this case our thing which is unique is the url if we want we could just use i+1*/}
                            <Myapproveddeliveryitem item={element} deliver={ondeliver}></Myapproveddeliveryitem>
                        </div>
                    })}
                </div>
    </>
  )
}

export default Myapproveddeliveries
