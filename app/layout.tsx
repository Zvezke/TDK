import { Playfair_Display, Roboto } from "next/font/google";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";

export const metadata = {
  title: "TDK",
  description: "Treenighedskirkens drenge- og mandskor",
  themeColor: "#172B3B",
  // image: "/images/church.svg",
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
        {/* Check how to disable header in sub */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
