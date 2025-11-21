import React from 'react';

const Card = ({ children, className = "" }) => (
    <div className={`rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow-sm ${className}`}>
        {children}
    </div>
);

export default Card;
