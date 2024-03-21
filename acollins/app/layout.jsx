'use client'
import "./styles/globals.css";
import Layout from "@/components/layouts/Layout";

export default function RootLayout({children}) {

    return (
        <html>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
