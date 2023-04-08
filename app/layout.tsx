import { Playfair_Display, Roboto } from "next/font/google";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";

export const metadata = {
  title: "TDK",
  description: "Treenighedskirkens drenge- og mandskor",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-playfair",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="" lang="da">
      <body className={`${roboto.variable} ${playfair.variable} light`}>
        {/* Enable Header */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
