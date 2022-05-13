import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (e) => {

    }
    return (
        <div className='my-28'>
            <h1 className='text-2xl text-accent text-center my-5'>Login</h1>
            <div className=' w-11/12 lg:w-1/2 mx-auto'>
                <form action="" className='flex flex-col items-center' onSubmit={handleLogin}>

                    <input type="email" name='email' placeholder="Email Address" className="input w-full  mb-2 select-bordered" />

                    <input type="password" name='password' placeholder="Enter Password" className="input w-full mb-2 select-bordered" />

                    <p className='text-blue-400'>Forgot Password?</p>
                    <p className='text-accent'>New to Doctors-Portal? <span className='text-blue-400'><Link to={"/register"}>Register</Link></span></p>

                    <input className='btn btn-primary text-white font-bold bg-accent w-full mt-2' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login; <h1>This is login</h1>