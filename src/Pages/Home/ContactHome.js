import React from 'react';

const ContactHome = () => {
    return (
        <section className='bg-appoinment-bg my-28 p-5'>
            <h3 className='text-primary text-xl font-bold text-center my-2'>Contact</h3>
            <h3 className='text-white text-3xl text-center my-2'>Stay Connected With Us</h3>
            <div className='w-1/4 mx-auto my-5'>
                <form action="" className='flex flex-col items-center'>
                    <input type="email" name='email' placeholder="Email Address" className="input w-full max-w-xs mb-2" />

                    <input type="text" name='subject' placeholder="Subject" className="input w-full max-w-xs mb-2" />

                    <textarea className="textarea w-full mb-2 h-32" name="bio" placeholder="Your Message" style={{ resize: 'none' }}></textarea>

                    <input className='btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary' type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactHome;