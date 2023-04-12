import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-around items-center gap-4 py-8 text-tdk-blue-400 bg-tdk-blue-800 lg:py-12 lg:absolute lg:right-0 lg:w-screen">
      <div className="pb-4 lg:pb-8 text-center">
        <ul className="gap-6 lg:gap-12 flex">
          <li>
            <Link href="/om">Om</Link>
          </li>
          <li>
            <Link href="/sangprøven">Sangprøven</Link>
          </li>
          {/* <li>
              <Link href="/aktiviteter">Aktiviteter</Link>
            </li> */}
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-12 pb-4">
        {/* https://www.instagram.com/treenighedskirkens_drengekor/ */}
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
    </footer>
  );
};

export default Footer;
