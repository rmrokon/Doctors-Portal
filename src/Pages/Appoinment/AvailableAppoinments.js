import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentsForServices from './AppoinmentsForServices';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selected }) => {
    const [treatment, setTreatment] = useState(null);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-16'>
            <h3 className='text-center text-primary text-xl'>Available Appoinments on {format(selected, 'PP')}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center my-16'>
                {
                    services.map(service => <AppoinmentsForServices
                        key={service._id}
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