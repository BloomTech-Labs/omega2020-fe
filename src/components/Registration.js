import React, {useState} from 'react';
import axios from 'axios';

const Registration = (props) => {
    const [user, setUser] = useState({ "email": '', "password": ''})

const changeHandler = event => {

    event.preventDefault();
    setUser({...user, [event.target.name]: event.target.value })
}


const handleSubmit = event => {
    event.preventDefault();

    // axiosLoginAuth()
    axios
        .post("https://omega2020.herokuapp.com/auth/register", user)
        .then( result => {
               alert(result.data.message)
               if(result.data.message){
                 props.history.push("/auth/login")
            } 
            })
            .catch(error => {
                console.log(error)
                alert("Email already exists please login to continue", error)
            })
            setUser({
                email: '', password: ''
            })
        }
 return (
    <>
        <div>
                <label>Email</label>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email" value={user.email} onChange={changeHandler}/>
                </form>
                <label>Password</label>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="password"  placeholder="Password" value={user.password} onChange={changeHandler}/>
                </form>

                <form onSubmit={handleSubmit}>
                    <button type="submit">Login with email</button>
                </form>
                   
        </div>
        </>
    
    )
}

export default Registration;
