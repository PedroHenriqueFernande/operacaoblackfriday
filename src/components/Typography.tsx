import React from 'react';

interface TextProps {
    children: React.ReactNode;
    className?: string;
}

export const Title: React.FC<TextProps> = ({ children, className = '' }) => (
    <h1 className={`font-stencil text-5xl md:text-7xl lg:text-8xl tracking-wider text-white uppercase ${className}`}>
        {children}
    </h1>
);

export const Subtitle: React.FC<TextProps> = ({ children, className = '' }) => (
    <h2 className={`font-sans text-xl md:text-2xl font-bold tracking-widest text-white uppercase ${className}`}>
        {children}
    </h2>
);

export const Body: React.FC<TextProps> = ({ children, className = '' }) => (
    <p className={`font-sans text-base md:text-lg text-gray-300 leading-relaxed ${className}`}>
        {children}
    </p>
);

export const Highlight: React.FC<TextProps> = ({ children, className = '' }) => (
    <span className={`text-military-yellow font-bold ${className}`}>
        {children}
    </span>
);
