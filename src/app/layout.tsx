import type { Metadata } from "next";
import { Gluten, Roboto_Flex as Roboto } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Header } from "@/components/header";

import "./globals.css";

const gluten = Gluten({
  subsets: ["latin"],
  variable: "--font-gluten",
});
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "EcoHub",
  description:
    "Uma plataforma dedicada a promover práticas sustentáveis e conscientização ambiental. Os usuários podem encontrar informações, recursos e comunidades para ajudá-los a adotar um estilo de vida mais ecológico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${gluten.variable} ${roboto.variable} flex flex-row font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
