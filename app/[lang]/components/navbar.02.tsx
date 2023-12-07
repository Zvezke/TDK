import { getDictionary } from "@/get-dictionary";
import { Locale } from "../../../i18n-config";

interface NavbarProps {
  lang: Locale;
}

const Navbar = async ({ lang }: NavbarProps) => {
  const dictionary = await getDictionary(lang);
  // console.log(`Navbar called with lang: ${lang}`);
  return (
    <>
      <nav className=" text-tdk-blue-400 py-6 bg-tdk-blue-800 fixed w-full z-50">
        {dictionary.navBar.about}
      </nav>
    </>
  );
};

export default Navbar;
