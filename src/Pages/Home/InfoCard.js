import React from 'react';

const InfoCard = ({ img, heading, description, bgClassName }) => {
    return (
        <div className={`card lg:card-side shadow-xl p-4 text-white ${bgClassName}`}>
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{heading}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;