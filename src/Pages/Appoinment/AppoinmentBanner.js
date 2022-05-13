import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBanner = ({ selected, setSelected }) => {

    return (
        <section className='bg-banner-bg'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse lg:justify-around">
                    <img className='lg:w-1/2' src={chair} alt='' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selected}
                            onSelect={setSelected}
                        />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AppoinmentBanner;