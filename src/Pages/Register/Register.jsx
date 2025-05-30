import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerAnimation from "../../assets/Animation - 1748260972490.json"
import { AuthContext } from '../../Contexts/AuthContext';

const Register = () => {
    const {createUser} = use(AuthContext);

    const handleRegister =(e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
                //create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie style={{width:'250px'}} animationData={registerAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='font-bold text-5xl'>Register Now!</h1>
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button type='submit' className="btn btn-neutral mt-4">Register Now</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;