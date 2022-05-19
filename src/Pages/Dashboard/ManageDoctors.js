import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading, error } = useQuery('doctors', () => fetch("http://localhost:5000/doctors", {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h3>Manage Doctors</h3>
            <h3>Doctors: {doctors.length}</h3>
        </div>
    );
};

export default ManageDoctors;