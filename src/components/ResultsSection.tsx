import React from 'react';

export const ResultsSection: React.FC = () => {
    return (
        <section className="relative w-full py-24 bg-military-black overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '32px 32px' }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center space-y-16">

                    {/* Header Text */}
                    <div className="text-center space-y-6 max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-military-yellow leading-tight">
                            Esses são os resultados de quem <br />
                            seguiu o meu passo a passo para fazer um <br />
                            <span className="text-white">Lançamento de Black Friday:</span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl">
                            (se atente ao pouco que foi investido, se comparado ao faturamento brutal)
                        </p>
                    </div>

                    {/* Phone Mockup */}
                    <div className="relative w-full max-w-sm mx-auto">
                        {/* Phone Frame */}
                        <div className="bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative">
                            {/* Status Bar Mock */}
                            <div className="h-8 bg-[#f0f2f5] flex justify-between items-center px-6 text-xs font-medium text-black">
                                <span>12:42</span>
                                <div className="flex gap-1">
                                    <span>5G</span>
                                    <span>85%</span>
                                </div>
                            </div>

                            {/* WhatsApp Header */}
                            <div className="bg-[#f0f2f5] px-4 py-2 flex items-center gap-3 border-b border-gray-300">
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    SM
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-black text-sm">SCALE MENTORING</p>
                                    <p className="text-xs text-gray-500">55 online</p>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="bg-[#efeae2] p-4 min-h-[500px] space-y-4 relative">
                                {/* Chat Background Pattern */}
                                <div className="absolute inset-0 opacity-[0.06]"
                                    style={{ backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")` }}
                                />

                                {/* Pinned Message */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 text-xs text-gray-600 flex items-center gap-2 shadow-sm relative z-10">
                                    <span>📌</span>
                                    <span className="font-bold">BOOTCAMP: IA PARA LANÇAMENTOS</span>
                                </div>

                                {/* Message Bubble */}
                                <div className="bg-white rounded-lg p-3 shadow-sm relative z-10 max-w-[95%]">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="text-[#6b5cff] font-bold text-sm">~Gabriel</span>
                                        <span className="text-xs text-gray-400">+55 47 99...</span>
                                    </div>

                                    <div className="text-sm text-gray-800 space-y-2 font-sans">
                                        <p className="font-bold">[SOLICITAÇÃO DE DEI]</p>

                                        <p>Data do lançamento: novembro/ 2024</p>
                                        <p>Nicho: Sexualidade</p>
                                        <p>Subnicho: Pompoarismo</p>
                                        <p>Ticket: R$ 697,00</p>

                                        <p>Investimento total: R$ 53.767,15</p>
                                        <p className="font-bold bg-green-100 inline-block px-1 rounded">Faturamento: R$ 753.363,28</p>

                                        <p className="text-xs text-gray-600 mt-2 border-t pt-2">
                                            Observações: Rodamos o mesmo produto no perpétuo e em lançamentos, foi executado o cronograma de black friday que foi ensinada na área de membros.
                                        </p>

                                        <p className="text-xs text-gray-600 mt-2">
                                            O CP foi implementado para os dois funis mas quero uma ideia de como posso melhorar o perpétuo.
                                        </p>
                                    </div>

                                    <div className="text-[10px] text-gray-400 text-right mt-1">
                                        12:42
                                    </div>
                                </div>

                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-400 rounded-full" />
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-military-red/20 blur-[80px] -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};
