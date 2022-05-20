import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppoinments = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const navigate = useNavigate();

    const { data: myAppoinments, isLoading, error } = useQuery('myAppoinments', () => fetch(`https://doctors-portal-rmr.herokuapp.com/myAppoinments?email=${email}`, {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            console.log('res', res);
            if (res.status === 401 || res.status === 403) {
                toast("Unauthorized User");
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate("/home");
            }
            return res.json();
        }))

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            {error && <p>{error.message}</p>}
            <h3 className='text-center text-2xl text-accent'>Appoinments: {
                myAppoinments?.length
            }</h3>
            <div>
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
                                myAppoinments?.map((a, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.name}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppoinments;