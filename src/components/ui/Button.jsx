import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
    const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";

    const variants = {
        primary: "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 shadow-sm",
        secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80",
        outline: "border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900",
        ghost: "hover:bg-zinc-100 hover:text-zinc-900",
        link: "text-zinc-900 underline-offset-4 hover:underline",
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
