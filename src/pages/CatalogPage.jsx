import React, { useEffect } from 'react';
import Catalog from '../components/sections/Catalog';

const CatalogPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <Catalog isPreview={false} />
        </div>
    );
};

export default CatalogPage;
