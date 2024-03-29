import React, { useState } from "react";

//this is used to route from on to another
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "../context/shopcontext";

function Signup(props) {
  const context = useContext(ShopContext);
  const { createemptycart } = context;

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //this is used to prevent the oage from loading

    /*we directly send the data to the api to get the response ie we get the auth token and save the auth 
      token and then redirect him so that using the auth token we get from the database  */
    const response = await fetch("http://localhost:3000/api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        address: credentials.address,
        phone: credentials.phone,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      createemptycart();
      alert("You have succesfully signed up")
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.name}
            onChange={onChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <label className="form-label">
            Home Address
          </label>
          <input
            type="String"
            className="form-control"
            value={credentials.address}
            onChange={onChange}
            id="address"
            name="address"
          />
          <label className="form-label">
            Phone Number
          </label>
          <input
            type="String"
            className="form-control"
            value={credentials.phone}
            onChange={onChange}
            id="phone"
            name="phone"
          />
        <div className="my-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
            required
            minLength={3}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
