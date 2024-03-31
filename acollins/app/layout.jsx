'use client'
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import Layout from "@/components/layouts/Layout";

export default function RootLayout({children}) {

    return (
        <html>
            <body>
                <BrowserRouter>
                    <Layout>{children}</Layout>
                </BrowserRouter>
            </body>
        </html>
    );
}
