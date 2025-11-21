import React from 'react';
import Hero from '../components/sections/Hero';
import Gallery from '../components/sections/Gallery';
import Catalog from '../components/sections/Catalog';
import Process from '../components/sections/Process';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Gallery />
            <Catalog isPreview={true} />
            <Process />
        </>
    );
};

export default HomePage;
