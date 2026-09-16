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
                    </footer>
                </div>
            </body>
        </html>
    );
}