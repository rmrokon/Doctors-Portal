import React from 'react';
import ServiceCard from './ServiceCard';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import ServiceBanner from './ServiceBanner';


const Services = () => {
    const services = [
        { id: 1, img: Fluoride, name: "Fluoride Treatment", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, est." },

        { id: 2, img: Cavity, name: "Cavity Filling", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, est." },

        { id: 3, img: Whitening, name: "Teeth Whitening", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, est." },
    ]
    return (
        <div className='my-32'>
            <h3 className='text-primary text-2xl text-center mb-2'>Our Services</h3>
            <h2 className='text-accent text-4xl text-center mb-16'>Services We Provide</h2>
            <div className=''>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center mb-32'>
                    {
                        services.map(service => <ServiceCard key={service.id} name={service.name} img={service.img} description={service.description}></ServiceCard>)
                    }
                </div>

                <div>
                    <ServiceBanner></ServiceBanner>
                </div>
            </div>


        </div>
    );
};

export default Services;