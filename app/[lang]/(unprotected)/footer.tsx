import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  about: string;
  audition: string;
  travels: string;
  discography: string;
  contact: string;
}

const Footer = ({
  about,
  audition,
  travels,
  discography,
  contact,
}: FooterProps) => {
  return (
    <footer className="flex flex-col items-center justify-around gap-4 bg-tdk-blue-800 py-8 text-tdk-blue-400 lg:absolute lg:right-0 lg:w-screen lg:py-12">
      <div className="pb-4 text-center lg:pb-8">
        <ul className="flex gap-6 lg:gap-12">
          <li>
            <Link href="/om">{about}</Link>
          </li>
          <li>
            <Link href="/sangproeven">{audition}</Link>
          </li>
          <li>
            <Link href="/koncertrejser">{travels}</Link>
          </li>
          <li>
            <Link href="/discography">{discography}</Link>
          </li>
          <li>
            <Link href="/kontakt">{contact}</Link>
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

// {/* <li>
//   <Link href="/om">Om</Link>
// </li>
// <li>
//   <Link href="/sangprøven">Sangprøven</Link>
// </li>
// {/* <li>
//     <Link href="/aktiviteter">Aktiviteter</Link>
//   </li> */}
//   <li>
//   <Link href="/kontakt">Kontakt</Link>
// </li>
