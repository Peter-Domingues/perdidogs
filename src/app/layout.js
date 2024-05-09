import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perdidogs",
  description:
    "Página dedicada para cadastrar e encontrar os pets que foram resgatados das enchentes do Rio Grande do Sul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
