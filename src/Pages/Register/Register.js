import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const handleRegister = (e) => {

    }
    return (
        <div className='my-28'>
            <h1 className='text-2xl text-accent text-center my-5'>Register</h1>
            <div className=' w-11/12 lg:w-1/2 mx-auto'>
                <form action="" className='flex flex-col items-center' onSubmit={handleRegister}>

                    <input type="text" name='name' placeholder="Full Name" className="input w-full  mb-2 select-bordered" />

                    <input type="email" name='email' placeholder="Email Address" className="input w-full  mb-2 select-bordered" />

                    <input type="password" name='password' placeholder="Choose a Password" className="input w-full mb-2 select-bordered" />

                    <input type="password" name='confirmPassword' placeholder="Confirm Password" className="input w-full mb-2 select-bordered" />

                    <label class="label cursor-pointer">
                        <input type="checkbox" checked={agree} className="checkbox mr-2" onChange={() => setAgree(!agree)} />
                        <span className={`label-text ${!agree && "text-red-600"} text-base`}>Accept Doctors-Portal terms and conditions?</span>
                    </label>

                    <p className='text-accent'>Already have an account? <span className='text-blue-400'><Link to={'/login'}>Login</Link></span></p>

                    <input className='btn btn-primary text-white font-bold bg-accent w-full mt-2' type="submit" value="Register" disabled={!agree} />
                </form>
            </div>
        </div>
    );
};

export default Register;