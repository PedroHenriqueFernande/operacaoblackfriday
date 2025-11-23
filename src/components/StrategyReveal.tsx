import React from 'react';
import laptopMockup from '../assets/laptop_mockup.png';
import missionBg from '../assets/mission_bg.png';

export const StrategyReveal: React.FC = () => {
    return (
        <section className="relative w-full py-20 bg-military-black overflow-hidden">
            {/* Background Image with Overlay - Reusing missionBg as requested */}
            <div className="absolute inset-0 z-0">
                <img
                    src={missionBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-military-black via-military-black/95 to-military-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10 space-y-24">

                {/* Part 1: The Trap */}
                <div className="flex flex-col items-center text-center space-y-12">
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            O sistema quer que você <br />
                            foque no <span className="text-gray-500">que não importa</span>
                        </h2>

                        <div className="space-y-2">
                            <p className="text-gray-500 text-lg md:text-xl line-through decoration-military-red decoration-2">
                                O mercado digital te ensinou a correr atrás de faturamento alto.
                            </p>
                            <p className="text-white text-xl md:text-2xl font-medium">
                                Mas esqueceu de te mostrar como colocar dinheiro no bolso.
                            </p>
                        </div>
                    </div>

                    {/* Laptop Image */}
                    <div className="relative w-full max-w-4xl mx-auto">
                        <img
                            src={laptopMockup}
                            alt="Laptop displaying Operation Black Friday"
                            className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                        />
                        {/* Glow behind laptop */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-military-yellow/10 blur-[100px] -z-10" />
                    </div>
                </div>

                {/* Part 2: The Truth */}
                <div className="max-w-3xl mx-auto space-y-12 text-center md:text-left">
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Você aprende a fazer uma boa copy, rodar tráfego, montar um funil.
                            Mas ninguém te mostra o que realmente importa: <strong className="text-white">LUCRAR.</strong>
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Quem sabe como fazer isso, não compartilha... Na verdade eles até compartilham.
                            Mas, apenas com quem investe 100, 150 ou até mesmo 250 mil reais por ano pra ter acesso a esses segredos.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Enquanto isso, você fica preso em um sistema que idolatra plaquinha de faturamento...
                            mas não diz que, por trás de muitas dessas placas, tem prejuízo, caixa vazio e aluguel atrasado.
                        </p>

                        <div className="border-l-4 border-military-yellow pl-6 py-2">
                            <p className="text-white text-xl font-medium italic">
                                O jogo nunca foi sobre o maior faturamento. <br />
                                Sempre foi sobre o maior lucro.
                            </p>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            E só quem entendeu isso continua sendo gigante nesse mercado, enquanto a maioria só parece.
                        </p>
                    </div>
                </div>

                {/* Part 3: The Opportunity (White Card) */}
                <div className="max-w-4xl mx-auto bg-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl text-military-black relative overflow-hidden">
                    {/* Texture Overlay for Paper feel */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                    />

                    <div className="relative z-10 space-y-8">
                        <h3 className="text-3xl md:text-4xl font-bold leading-tight text-black">
                            É em novembro que os grandes players fazem <br />
                            <span className="text-yellow-700 bg-yellow-100 px-2">a maior injeção de caixa do ano.</span>
                        </h3>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Durante o ano todo, você corre atrás de lançamento, busca novas estratégia...
                            E no final, sobra <strong className="text-black">esforço e falta dinheiro.</strong>
                        </p>

                        <p className="text-yellow-800 font-bold text-lg uppercase tracking-wide">
                            Mas a verdade é simples:
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Isso só acontece porque você ainda não descobriu que a Black Friday não é só "mais uma data do calendário".
                        </p>

                        {/* Red Highlight Box */}
                        <div className="bg-military-red text-white p-6 rounded-lg shadow-lg transform -rotate-1">
                            <p className="font-bold text-center text-lg md:text-xl">
                                Ela é o único momento do ano em que a audiência já está pronta para gastar.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                O dinheiro já está separado. A atenção já está voltada para o consumo.
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed">
                                Você só precisa apresentar uma oferta aniquiladora, irresistível, irrecusável, diferente de tudo o que já fez!
                                E com isso, capturar o caixa que já está na rua.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
