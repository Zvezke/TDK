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
    <html className="dark" lang="da">
      <body
        className={`${roboto.variable} ${playfair.variable}`}
        // className={`${roboto.variable} ${playfair.variable} bg-tdk-blue-400 dark:bg-tdk-blue-700 container`}
      >
        {/* <div className="container"> */}
        <Header />
        {children}
        {/* </div> */}
        <Footer />
      </body>
    </html>
  );
}
