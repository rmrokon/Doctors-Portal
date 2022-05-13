import { format } from 'date-fns';
import React, { useState } from 'react';
import AppoinmentsForServices from './AppoinmentsForServices';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selected }) => {
    const [treatment, setTreatment] = useState(null);
    const services = [
        {
            id: 1, name: "Teeth Orthodontics", slot: [
                "10 AM - 12 PM",
                "12 AM - 01 PM",
                "01 AM - 02 PM",
            ]
        },
        {
            id: 2, name: "Cosmetic Dentistry", slot: [
                "10 AM - 12 PM",
                "12 AM - 01 PM",
                "01 AM - 02 PM",
                "02 AM - 03 PM",
                "04 AM - 05 PM",
            ]
        },
        { id: 3, name: "Teeth Cleaning", slot: ["01 PM - 02 PM"] },
        {
            id: 4, name: "Teeth Orthodontics", slot: []
        },
        {
            id: 5, name: "Teeth Orthodontics", slot: [
                "10 AM - 12 PM",
                "12 AM - 01 PM",
                "01 AM - 02 PM",
                "02 AM - 03 PM",
                "04 AM - 05 PM",
                "05 AM - 06 PM",
            ]
        },
        {
            id: 6, name: "Teeth Orthodontics", slot: [
                "10 AM - 12 PM",
                "12 AM - 01 PM",
                "01 AM - 02 PM",
                "02 AM - 03 PM",
            ]
        }
    ]
    return (
        <div className='my-16'>
            <h3 className='text-center text-primary text-xl'>Available Appoinments on {format(selected, 'PP')}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center my-16'>
                {
                    services.map(service => <AppoinmentsForServices
                        key={service.id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </AppoinmentsForServices>)
                }
                {treatment && <BookingModal treatment={treatment}
                    selected={selected}
                    setTreatment={setTreatment}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppoinments;