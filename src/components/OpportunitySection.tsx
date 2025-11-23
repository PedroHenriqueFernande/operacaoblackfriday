import React from 'react';
import squadPlanning from '../assets/squad_planning.png';

const CheckIcon = () => (
    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-lg mt-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);

export const OpportunitySection: React.FC = () => {
    return (
        <section className="relative w-full py-20 bg-military-black overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center max-w-3xl mx-auto space-y-12">

                    {/* Squad Image */}
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <img
                            src={squadPlanning}
                            alt="Squad Planning Operation Black Friday"
                            className="w-full h-auto"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-military-black via-transparent to-transparent" />
                    </div>

                    {/* Headline */}
                    <div className="space-y-6 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            A Black Friday pode ser <span className="text-military-yellow">sua maior chance de lucro do ano.</span> <br />
                            Mas só se você estiver pronto pra agir antes que ela comece.
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            No dia 27 de setembro, eu vou liderar a Operação Black Friday: uma imersão ao vivo de 6 horas pra você montar a sua campanha do zero.
                        </p>
                    </div>

                    {/* Benefits List */}
                    <div className="w-full space-y-6">
                        <h3 className="text-white font-bold text-xl">Você vai sair com:</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <CheckIcon />
                                <p className="text-gray-300 text-lg">A narrativa completa da sua campanha</p>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckIcon />
                                <p className="text-gray-300 text-lg">A estrutura das fases de captação, aquecimento, lembrete e vendas</p>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckIcon />
                                <p className="text-gray-300 text-lg">A oferta que vai te entregar o maior lucro do seu ano</p>
                            </div>

                            <div className="flex items-start gap-4">
                                <CheckIcon />
                                <p className="text-gray-300 text-lg">Além de modelos de anúncios, páginas, etc.</p>
                            </div>
                        </div>
                    </div>

                    {/* Validation Text */}
                    <p className="text-gray-400 text-lg leading-relaxed text-center">
                        Tudo isso validado nos últimos 4 anos, em vários nichos, com milhões faturados, e o principal: margem no bolso.
                    </p>

                    {/* Closing Question */}
                    <p className="text-white text-lg font-medium text-center leading-relaxed">
                        A única pergunta é: Você vai entrar no mês mais lucrativo do ano... preparado pra pegar a sua fatia do bolo, ou só mais uma vez torcendo pra dar certo?
                    </p>

                </div>
            </div>
        </section>
    );
};
