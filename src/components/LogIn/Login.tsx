import React from 'react';
import './LogIn.scss'

const Login = () => {
    return (
        <div className='login-container'>
            <div className="wrapper">
                <h1 className="title">SIGN IN</h1>
                <form action="">
                    <input type="email" placeholder="Email"  />
                    <input type="password" placeholder="Password"  />
                    <button>LOGIN</button>
                    <div className="link">DO NOT REMEMBER THE PASSWORD?</div>
                    <div className="link">CREATE A NEW ACCOUNT?</div>
                </form>
            </div>
        </div>
    );
};

export default Login;