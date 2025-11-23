import React from 'react';
import { Title, Subtitle, Body, Highlight } from './Typography';
import { Button } from './Button';
import soldierMap from '../assets/soldier_map.png';
import missionBg from '../assets/mission_bg.png';

export const MissionBriefing: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center py-20 overflow-hidden bg-military-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={missionBg}
                    alt="Mission Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-military-black via-military-black/90 to-military-black" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-military-black opacity-80" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Soldier Image */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src={soldierMap}
                                alt="Soldado com Mapa"
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Inner Shadow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-military-red opacity-60" />
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-military-red opacity-60" />
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <Subtitle className="text-military-yellow tracking-widest text-sm">
                                Relatório de Missão
                            </Subtitle>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Eles não vão parar a operação pra te ensinar, <br />
                                <span className="text-military-yellow">Mas eu vou.</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-300">
                            <Body>
                                Nos últimos 4 anos, o que me colocou dinheiro no bolso de verdade foram as campanhas de Black Friday.
                            </Body>

                            <Body>
                                Enquanto o mercado todo seguia focado em fazer barulho, eu aprendi a <strong className="text-white">focar em fazer caixa.</strong>
                            </Body>

                            <Body>
                                A cada novembro, eu testei, melhorei, ajustei e repliquei o que mais dava certo. E agora, pela primeira vez, eu vou abrir tudo, <strong className="text-military-yellow">para você COPIAR E COLAR.</strong>
                            </Body>
                        </div>

                        {/* Feature Box */}
                        <div className="bg-gradient-to-r from-military-red/10 to-transparent border-l-4 border-military-red p-6 rounded-r-lg backdrop-blur-sm">
                            <p className="text-white font-medium leading-relaxed">
                                Eu vou parar a minha operação, pra te mostrar o plano que gerou milhões em lucro real, e que pode transformar esse novembro no mais lucrativo da sua história.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button className="w-full md:w-auto">
                                Liberar Acesso
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
