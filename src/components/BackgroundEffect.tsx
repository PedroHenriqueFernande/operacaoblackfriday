import React from 'react';
import heroBg from '../assets/hero-bg.jpg';

export const BackgroundEffect: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base Image Background with Spotlight Mask */}
            <div className="absolute inset-0">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-100"
                    style={{
                        maskImage: 'radial-gradient(circle at center 30%, black 25%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at center 30%, black 25%, transparent 80%)'
                    }}
                />
                {/* Dark overlay for ambient blending */}
                <div className="absolute inset-0 bg-military-black/40 mix-blend-multiply" />
            </div>

            {/* Spotlight Effect - Radial Gradient to darken edges but keep center bright */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-military-black/60 to-military-black opacity-90"
                style={{ background: 'radial-gradient(circle at center 30%, transparent 15%, #0a0a0a 90%)' }}
            />

            {/* Red Radial Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-radial-gradient from-military-red/30 via-transparent to-transparent opacity-50 blur-3xl" />

            {/* Concentric Circles (simulated with borders) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-military-red/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-military-red/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-military-red/10 rounded-full" />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
        </div>
    );
};
