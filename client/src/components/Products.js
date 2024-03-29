import React from 'react'
import Item from './Item';
import {useRef, useState } from 'react'

import { useContext, useEffect } from "react";
import shopContext from "../context/shopcontext";
import {useNavigate,Link} from 'react-router-dom';

function Products() {

  const context = useContext(shopContext);
  const { getCart, getItems,cart,items,setcart,updatecart} = context;

  let navigate = useNavigate();
  useEffect(() => {
    /*if the auth token in localstorgae is not null then only we getnotes otherwise we send him to login */
    if(localStorage.getItem('token')){
        getItems();
        getCart();
    }
    else{
        navigate("/login");
    }
    //eslint-disable-next-line
  }, []);

    const ref = useRef(null);
    const closeref = useRef(null);

    const [itemdata,changeitemdata]=useState({name:"",desc:"",cost:""});

    const [clicked_element,change_clicked_element]=useState({});

    const displayinfo= async (element)=>{
        await change_clicked_element(element);
        // console.log(clicked_element)
        ref.current.click();
        changeitemdata({name:element.name,desc:element.desc,cost:element.cost})
    }

    const addtocart=()=>{
        let newcart=cart;
        newcart.push(clicked_element);
        setcart(newcart);
        alert("Item has been added to cart")
        // console.log(newcart)
        updatecart(newcart);
    }
  return (
    <>
<button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Product Name
                  </label>
                  <input
                    value={itemdata.name}
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    // the vlaue of the field will be same state initially
                    //this is only done because we dont want the form to be empty when it first comes , so we let it have the value of the edit state
                    //after the first time the state value will be modified based on this value
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    value={itemdata.desc}
                    type="text"
                    className="form-control"
                    id="desc"
                    name="desc"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Cost
                  </label>
                  <input
                    value={itemdata.cost}
                    type="text"
                    className="form-control"
                    id="cost"
                    name="cost"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                // ref={closeref}
                onClick={()=>{addtocart()}}
              >
                Add to cart
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={()=>{navigate("/cart")}}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>


        <div style={{padding:'15px',textAlign:'center'}}>
            <h1>Todays latest Products are</h1>
        </div>

        <div class="row" style={{border:'5px solid red', paddingLeft:'20px',background:'grey',width:'90vw'}}>
            {items.map((element)=>{
                  return <div class="col" key={element._id} style={{display:'inline'}}> {/*here for every thing that we return it must have a unique key in this case our thing which is unique is the url if we want we could just use i+1*/}
                    <Item item={element} onclick={displayinfo}></Item>
                  </div>
            })}
        </div>
    </>
  )
}

export default Products
