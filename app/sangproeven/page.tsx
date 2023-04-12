import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      {/* 1. sektion - Sangprøven */}
      <div className="bg-tdk-blue-light-background dark:bg-tdk-blue-700 relative -z-20">
        <section className="grid lg:grid-cols-2 mx-auto xl:max-w-screen-xl">
          <div className="flex flex-col justify-center items-center min-h-screen -z-20 text-center container lg:col-start-1 lg:col-end-2 lg:text-left">
            <h2 className="text-[3.5rem] text-tdk-blue-light-headlines font-playfair font-black pb-4 lg:text-8xl lg:pb-8 lg:mt-12 lg:self-start dark:text-tdk-blue-200">
              Sangprøven
            </h2>
            <p className="px-8 max-w-prose text-tdk-blue-light-buttonsSubheadings lg:text-xl lg:pr-12 lg:px-0 dark:text-tdk-blue-400">
              Bliv en del af vores musikalske fællesskab gennem en enkel
              sangprøve. Vi søger drenge, der elsker at synge og har den
              nødvendige musikalitet for at skabe store musikoplevelser sammen.
            </p>
            <div className="my-10 lg:self-start">
              <Link
                className="py-4 px-6 font-medium rounded-md text-tdk-blue-light-background bg-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-700 dark:bg-tdk-yellow-400"
                href="mailto:lonegislinge@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tilmeld dit barn i dag
              </Link>
            </div>
          </div>
          <Image
            className="w-screen lg:col-start-2 lg:col-end-3 lg:absolute lg:right-0 lg:-z-10 lg:w-1/2"
            src="/images/sangproeven/boySinging.png"
            alt="Boy singing"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* 2. sektion - Under stemmeprøven ... */}
      <section className="col-start-1 col-end-3 py-16 px-6 text-lg bg-tdk-blue-light-backgroundDark text-tdk-blue-light-buttonsSubheadings lg:text-xl dark:bg-tdk-green-700 dark:text-tdk-green-400">
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
      <section className="flex flex-col mx-auto lg:grid lg:grid-cols-2 ">
        <Image
          className="order-1 w-screen lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
          src="/images/sangproeven/mathiasFrederikAnders.jpg"
          alt="Boys singing"
          width={400}
          height={400}
        />

        <div className="text-center py-12 px-6 bg-tdk-blue-light-background lg:col-start-2 lg:col-end-3 lg:mx-0 lg:px-0 lg:pl-16 lg:text-left dark:bg-tdk-blue-700">
          <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:col-start-2 lg:col-end-7 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
            Alderstrin og forskolen
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="max-w-prose mx-auto text-base lg:text-left lg:px-0 lg:mx-0 lg:text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400">
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
        <section className="grid mx-auto xl:max-w-screen-xl lg:grid lg:grid-cols-2">
          <div className="mx-auto text-center py-12 px-6  dark:text-tdk-green-400 lg:grid lg:col-start-1 lg:col-end-2 lg:mx-0 lg:px-0 lg:text-left">
            <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
              Musikalsk fællesskab
            </h3>
            {/* Too many mx-auto classes! */}
            <p className="max-w-prose mx-auto text-base lg:pr-8 lg:text-base lg:mx-0 text-tdk-blue-light-headlines dark:text-tdk-green-400">
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
      <section className="flex flex-col items-center pb-16 pt-12 px-6 bg-tdk-blue-light-background text-tdk-blue-light-buttonsSubheadings lg:py-16 lg:text-xl lg:relative dark:bg-tdk-blue-700 dark:text-tdk-blue-400">
        <h3 className="font-playfair font-black text-4xl text-tdk-blue-light-headlines mb-6 lg:text-center lg:text-5xl dark:text-tdk-blue-200">
          Hvor og hvornår?
        </h3>
        <p className="max-w-prose mb-8 text-center text-base">
          Sangprøven afholdes årligt i maj og juni måned i Treenighedskirken.
          Efter en vellykket prøve vil optagelse og start i Forskolen finde sted
          i august.
        </p>
        <Link
          className="py-4 px-6 font-medium rounded-md text-base text-tdk-blue-light-background bg-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-700 dark:bg-tdk-yellow-400"
          href="mailto:lonegislinge@gmail.com"
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
