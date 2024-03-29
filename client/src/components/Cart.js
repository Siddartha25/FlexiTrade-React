import React, { useState } from 'react'
import Cartitem from './Cartitem'
import Cartsummary from './Cartsummary'

import { useContext, useEffect } from "react";
import shopContext from "../context/shopcontext";
import {useNavigate,Link} from 'react-router-dom';

function Cart() {

  const context = useContext(shopContext);
  const {getItems, getCart,cart,setcart,updatecart} = context;

  let navigate = useNavigate();
  useEffect(() => {
    /*if the auth token in localstorgae is not null then only we getnotes otherwise we send him to login */
    if(localStorage.getItem('token')){
        getCart();
    }
    else{
        navigate("/login");
    }
    //eslint-disable-next-line
  }, []);

/*should see the toal items and total cost part */

    const changequantity=(element,newquantity)=>{
      // console.log(newquantity)
        const newitems = cart
        for(let i=0;i<newitems.length;i++){
            if(newitems[i]._id==element._id){
                newitems[i].quantity= Number(newquantity)
            }
        }
        setcart(newitems);
        // console.log(cart)
        updatecart(newitems);
    }

    const deleteitem=(id)=>{
        const newitems = [];
        for(let i=0;i<cart.length;i++){
            if(cart[i]._id!==id){
              newitems.push(cart[i])
            }
        }
          setcart(newitems);
          // console.log(cart)
          // console.log(newitems)
          updatecart(newitems);   //we do this and not updatecart(cart) because cart takes some time to update so while we change in the server with the newitems cart will eventually catch up
        /*this we will do same as how we did for delete note */
    }
    var total_items=0,total_cost=0;
  return (
    <>
    <section class="h-100 h-custom" style={{backgroundColor: "#d2c9ff"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                  </div>
                  <hr class="my-4"/>
                    <div class="row" >
                        {cart.map((element)=>{
                            total_items+=element.quantity;
                            total_cost+=(element.quantity*element.cost);
                            return <><div class="col" key={element.url} style={{display:'inline'}}> {/*here for every thing that we return it must have a unique key in this case our thing which is unique is the url if we want we could just use i+1*/}
                                <Cartitem element={element} changequantity={changequantity} ondelete={deleteitem}></Cartitem>
                            </div>
                            <hr class="my-4"/>
                            </>
                        })}
                    </div>
                    <h6 class="mb-0 text-muted">Total Number of unique items are: {total_items}</h6>

                  <div class="pt-5">
                    <h6 class="mb-0"><a href="#!" class="text-body"><i class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                  </div>
                </div>
              </div>
              <Cartsummary cost={total_cost} items={total_items}></Cartsummary>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Cart
