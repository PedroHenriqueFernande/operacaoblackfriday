import React from 'react';
import dynamiteTimer from '../assets/dynamite_timer.png';
import { Button } from './Button';

const RedXIcon = () => (
    <div className="flex-shrink-0 w-8 h-8 bg-military-red rotate-45 flex items-center justify-center shadow-lg">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    </div>
);

const HexagonCheckIcon = () => (
    <div className="flex-shrink-0 w-12 h-12 relative flex items-center justify-center">
        {/* Hexagon Shape */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-military-red absolute inset-0 drop-shadow-lg">
            <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="#9CA3AF" strokeWidth="1" />
        </svg>
        {/* Checkmark */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F4D03F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);

export const UrgencySection: React.FC = () => {
    return (
        <section className="relative w-full py-20 bg-military-black overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center max-w-2xl mx-auto space-y-12">

                    {/* Yellow Box - Top Position */}
                    <div className="bg-military-yellow w-full p-6 rounded-lg text-center shadow-lg transform -translate-y-1/2 relative z-20">
                        <p className="text-black font-bold text-lg md:text-xl leading-relaxed uppercase tracking-wide">
                            Novembro não é mês de improviso. É mês de execução cirúrgica.
                        </p>
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center leading-relaxed -mt-6">
                        Quem trata a Black Friday como mais um lançamento,
                        termina o ano do mesmo jeito que começou: <span className="text-military-red">sem lucro.</span>
                    </h2>

                    {/* Decision Cards */}
                    <div className="w-full space-y-6">
                        {/* Card 1 */}
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-6 hover:border-military-red/50 transition-colors duration-300">
                            <HexagonCheckIcon />
                            <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed">
                                Já faz lançamentos, mas não vê lucro no final
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-6 hover:border-military-red/50 transition-colors duration-300">
                            <HexagonCheckIcon />
                            <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed">
                                Quer transformar a Black Friday na maior entrada de caixa do ano
                            </p>
                        </div>
                    </div>

                    {/* Dynamite Image */}
                    <div className="relative w-full max-w-md mx-auto">
                        <img
                            src={dynamiteTimer}
                            alt="Dynamite Timer 00:00"
                            className="w-full h-auto drop-shadow-2xl"
                        />
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-military-red/10 blur-[60px] -z-10" />
                    </div>

                    {/* Dark Card Container */}
                    <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-10 w-full shadow-2xl border border-white/5 space-y-8">

                        <p className="text-gray-300 text-center text-lg font-medium leading-relaxed">
                            Você pode continuar rodando lançamento atrás de lançamento. <br />
                            Pode até faturar bonito.
                        </p>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10" />

                        {/* Pain Points List */}
                        <div className="space-y-8">
                            <div className="flex flex-col items-center text-center gap-4">
                                <RedXIcon />
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Mas enquanto você não entender o peso estratégico da Black Friday,
                                    vai viver de picos e quedas.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center gap-4">
                                <RedXIcon />
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Sem previsibilidade. Sem caixa. <br />
                                    Sem resultado real.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center gap-4">
                                <RedXIcon />
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Ou pior: vai assistir seus concorrentes fazendo a maior lucro do ano...
                                    enquanto você prepara uma campanha de última hora, sem a estratégia correta, e sem resultado.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10" />

                        {/* Red Box */}
                        <div className="bg-military-red p-6 rounded-lg text-center shadow-lg">
                            <p className="text-white font-bold text-lg md:text-xl leading-relaxed">
                                Novembro não é mês de improviso. <br />
                                É mês de execução cirúrgica.
                            </p>
                        </div>

                    </div>

                    {/* Additional Decision Section (Cards + Button) */}
                    <div className="w-full space-y-6 pt-8">

                        {/* Card 3 */}
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-6 hover:border-military-red/50 transition-colors duration-300">
                            <HexagonCheckIcon />
                            <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed">
                                Está cansado de campanhas que só geram placa de faturamento
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-6 hover:border-military-red/50 transition-colors duration-300">
                            <HexagonCheckIcon />
                            <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed">
                                Quer um manual com começo, meio, fim, para não correr risco de errar na operação mais importante do ano
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-8 w-full flex justify-center">
                            <Button className="w-full md:w-auto min-w-[300px]">
                                Liberar Acesso
                            </Button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};
