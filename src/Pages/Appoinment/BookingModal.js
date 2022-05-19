import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
    const { name, slot, _id } = treatment;
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(selected, 'PP');

    if (loading) {
        return <Loading></Loading>
    }

    const handleBooking = (e) => {
        e.preventDefault();
        const date = formattedDate;
        const patientName = user.displayName;
        const email = user.email;
        const slot = e.target.slot.value;
        const phone = e.target.phone.value;

        const booking = { name, date, slot, patientName, phone, email };
        fetch("https://doctors-portal-server-rmr.herokuapp.com/bookings", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set on, ${formattedDate} at ${slot}`)
                }
                else {
                    toast(`You already have an appoinment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                setTreatment(null);
            })

    }
    return (
        <section>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-white font-bold bg-accent border-0">✕</label>
                    <h3 className="font-bold text-lg mb-2">Booking For: {name}</h3>
                    <form action="" className='flex flex-col items-center' onSubmit={handleBooking}>
                        <input type="text" name='date' value={formattedDate} className="input w-full mb-2" readOnly disabled />

                        <select name="slot" className="select select-bordered w-full mb-2">
                            {
                                slot.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='patientName' disabled value={user?.displayName || ''} className="input w-full  mb-2 select-bordered" />

                        <input type="number" name='phone' placeholder="Phone Number" className="input w-full  mb-2 select-bordered" />

                        <input type="email" name='email' disabled value={user?.email || ''} className="input w-full  mb-2 select-bordered" />

                        <input className='btn btn-primary text-white font-bold bg-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingModal;