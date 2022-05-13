import React from 'react';

const CommonBtn = ({ title, isDisabled }) => {
    return (
        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary" disabled={isDisabled}>{title ? title : "Get Started"}</button>
    );
};

export default CommonBtn;