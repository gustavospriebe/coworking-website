import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white">
            <div className="google-map-code">
                <iframe
                    src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sAv.+Marcolino+Martins+Cabral,+2644+-+Vila+Moema,+Tubarão+-+SC,+88705-002!5e0!6i16"
                    width="100%"
                    title="Mapa de localização do Almaz Coworking"
                    height="600"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    aria-hidden="false"
                    className="map"
                    tabIndex={0}
                ></iframe>
            </div>
            <div className="mx-auto max-w-7xl overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
                <nav
                    className="-mx-5 -my-2 flex flex-wrap justify-center font-nunitosans"
                    aria-label="Footer"
                >
                    <div className="px-5 py-2">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-green-secundary"
                        >
                            Planos
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-green-secundary"
                        >
                            Produtos
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-green-secundary"
                        >
                            Blog
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-green-secundary"
                        >
                            Política de Privacidade
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-green-secundary"
                        >
                            Seja um franqueado
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-green-secundary"
                        >
                            Partners
                        </a>
                    </div>
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    <span className="m-auto inline-flex w-full justify-center gap-3 md:w-auto md:justify-start">
                        <Link
                            id="instagram"
                            href="https://www.instagram.com/almaz.coworking/"
                            target="_blank"
                            className="pointer h-6 w-6 fill-black transition hover:text-green-principal"
                        >
                            <span className="sr-only">Instagram</span>
                            <Instagram />
                        </Link>
                        <Link
                            id="phone"
                            href="https://api.whatsapp.com/send?phone=5548996294577&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida"
                            target="_blank"
                            className="pointer h-6 w-6 fill-black transition hover:text-green-principal"
                        >
                            <span className="sr-only">Telefone</span>
                            <Phone />
                        </Link>
                        <a
                            href="mailto:contato@almazco.com.br"
                            target="_blank"
                            id="email"
                            className="pointer h-6 w-6 fill-black transition hover:text-green-principal"
                        >
                            <span className="sr-only">Email</span>
                            <Mail />
                        </a>
                    </span>
                </div>
                <p className="mt-8 text-center">
                    <span className="mx-auto mt-2 text-sm text-gray-500">
                        Copyright © 2020-2023
                        <a
                            href="#"
                            className="pointer mx-2 text-green-principal hover:text-gray-500"
                            rel="noopener noreferrer"
                        >
                            @Almaz
                        </a>
                        Made by
                        <Link
                            href="https://gustavospriebe.com"
                            className="mx-2 text-gray-500 hover:text-gray-500/70"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Gustavo Priebe
                        </Link>
                    </span>
                </p>
            </div>
        </footer>
    );
}
