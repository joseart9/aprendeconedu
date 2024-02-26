'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { useState } from 'react';

export default function Component(reference: any) {
    const [isOpen, setIsOpen] = useState(false);
    const tabs = [
        { title: 'Sobre mi', href: '#sobre-mi' },
        { title: 'Redes', href: '#redes' },
        { title: 'Videos', href: '#videos' },
        { title: 'Contacto', href: '#contacto' },
    ];

    return (
        <Navbar fluid rounded role="navigation" theme={{
            root: {
                base: "bg-eduPrimary-500 px-2 py-4 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
                rounded: {
                    on: "rounded",
                    off: "",
                },
                bordered: {
                    on: "border",
                    off: "",
                },
                inner: {
                    base: "mx-auto flex flex-wrap items-center justify-between",
                    fluid: {
                        on: "",
                        off: "container",
                    },
                },
            },
            brand: {
                base: "flex items-center",
            },
            collapse: {
                base: "w-full md:block md:w-auto",
                list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
                hidden: {
                    on: "hidden",
                    off: "",
                },
            },
            link: {
                base: "block py-2 pr-4 pl-3 md:p-0",
                active: {
                    on: "bg-eduSecondary-100 text-white dark:text-white md:bg-transparent md:text-eduSecondary-500",
                    off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-eduSecondary-500 md:dark:hover:bg-transparent md:dark:hover:text-white",
                },
                disabled: {
                    on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                    off: "",
                },
            },
            toggle: {
                base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
                icon: "h-6 w-6 shrink-0",
            },
        }} className='w-full fixed z-50'>
            <Navbar.Brand as={Link} href="/">
                <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white text-eduSecondary-500">Lecciones con Edu</span>
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