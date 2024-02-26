import Image from 'next/image';
import informal from '../../public/informal.png';
import { Blockquote } from 'flowbite-react';

const Banner = () => {
    return (
        <>
            <div className="flex flex-col w-full md:flex-row space-x-0 md:space-x-2 items-center justify-center">
                <div className="w-full max-w-lg px-4">
                    <Image className="rounded-lg aspect-auto drop-shadow-2xl" src={informal} alt="imagen" layout='responsive' />
                </div>
                <div className='flex flex-col space-y-4 pr-10'>
                    <Blockquote className="text-left text-balance">
                        Soy Eduardo Ramírez, estudiante de Contaduría Pública y Finanzas en el Tecnológico de Monterrey.
                    </Blockquote>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400 text-left text-balance">
                        Con más de 2 años de experiencia impartiendo Asesorías de Contabilidad y una Certificación en Finanzas Personales, comparto mis conocimientos en redes sociales con el objetivo de que la gente se lleve una valiosa lección.
                    </p>
                </div>
            </div>

            <div className="sm:hidden flex flex-col space-x-2 items-center mt-20 overflow-y-auto">
                <Blockquote className="text-center text-balance">
                    Soy Eduardo Ramírez, estudiante de Contaduría Pública y Finanzas en el Tecnológico de Monterrey.
                </Blockquote>
                <Image className="h-auto w-full max-w-lg rounded-lg aspect-auto drop-shadow-2xl" src={informal} alt="imagen" />
                <p className="text-gray-500 text-sm dark:text-gray-400 text-center mt-20 text-balance">
                    Con más de 2 años de experiencia impartiendo Asesorías de Contabilidad y una Certificación en Finanzas Personales, comparto mis conocimientos en redes sociales con el objetivo de que la gente se lleve una valiosa lección.
                </p>
            </div>
        </>
    );
};
export default Banner;