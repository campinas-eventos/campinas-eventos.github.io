"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import "./Navbar.css";

type Cidade = {
    nome: string;
    rota: string;
};

const cidades: Cidade[] = [
    { nome: "Campinas", rota: "campinas" },
    { nome: "Indaiatuba", rota: "indaiatuba" },
    { nome: "Sumaré", rota: "sumare" },
    { nome: "Valinhos", rota: "valinhos"}
];

export default function Navbar() {
    const pathname = usePathname();
    const [search, setSearch] = useState("");

    const filteredCities = useMemo(() => {
        const normalizedSearch = search
            .toLocaleLowerCase("pt-BR")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        return cidades.filter((city) => {
            const normalizedLabel = city.nome
                .toLocaleLowerCase("pt-BR")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            return normalizedLabel.includes(normalizedSearch);
        });
    }, [search]);

    const isHomeActive = pathname === "/";
    const hasActiveCity = cidades.some(
        (city) =>
            pathname === `/${city.rota}` ||
            pathname.startsWith(`/${city.rota}/`)
    );

    return (
        <header className="site-header">
            <Link className="logo" href="/">
                Eventos da RMC
            </Link>

            <nav className="main-nav" aria-label="Navegação principal">
                <ul>
                    <li>
                        <Link
                            className={isHomeActive ? "active" : undefined}
                            href="/"
                            aria-current={isHomeActive ? "page" : undefined}
                        >
                            Plataformas gerais
                        </Link>
                    </li>

                    <li className="cities-item">
                        <details>
                            <summary className={hasActiveCity ? "active" : undefined}>
                                Cidades
                            </summary>

                            <div className="cities-menu">
                                <label htmlFor="city-search" className="sr-only">
                                    Buscar cidade
                                </label>

                                <input
                                    id="city-search"
                                    type="search"
                                    placeholder="Buscar cidade..."
                                    value={search}
                                    onChange={(event) =>
                                        setSearch(event.target.value)
                                    }
                                />

                                <div className="cities-list">
                                    {filteredCities.length > 0 ? (
                                        filteredCities.map((city) => {
                                            const href = `/${city.rota}`;
                                            const isActive =
                                                pathname === href ||
                                                pathname.startsWith(`${href}/`);

                                            return (
                                                <Link
                                                    key={city.rota}
                                                    href={href}
                                                    className={isActive ? "active" : undefined}
                                                    aria-current={
                                                        isActive ? "page" : undefined
                                                    }
                                                >
                                                    {city.nome}
                                                </Link>
                                            );
                                        })
                                    ) : (
                                        <span className="no-results">
                                            Nenhuma cidade encontrada
                                        </span>
                                    )}
                                </div>
                            </div>
                        </details>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
