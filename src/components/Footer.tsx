import { Footer, FooterBrand, FooterDivider, FooterLink, FooterLinkGroup, FooterCopyright } from 'flowbite-react';

export default function Component() {
    const handleFooterLinkClick = (e: any, href: any) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState({}, '', href);
        }
    };

    return (
        <Footer container theme={{
            "root": {
                "base": "w-full rounded-lg bg-eduPrimary-400 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
                "container": "w-full p-6",
                "bgDark": "bg-gray-800"
            },
            "groupLink": {
                "base": "flex flex-wrap text-sm text-white dark:text-white",
                "link": {
                    "base": "last:mr-0 md:mr-6 me-4",
                    "href": "hover:underline"
                },
                "col": "flex-col space-y-4"
            },
            "icon": {
                "base": "text-gray-500 dark:hover:text-white",
                "size": "h-5 w-5"
            },
            "title": {
                "base": "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
            },
            "divider": {
                "base": "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
            },
            "copyright": {
                "base": "text-sm text-white dark:text-white sm:text-center",
                "href": "ml-1 hover:underline",
                "span": "ml-1"
            },
            "brand": {
                "base": "mb-4 flex items-center sm:mb-0",
                "img": "mr-3 h-8",
                "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
            }
        }}>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FooterLinkGroup>
                        <FooterLink className='text-eduSecondary-400' href="#sobre-mi" onClick={(e) => handleFooterLinkClick(e, "#sobre-mi")}>Sobre mí</FooterLink>
                        <FooterLink className='text-eduSecondary-400' href="#redes" onClick={(e) => handleFooterLinkClick(e, "#redes")}>Redes</FooterLink>
                        <FooterLink className='text-eduSecondary-400' href="#videos" onClick={(e) => handleFooterLinkClick(e, "#videos")}>Videos</FooterLink>
                        <FooterLink className='text-eduSecondary-400' href="#contacto" onClick={(e) => handleFooterLinkClick(e, "#contacto")}>Contacto</FooterLink>
                    </FooterLinkGroup>
                </div>
                <FooterDivider />
                <FooterCopyright className='text-eduSecondary-400' href="#" by="By Arturo Arguelles" year={2024} />
            </div>
        </Footer>
    );
}
