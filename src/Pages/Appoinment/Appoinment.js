import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appoinment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner selected={selected} setSelected={setSelected}></AppoinmentBanner>
            <AvailableAppoinments selected={selected} setSelected={setSelected}></AvailableAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;