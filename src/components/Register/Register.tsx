import React from 'react';
import './Register.scss'

const Register = () => {
    return (
        <div className='register-container'>
            <div className="wrapper">
                <h1 className="title">CREATE AN ACCOUNT</h1>
                <form action="">
                    <input type="text" placeholder="First Name"  />
                    <input type="text" placeholder="Last Name"  />
                    <input type="email" placeholder="Email"  />
                    <input type="password" placeholder="Password"  />
                    <input type="password" placeholder="Confirm Password"  />
                    <div className="agreement">
                        By creating an account, I consent to the processing of my personal data in accordance with the <br /> PRIVACY POLICY
                    </div>
                    <button>CREATE ACCOUNT</button>
                </form>
            </div>
        </div>
    );
};

export default Register;