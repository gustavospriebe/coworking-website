import { Exo, Exo_2, Nunito_Sans } from "next/font/google";
import "./globals.css";

const exotwo = Exo_2({ subsets: ["latin"], variable: "--font-exotwo" });
const exo = Exo({ subsets: ["latin"], variable: "--font-exo" });
const nunitosans = Nunito_Sans({
    subsets: ["latin"],
    variable: "--font-nunitosans",
});

export const metadata = {
    title: "Almaz Co.working",
    description: "Coworking",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${exo.variable} ${exotwo.variable} ${nunitosans.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
