import React from 'react';
import { BackgroundEffect } from './BackgroundEffect';
import { Title, Subtitle, Body, Highlight } from './Typography';
import { Button } from './Button';


export const Hero: React.FC = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-military-black px-4 py-12 md:py-0">
            <BackgroundEffect />

            <div className="relative z-10 container mx-auto flex flex-col items-center text-center max-w-4xl">

                {/* Character Image (Mobile: Top, Desktop: Behind/Integrated) */}
                {/* For this specific design, the character is behind the text or integrated. 
            Let's position it absolutely on desktop to match the "behind" feel, 
            or relatively for better flow. Given the reference, it looks like a composition.
            Let's try a layout where the character is central but text overlaps.
        */}


                {/* Content Group */}
                <div className="flex flex-col items-center gap-6 mt-4 md:mt-64"> {/* Margin top to push text below face if needed */}

                    {/* Operation Title Group */}
                    <div className="flex flex-col items-center gap-2">
                        <Subtitle className="text-sm md:text-base tracking-[0.3em] text-gray-400">
                            OPERAÇÃO
                        </Subtitle>
                        <Title className="text-glow text-center leading-none">
                            BLACK <span className="text-military-yellow">FRIDAY</span>
                        </Title>
                        <Subtitle className="text-military-yellow tracking-[0.5em] text-sm md:text-xl mt-2">
                            27 DE SETEMBRO
                        </Subtitle>
                    </div>

                    {/* Main Headline */}
                    <div className="max-w-2xl mt-8 space-y-4">
                        <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            Em uma <Highlight>imersão de 6 horas</Highlight> eu vou te mostrar como fazer a <Highlight>maior injeção de caixa</Highlight> da sua vida na <Highlight>black friday 2025</Highlight>
                        </h3>

                        <Body className="text-sm md:text-base max-w-xl mx-auto opacity-80">
                            Em uma imersão de 6 horas, 100% prática e mão na massa, eu vou te mostrar como fazer um lançamento de Black Friday que vai além do faturamento alto e coloca dinheiro de verdade no seu bolso
                        </Body>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 w-full md:w-auto">
                        <Button className="w-full md:w-auto">
                            Liberar Acesso
                        </Button>
                    </div>

                </div>
            </div>

            {/* Bottom fade for smooth transition if needed */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-military-black to-transparent z-20 pointer-events-none" />
        </div>
    );
};
