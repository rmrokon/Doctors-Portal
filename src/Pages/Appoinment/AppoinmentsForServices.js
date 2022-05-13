import React from 'react';
import CommonBtn from '../Shared/CommonBtn';

const AppoinmentsForServices = ({ service, setTreatment }) => {
    const { name, slot } = service;

    // const handleAppoinment = () => {
    //     console.log("Clicled");
    // }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        slot.length ? <span>{slot[0]}</span> : <span className='text-red-400'>No slot available. Try Another Date</span>
                    }
                </p>
                <p>Space Available: {slot.length}</p>
                <label
                    className='btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary'
                    onClick={() => setTreatment(service)}
                    disabled={!slot.length}
                    htmlFor="booking-modal">Book Appoinment</label>
            </div>
        </div>
    );
};

export default AppoinmentsForServices;