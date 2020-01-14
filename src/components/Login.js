import React, {useState} from 'react';
import axiosLoginAuth from '../utils/axiosLoginAuth';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: ''})


    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }
     const handleSubmit = event => {
         event.preventDefault();
         console.log(user);
         axiosLoginAuth()
            .post("/auth/login", user)
            .then(result => {
            console.log(result)
            localStorage.setItem("token", result.data.token);    
            setUser({ email: '', password: ''})
            alert(result.data.message)
        })
    
    }

    //  console.log(name);

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
                <button type="submit">Log In</button>
            </form>   
    </div>
    </>
)
}
export default Login