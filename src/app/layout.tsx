import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoHub",
  description:
    "Uma plataforma dedicada a promover práticas sustentáveis e conscientização ambiental. Os usuários podem encontrar informações, recursos e comunidades para ajudá-los a adotar um estilo de vida mais ecológico.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
