import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zailom.com"),
  title: { default: "Zailom — Ecossistema digital para negócios", template: "%s — Zailom" },
  description: "Um ecossistema conectado para organizar operações, automatizar conversas e transformar atendimento em experiência.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zailom — Seu negócio, conectado.",
    description: "Booking, automação e comunicação em um único ecossistema.",
    url: "https://zailom.com/",
    siteName: "Zailom",
    type: "website",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}