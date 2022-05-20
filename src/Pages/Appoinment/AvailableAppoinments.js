import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppoinmentsForServices from './AppoinmentsForServices';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ selected }) => {
    const [treatment, setTreatment] = useState(null);
    // const [services, setServices] = useState([]);
    const formattedDate = format(selected, 'PP');

    const { data: services, isLoading, error, refetch } = useQuery(['available', formattedDate], () => fetch(`https://doctors-portal-rmr.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='my-16'>
            <h3 className='text-center text-primary text-xl'>Available Appoinments on {format(selected, 'PP')}</h3>
            {error && <small>{error.message}</small>}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center my-16'>
                {
                    services?.map(service => <AppoinmentsForServices
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </AppoinmentsForServices>)
                }
                {treatment && <BookingModal treatment={treatment}
                    selected={selected}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppoinments;