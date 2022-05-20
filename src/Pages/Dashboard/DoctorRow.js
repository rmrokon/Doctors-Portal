import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, image, specialty, email } = doctor;

    const handleRemoveDoctor = (email) => {
        fetch(`https://doctors-portal-rmr.herokuapp.com/deleteDoctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} is removed successfully.`)
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="w-16 rounded">
                    <img src={image} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleRemoveDoctor(email)} className="btn btn-xs">Remove Doctor</button></td>
        </tr>
    );
};

export default DoctorRow;