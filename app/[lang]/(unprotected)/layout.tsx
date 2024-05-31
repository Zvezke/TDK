import { Playfair_Display, Roboto } from "next/font/google";
import Footer from "./footer";
import "../globals.css";
import { i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Link from "next/link";
// import Header from "./header";
import Logo from "../components/Logo";
import Navbar from "../components/navbar";
import { Providers } from "@/providers/Providers";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: "TDK",
  description: "Treenighedskirkens drenge- og mandskor",
  // themeColor: "#172B3B",
  // image: "/images/church.svg",
};

const viewport = {
  themeColor: "#172B3B",
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "da" | "en" };
}) {
  const { navBar } = await getDictionary(params.lang);
  return (
    <Providers>
      <html lang={params.lang}>
        <body className={`${roboto.variable} ${playfair.variable} light`}>
          {/* Check how to disable header in sub */}
          <header>
            <Navbar
              params={params}
              about={navBar.about}
              audition={navBar.audition}
              travels={navBar.travels}
              discography={navBar.discography}
              contact={navBar.contact}
            />
          </header>
          {children}
          <Footer
            about={navBar.about}
            audition={navBar.audition}
            travels={navBar.travels}
            discography={navBar.discography}
            contact={navBar.contact}
          />
        </body>
      </html>
    </Providers>
  );
}
