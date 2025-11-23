import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`
        group relative inline-flex items-center justify-center gap-3
        bg-gradient-to-b from-[#F4D03F] to-[#B7950B]
        text-black font-bold text-lg md:text-xl uppercase tracking-wide
        py-4 px-12 rounded-full shadow-lg hover:shadow-xl
        transform hover:scale-105 transition-all duration-300
        border-2 border-[#F1C40F]
        ${className}
      `}
            {...props}
        >
            <span>{children}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>

            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </button>
    );
};
