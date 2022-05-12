import React from 'react';
import Clock from '../../assets/icons/clock.svg';
import Marker from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <InfoCard img={Clock} heading='Opening Hour' description='Monday to Saturday 10 AM - 3 PM' bgClassName='bg-gradient-to-r from-secondary to-primary'></InfoCard>

            <InfoCard img={Marker} heading={'Visit Us'} description={'Doma, Nilphamari'} bgClassName="bg-accent"></InfoCard>

            <InfoCard img={Phone} heading='Call us now' description={'+88017665788'} bgClassName='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;