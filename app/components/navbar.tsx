import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="grid items-center justify-center grid-cols-12 text-tdk-blue-400 py-6">
      {/* Fix logo */}
      {/* Logo */}
      <Link className="col-start-2 col-end-4 self-center" href="/">
        <Image src="/images/church.svg" alt="Logo" width={40} height={40} />
      </Link>
      {/* Navigation */}
      <ul className="flex justify-center gap-12 col-start-5 col-end-9">
        <li>
          <Link href="/om">Om</Link>
        </li>
        <li>
          <Link href="/sangprøven">Sangprøve</Link>
        </li>
        <li>
          <Link href="/aktiviteter">Aktiviteter</Link>
        </li>
        <li>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className="flex gap-12 col-start-9 col-end-11 justify-center">
        <div className="flex items-center gap-6">
          <Link href="https://www.instagram.com/treenighedskirkens_drengekor/">
            <Image
              src="/images/InstagramIcon.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.facebook.com/tkdrengekor">
            <Image
              src="/images/FacebookIcon.svg"
              alt="Facebook"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>

      {/* Dark mode, language, login */}
      <div className="flex gap-6 items-center justify-end">
        <Image
          src="/images/lightMode.svg"
          alt="Icon for light mode"
          width={22}
          height={22}
        />
        <Image
          src="/images/language.svg"
          alt="Icon for language switch"
          width={20}
          height={20}
        />
        <button className="text-s">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
