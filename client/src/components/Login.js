import React, {useState} from 'react'

//this is used to route from on to another
import {useNavigate} from 'react-router-dom';


const Login = (props) => {
    
    const [credentials, setCredentials] = useState({email: "", password: ""}) 

    let navigate = useNavigate(); //used to change the url so that we can route

    const handleSubmit = async (e) => {

        e.preventDefault();//this is used to prevent the oage from loading

        /*we directly send the data to the api to get the response ie we get the auth token and save the auth 
        token and then redirect him so that using the auth token we get from the database  */
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            alert("You have succesfully logged in")
            navigate("/");
        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='container my-5'>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login