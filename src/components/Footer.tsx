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
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FooterBrand
                        href="/"
                        src=""
                        alt=""
                        name="Lecciones con edu"
                    />
                    <FooterLinkGroup>
                        <FooterLink href="#sobre-mi" onClick={(e) => handleFooterLinkClick(e, "#sobre-mi")}>Sobre mí</FooterLink>
                        <FooterLink href="#redes" onClick={(e) => handleFooterLinkClick(e, "#redes")}>Redes</FooterLink>
                        <FooterLink href="#videos" onClick={(e) => handleFooterLinkClick(e, "#videos")}>Videos</FooterLink>
                        <FooterLink href="#contacto" onClick={(e) => handleFooterLinkClick(e, "#contacto")}>Contacto</FooterLink>
                    </FooterLinkGroup>
                </div>
                <FooterDivider />
                <FooterCopyright href="#" by="By Arturo Arguelles" year={2024} />
            </div>
        </Footer>
    );
}
