import React from 'react'
import {Link} from 'react-router-dom';

import {useNavigate} from 'react-router-dom';


function Navbar() {

  let navigate = useNavigate();


    const handlelogout=()=>{
        /*we need to clear the local storage whnever a person logs out */
        localStorage.removeItem('token');
        alert("You Have logged out");
        navigate("/login");
    }

  return (
   <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">FlexiTrade</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li> */}
            <li class="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/myorders">Orders</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/approvedeliveries">Approve deliveries</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/mydeliveries">My deliveries Approved</Link>
            </li>
        </ul>
        {!localStorage.getItem('token')?<form className="d-flex">
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:<button className="btn btn-primary mx-1" onClick={handlelogout}>Logout</button>}
        </div>
    </div>
    </nav>
   </>
  )
}

export default Navbar
