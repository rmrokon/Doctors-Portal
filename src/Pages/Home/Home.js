import React from 'react';
import AppoinmentHome from './AppoinmentHome';
import Banner from './Banner';
import ContactHome from './ContactHome';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppoinmentHome></AppoinmentHome>
            <Testimonials></Testimonials>
            <ContactHome></ContactHome>
            <Footer></Footer>
        </div>
    );
};

export default Home; 