import React from "react";
import "../styles/home.css";

import { useContext, useEffect } from "react";
import shopContext from "../context/shopcontext";
import {useNavigate,Link} from 'react-router-dom';

function Home() {

    let navigate = useNavigate();

    const context = useContext(shopContext);
  const { cart,items, getCart, getItems} = context; 

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

  return (

    <>  
    <div style={{width:"100%"}}>
    <section id="part1" class="homediv">
        <div id="home">
            <div id="info">
                <h1 id="welcome">
                    Welcome
                </h1>
                <p id="intro">
                    We are a company that allows people to take up their preffered role,<br/>
                    and we provide top quality products to buyers, allow sellers to sell their products,<br/>
                    we allow people to take up the role of delivery drivers as without them the world is 
                    incomplete.
                </p>
            </div>
        </div>
    </section>
        <section id="part2" class="homediv">

            <div id="options" >
                <div class="choice" id="choice1">   
                    <Link className="optionbutton"  to="/products">Buy</Link>
                </div>
                <div class="choice" id="choice2">
                    <Link className="optionbutton" to="/additem">Sell</Link>
                </div>
                <div class="choice" id="choice3">
                    <Link className="optionbutton" to="/deliveries">Deliver</Link>
                </div>
            </div>
            <h1 id="quote" >"YOUR ROLE YOUR CHOICE"</h1>


        </section>



        <section id="part3" class="homediv">
            <div id="contact">
                <p>EMAIL: sg21csb0f25@student.nitw.ac.in | PH: 123456789 | FAX: 12345678 | PO: 1-2-312 Delhi</p>
            </div>
        </section>
        </div>
    </>
  );
}

export default Home;
