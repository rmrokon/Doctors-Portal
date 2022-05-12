import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            img: people1,
            city: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 2,
            name: 'Tinson Kerry',
            img: people2,
            city: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            name: 'Linson Jerry',
            img: people3,
            city: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h3 className='text-accent text-2xl'>What Our Patients Says</h3>
                </div>
                <div className=''>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Reviews key={review.id} {...review}></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;