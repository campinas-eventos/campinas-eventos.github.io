"use client";

import Link from "next/link";
import './Navbar.css'
import { usePathname } from "next/navigation";

const links = [
    {
        label: "Plataformas gerais",
        href: "/",
    },
    {
        label: "Campinas",
        href: "/campinas",
    },
    {
        label: "Sumaré",
        href: "/sumare",
    },
    {
        label: "Indaiatuba",
        href: "/indaiatuba"
    }
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="site-header">
            <Link className="logo" href="/">
                Eventos da RMC
            </Link>

            <nav className="main-nav" aria-label="Navegação principal">
                <ul>
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <li key={link.href}>
                                <Link
                                    className={isActive ? "active" : undefined}
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
