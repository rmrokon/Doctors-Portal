import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h3 className='text-4xl text-primary text-center'>Dashboard</h3>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>

                    <li><Link to={'/dashboard/reviews'}>Reviews</Link></li>

                    {admin && <>
                        <li><Link to={'/dashboard/allusers'}>All Users</Link></li>

                        <li><Link to={'/dashboard/addDoctor'}>Add a Doctor</Link></li>

                        <li><Link to={'/dashboard/manageDoctors'}>Manage Doctors</Link></li>
                    </>}

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;