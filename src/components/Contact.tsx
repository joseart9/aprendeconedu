'use client';
import Image from 'next/image';

import { Label, TextInput, Textarea, Button } from 'flowbite-react';
import { HiMail, HiPhone } from 'react-icons/hi';

export default function Component() {
    // Función para manejar el envío del formulario
    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        // Recopilar los datos del formulario
        const formData = {
            email: event.target.email4.value,
            phone: event.target.phone4.value,
            message: event.target.message4.value,
        };

        // Enviar los datos a tu API
        try {
            const response = await fetch('http://localhost:3000/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            if (response.ok) {
                // Manejar la respuesta exitosa aquí, por ejemplo, mostrar un mensaje de éxito
                const data = await response.json();
                console.log('Formulario enviado con éxito:', data);
            } else {
                // Manejar errores del servidor aquí
                console.error('Error al enviar el formulario:', await response.text());
            }
        } catch (error) {
            // Manejar errores de conexión aquí
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <>
            <div className='hidden md:block'>
                <div className='flex flex-col mt-5 p-4 justify-center items-center space-y-5 bg-eduPrimary-50'>
                    <h1 className='text-2xl p-4'>Contactame</h1>
                    <div className='flex flex-row items-center justify-center space-x-5'>
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <div>
                                <div className="mb-1 block">
                                    <Label htmlFor="email4" value="Correo" />
                                </div>
                                <TextInput id="email4" type="email" icon={HiMail} placeholder="nombre@gmail.com" />
                            </div>
                            <div>
                                <div className='mb-1 block'>
                                    <Label htmlFor="phone4" value="Telefono" />
                                </div>
                                <TextInput id="phone4" type="text" icon={HiPhone} placeholder="+52 123-4567890" required />
                            </div>
                            <div>
                                <div className='mb-1 block'>
                                    <Label htmlFor="message4" value="Mensaje" />
                                </div>
                                <Textarea id="message4" className="w-full h-32 p-2 border rounded-lg" placeholder="Hola, me gustaria aprender mas sobre finanzas!" required />
                            </div>
                            <Button type="submit" className='bg-eduSecondary-400 focus:bg-eduSecondary-500 enabled:hover:bg-eduSecondary-500'>Enviar</Button>
                        </form>
                        <Image src="/formal.png" alt="Contact" width={300} height={300} className='drop-shadow-2xl' />
                    </div>
                </div>
            </div>

            <div className='md:hidden'>
                <div className='flex flex-col mt-5 p-4 justify-center items-center space-y-5 bg-eduPrimary-50'>
                    <h1 className='text-2xl p-4'>Contactame</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div>
                            <div className="mb-1 block">
                                <Label htmlFor="email4" value="Correo" />
                            </div>
                            <TextInput id="email4" type="email" icon={HiMail} placeholder="nombre@gmail.com" />
                        </div>
                        <div>
                            <div className='mb-1 block'>
                                <Label htmlFor="phone4" value="Telefono" />
                            </div>
                            <TextInput id="phone4" type="text" icon={HiPhone} placeholder="+52 123-4567890" required />
                        </div>
                        <div>
                            <div className='mb-1 block'>
                                <Label htmlFor="message4" value="Mensaje" />
                            </div>
                            <Textarea id="message4" className="w-full h-32 p-2 border rounded-lg" placeholder="Hola, me gustaria aprender mas sobre finanzas!" required />
                        </div>
                        <Button type="submit" className='bg-eduSecondary-400 focus:bg-eduSecondary-500 enabled:hover:bg-eduSecondary-500'>Enviar</Button>
                    </form>
                    <Image src="/formal.png" alt="Contact" width={300} height={300} className='drop-shadow-2xl' />
                </div>
            </div>
        </>
    );
}
