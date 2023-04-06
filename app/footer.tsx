import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-6 text-tdk-blue-400 bg-tdk-blue-800 lg:py-12 lg:absolute lg:right-0 lg:w-screen">
      <div className="pb-8 text-center">
        <ul className="gap-12 lg:flex lg:col-start-5 lg:col-end-9">
          <li>
            <Link href="/om">Om</Link>
          </li>
          <li>
            <Link href="/sangprøve">Sangprøve</Link>
          </li>
          <li>
            <Link href="/aktiviteter">Aktiviteter</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-12">
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
