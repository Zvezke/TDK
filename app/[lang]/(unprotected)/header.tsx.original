import Navbar from "./components/navbar";
// import { getDictionary } from "@/get-dictionary";

type HeaderProps = {
  params: {
    lang: "da" | "en";
  };
};

const Header = async ({ params }: HeaderProps) => {
  // const dict = await getDictionary(lang);
  const navbar = await Navbar(params);

  const headerElement = <header>{navbar}</header>;
  return headerElement;
};

export default Header;
