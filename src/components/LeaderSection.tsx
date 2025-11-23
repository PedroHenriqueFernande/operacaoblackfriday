import React from 'react';
import leaderImage from '../assets/unnamed.jpg';

export const LeaderSection: React.FC = () => {
    return (
        <section className="relative w-full py-20 bg-military-black overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center max-w-4xl mx-auto space-y-8">

                    {/* Leader Image with Effects */}
                    <div className="relative w-full max-w-md mx-auto">
                        {/* Smoke/Glow Effect Background */}
                        <div className="absolute inset-0 bg-gradient-radial from-gray-600/20 via-transparent to-transparent blur-3xl scale-110" />

                        {/* Image Container */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src={leaderImage}
                                alt="Leandro Ferrari"
                                className="w-full h-auto object-cover"
                            />
                            {/* Dark Overlay for Text Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Atmospheric Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-military-red/5 blur-[80px] -z-10" />
                    </div>

                    {/* Title */}
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Leandro Ferrari:
                        </h2>
                        <p className="text-xl md:text-2xl text-military-yellow font-bold">
                            O Capitão da Operação Black Friday
                        </p>
                    </div>

                    {/* Bio Content */}
                    <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                        <p>
                            Leandro Ferrari é um dos maiores nomes do mercado digital, muito conhecido por desenvolver o método Corredor Polonês.
                        </p>

                        <p>
                            Com mais de R$110 milhões faturados, nos mais diversos nichos, e está entre as 15 maiores agências da Hotmart, e uma das 50 maiores do mundo.
                        </p>

                        <p>
                            Atualmente, mentora lançadores que, em pouco mais de 2 anos já acumularam um faturamento de mais de R$500 milhões em faturamento.
                        </p>

                        <p className="font-medium text-white">
                            Agora, pela primeira vez, vai parar sua própria operação e abrir os bastidores da sua campanha mais lucrativa: o Lançamento de Black Friday.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
