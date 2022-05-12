import React from 'react';
import Doctor from '../../assets/images/doctor.png';
import CommonBtn from '../Shared/CommonBtn';


const AppoinmentHome = () => {
    return (
        <section className="bg-appoinment-bg">
            <div className="flex">
                <div className='basis-1/2'>
                    <img className='mt-[-130px] hidden lg:block' src={Doctor} alt='' />
                </div>
                <div className='basis-1/2 p-12'>
                    <h1 className="text-2xl font-bold text-primary mb-5">Appoinment</h1>
                    <h1 className="text-3xl font-bold mb-5 text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <CommonBtn></CommonBtn>
                </div>
            </div>
        </section>
    );
};

export default AppoinmentHome;