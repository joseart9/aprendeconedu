import * as React from 'react';

interface EmailTemplateProps {
    mail?: string;
    phone?: string;
    message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    mail,
    phone,
    message,
}) => (
    <div>
        <h1>Haz recibido un nuevo contacto desde tu Landing Page!</h1>
        <p>Correo: {mail}</p>
        <p>Telefono: {phone}</p>
        <p>Mensaje: {message}</p>
    </div>
);
