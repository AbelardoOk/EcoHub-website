import type { Metadata } from "next";
import { Gluten, Roboto_Flex as Roboto } from "next/font/google";
import "./globals.css";

const gluten = Gluten({ subsets: ["latin"], weight: ["900", "800", "700", "600"], variable: "--font-gluten" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "EcoHub",
  description:
    "Uma plataforma dedicada a promover práticas sustentáveis e conscientização ambiental. Os usuários podem encontrar informações, recursos e comunidades para ajudá-los a adotar um estilo de vida mais ecológico.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${gluten.variable} ${roboto.variable} font-sans`}>{children}</body>
    </html>
  );
}
