'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import customTheme from '@/theme';

export default function Component(reference: any) {
    const [isOpen, setIsOpen] = useState(false);
    const tabs = [
        { title: 'Sobre mi', href: '#sobre-mi' },
        { title: 'Redes', href: '#redes' },
        { title: 'Videos', href: '#videos' },
        { title: 'Contacto', href: '#contacto' },
    ];

    return (
        <Navbar fluid rounded role="navigation" theme={customTheme.navbar} className='w-full top-0 fixed z-50'>
            <Navbar.Brand as={Link} href="/">
                <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">Lecciones con edu</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse hidden={isOpen}>
                {tabs.map((tab, index) => (
                    <Navbar.Link
                        key={index}
                        href={tab.href}
                        active={reference.reference === tab.href.replace('#', '')}
                        onClick={(e) => {
                            e.preventDefault();
                            const id = tab.href.replace('#', '');
                            const section = document.getElementById(id);
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                                window.history.pushState({}, '', tab.href);
                            }
                            setIsOpen(false);
                        }}
                        aria-label={tab.title}
                    >
                        {tab.title}
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}