import './global.css'
import React from "react";
import Navbar from "@/src/presentation/components/Navbar/Navbar";
import Rodape from "@/src/presentation/components/Rodape/Rodape";

export default function RootLayout(
    {children,}: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <html>
            <body>
                <div className="page-container">
                    <Navbar />
                    <main className="main-content">{children}</main>
                    <Rodape />
                </div>
            </body>
        </html>
    );
}