import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const handleMakeAdmin = () => {
        fetch(`https://doctors-portal-server-rmr.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to Make Admin. You do not have the required permission");
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast(`Successfully Made ${email} an Admin`);
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== "admin" ? <button onClick={handleMakeAdmin} className="btn btn-xs">Make Admin</button> : "Admin"}</td>

            <td><button className="btn btn-xs">Remove User</button></td>

        </tr>
    );
};

export default UserRow;