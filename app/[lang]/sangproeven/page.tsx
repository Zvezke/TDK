import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }: { params: { lang: "da" | "en" } }) => {
  const { aboutPage } = await getDictionary(params.lang);
  return (
    <>
      {/* 1. sektion - Sangprøven */}
      <div className="relative -z-20 bg-tdk-blue-light-background dark:bg-tdk-blue-700">
        <section className="mx-auto grid lg:grid-cols-2 xl:max-w-screen-xl">
          <div className="container -z-20 flex min-h-screen flex-col items-center justify-center text-center lg:col-start-1 lg:col-end-2 lg:text-left">
            <h2 className="pb-4 font-playfair text-[3.5rem] font-black text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:mt-12 lg:self-start lg:pb-8 lg:text-8xl">
              Sangprøven
            </h2>
            <p className="max-w-prose px-8 text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:px-0 lg:pr-12 lg:text-xl">
              Bliv en del af vores musikalske fællesskab gennem en enkel
              sangprøve. Vi søger drenge, der elsker at synge og har den
              nødvendige musikalitet for at skabe store musikoplevelser sammen.
            </p>
            <div className="my-10 lg:self-start">
              <Link
                className="rounded-md bg-tdk-blue-light-buttonsSubheadings py-4 px-6 font-medium text-tdk-blue-light-background dark:bg-tdk-yellow-400 dark:text-tdk-blue-700"
                href="mailto:lonegislinge@gmail.com?subject=Ang.%20tilmelding%20til%20Treenighedskirkens%20drengekor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tilmeld dit barn i dag
              </Link>
            </div>
          </div>
          <Image
            className="w-screen lg:absolute lg:right-0 lg:-z-10 lg:col-start-2 lg:col-end-3 lg:w-1/2"
            src="/images/sangproeven/boySinging.png"
            alt="Boy singing"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* 2. sektion - Under stemmeprøven ... */}
      <section className="col-start-1 col-end-3 bg-tdk-blue-light-backgroundDark py-16 px-6 text-lg text-tdk-blue-light-buttonsSubheadings dark:bg-tdk-green-700 dark:text-tdk-green-400 lg:text-xl">
        <p className="mx-auto max-w-prose  text-center">
          Ved stemmeprøven lytter efter drenge med lyse stemmer og musikalsk
          talent. Du skal synge et vers fra en sang, du kender, for eksempel "I
          østen stiger solen op". Du skal også eftersynge forskellige
          tonekombinationer, synge i højt og dybt toneleje og synge uden støtte
          fra klaveret.
        </p>
        <br />
        <p className="mx-auto max-w-prose text-center">
          Hvis du ikke bliver udvalgt, er det ikke et udtryk for manglende
          talent, men snarere fordi vi leder efter en speciel stemmetype til
          vores kor.
        </p>
      </section>
      {/* 3. sektion - Alderstrin og forskolen */}
      <section className="mx-auto flex flex-col lg:grid lg:grid-cols-2 ">
        <Image
          className="order-1 w-screen lg:absolute lg:left-0 lg:-z-10 lg:w-1/2"
          src="/images/sangproeven/mathiasFrederikAnders.jpg"
          alt="Boys singing"
          width={400}
          height={400}
        />

        <div className="bg-tdk-blue-light-background py-12 px-6 text-center dark:bg-tdk-blue-700 lg:col-start-2 lg:col-end-3 lg:mx-0 lg:px-0 lg:pl-16 lg:text-left">
          <h3 className="mb-6 font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:col-start-2 lg:col-end-7 lg:text-left lg:text-5xl">
            Alderstrin og forskolen
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="mx-auto max-w-prose text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:mx-0 lg:px-0 lg:text-left lg:text-base">
            Vi henvender os primært til drenge i 3. klasse, men har også gode
            erfaringer med drenge i 2. klasse. Forskolen er gratis og varer 4-5
            måneder med undervisning to gange ugentligt á 50 minutter i
            Treenighedskirkens lokaler. Forskolen tjener som en periode med
            gensidig prøvetid og forberedelse til optagelse i koncertkoret.
          </p>
        </div>
      </section>
      {/* Musikalsk fællesskab */}
      <div className="bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700">
        <section className="mx-auto grid lg:grid lg:grid-cols-2 xl:max-w-screen-xl">
          <div className="mx-auto py-12 px-6 text-center  dark:text-tdk-green-400 lg:col-start-1 lg:col-end-2 lg:mx-0 lg:grid lg:px-0 lg:text-left">
            <h3 className="mb-6 font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:text-left lg:text-5xl">
              Musikalsk fællesskab
            </h3>
            {/* Too many mx-auto classes! */}
            <p className="mx-auto max-w-prose text-base text-tdk-blue-light-headlines dark:text-tdk-green-400 lg:mx-0 lg:pr-8 lg:text-base">
              Som medlem af koret vil du opleve et musikalsk fællesskab, hvor
              dit talent får mulighed for at blomstre. Du vil nyde daglig
              trivsel, store koncertoplevelser og uforglemmelige
              rejseoplevelser, mens du deler din passion for musik med
              ligesindede drenge.
            </p>
          </div>
          <Image
            className="order-1 w-screen lg:absolute lg:right-0 lg:w-1/2"
            src="/images/sangproeven/gladeFyre.png"
            alt="Boys singing"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* Hvor og hvornår? */}
      <section className="flex flex-col items-center bg-tdk-blue-light-background px-6 pb-16 pt-12 text-tdk-blue-light-buttonsSubheadings dark:bg-tdk-blue-700 dark:text-tdk-blue-400 lg:relative lg:py-16 lg:text-xl">
        <h3 className="mb-6 font-playfair text-4xl font-black text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:text-center lg:text-5xl">
          Hvor og hvornår?
        </h3>
        <p className="mb-8 max-w-prose text-center text-base">
          Sangprøven afholdes årligt i maj og juni måned i Treenighedskirken.
          Efter en vellykket prøve vil optagelse og start i Forskolen finde sted
          i august.
        </p>
        <Link
          className="rounded-md bg-tdk-blue-light-buttonsSubheadings py-4 px-6 text-base font-medium text-tdk-blue-light-background dark:bg-tdk-yellow-400 dark:text-tdk-blue-700"
          href="mailto:lonegislinge@gmail.com?subject=Ang.%20tilmelding%20til%20Treenighedskirkens%20drengekor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tilmeld dit barn i dag
        </Link>
      </section>
    </>
  );
};

export default Page;

// Blue background: bg-tdk-blue-light-background dark:bg-tdk-blue-700
// Text on blue background: text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400

// Green background: bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700
// Text on green background: text-tdk-blue-light-buttonsSubheadings dark:text-tdk-green-400
