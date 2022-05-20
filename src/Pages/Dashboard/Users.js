import React from 'react';
import { useQuery } from 'react-query';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, error, refetch } = useQuery('allusers', () =>
        fetch("https://doctors-portal-rmr.herokuapp.com/users", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    );


    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            {error && <p>{error.message}</p>}
            <h3>All Users: {users?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow key={user._id} user={user} refetch={refetch} index={index}></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;