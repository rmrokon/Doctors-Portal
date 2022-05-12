import React from 'react';


const Reviews = ({ name, img, review, city }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='mb-2'><p>{review}</p></div>
                <div className='flex items-center justify-arround'>
                    <div className="avatar mr-3">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{city}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;