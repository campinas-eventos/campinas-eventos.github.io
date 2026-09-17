import './global.css'
import React from "react";
import Navbar from "@/components/Navbar";

export default function RootLayout(
    {children,}: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <html>
            <body>
                <div className="page-container">
                    <Navbar/>
                    <main className="main-content">{children}</main>
                    <footer className="footer">
                        <p>Quer adicionar uma página ou plataforma ao site? Envie o nome dela por meio deste <a href="https://docs.google.com/forms/d/1MHmd9JxbJCJU85_6hqle0aakbPCOk28_45-Jzjsjjns" target="_blank">formulário</a></p>
                    </footer>
                </div>
            </body>
        </html>
    );
}