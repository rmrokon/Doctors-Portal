import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selected, setTreatment }) => {
    const { name, slot } = treatment;

    const handleBooking = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const slot = e.target.slot.value;
        const patientName = e.target.patientName.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;

        console.log(name, date, slot, patientName, phone, email)
        setTreatment(null)
    }
    return (
        <section>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-white font-bold bg-accent border-0">✕</label>
                    <h3 className="font-bold text-lg mb-2">Booking For: {name}</h3>
                    <form action="" className='flex flex-col items-center' onSubmit={handleBooking}>
                        <input type="text" name='date' value={format(selected, 'PP')} className="input w-full mb-2" readOnly disabled />

                        <select name="slot" class="select select-bordered w-full mb-2">
                            {
                                slot.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='patientName' placeholder="Full Name" className="input w-full  mb-2 select-bordered" />

                        <input type="number" name='phone' placeholder="Phone Number" className="input w-full  mb-2 select-bordered" />

                        <input type="email" name='email' placeholder="Email Address" className="input w-full  mb-2 select-bordered" />

                        <input className='btn btn-primary text-white font-bold bg-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingModal;