import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      {/* 1. sektion - Hero section */}
      <section>
        <div className="flex justify-center items-end relative">
          {/* TODO: Fix the image positioning */}
          <Image
            className="w-screen h-screen object-cover"
            src="/images/om/heroKoropstilling.png"
            alt="Koropstilling"
            width={1920}
            height={1080}
          />
          <div className="xl:max-w-screen-xl pb-12 px-2 absolute">
            <div className="grid md:grid-cols-2 max-md:text-center place-content-end">
              <h2 className="max-md:mb-12 text-tdk-blue-200 font-playfair font-black text-3xl lg:text-5xl">
                Treenighedskirkens drenge- og mandskor
              </h2>
              <p className="place-self-end text-tdk-blue-200 font-roboto text-lg lg:text-xl">
                Grundig musikundervisning. Stemmetræning. Koncertoplevelser.
                Varieret rigt repertoire. Udenlandsrejser. Stærkt fællesskab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Korets historie */}
      <div className="bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700">
        <section className="grid mx-auto xl:max-w-screen-xl lg:grid lg:grid-cols-2">
          <div className="mx-auto text-center py-12 px-6  dark:text-tdk-green-400 lg:grid lg:col-start-1 lg:col-end-2 lg:mx-0 lg:px-0 lg:text-left">
            <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
              Korets historie
            </h3>
            {/* Too many mx-auto classes! */}
            <p className="max-w-prose mx-auto text-base lg:pr-8 lg:text-base lg:mx-0 text-tdk-blue-light-headlines dark:text-tdk-green-400">
              Historien om Treenighedskirkens Drenge- & mandskor går tilbage til
              1964, hvor organist Per Günther grundlagde koret. Det virkede som
              fast kor ved kirkens gudstjenester frem til 1989. Koret er
              inspireret af dygtige engelske kor og bevarer en speciel
              kortradition i Danmark.
            </p>
          </div>
          <Image
            className="order-1 w-screen lg:absolute lg:right-0 lg:w-1/2"
            src="/images/sangproeven/prototype1.png"
            alt="Boys singing"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* Organisation og uddannelse */}
      <section className="flex flex-col mx-auto lg:grid lg:grid-cols-2 ">
        <Image
          className="order-1 w-screen max-lg:hidden lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
          src="/images/sangproeven/prototype1.png"
          alt="Boys singing"
          width={400}
          height={400}
        />

        <div className="text-center py-12 px-6 bg-tdk-blue-light-background lg:col-start-2 lg:col-end-3 lg:mx-0 lg:px-0 lg:pl-16 lg:text-left dark:bg-tdk-blue-700 relative">
          <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:col-start-2 lg:col-end-7 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
            Organisation og uddannelse
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="max-w-prose mx-auto text-base lg:text-left lg:px-0 lg:mx-0 lg:text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400">
            Korets organisation består af cirka 50 drenge og mænd. Drengene
            starter i forskolen, hvor de undervises i stemmetræning, hørelære og
            teori, inden de optages i koret. Nogle fortsætter som mandssangere
            efter stemmeovergangen.
          </p>
        </div>
      </section>

      {/* IMG, Koropstilling2 */}
      <Image
        className="w-screen relative"
        src="/images/om/koropstilling2.jpg"
        alt="Koropstilling"
        width={1920}
        height={1080}
      />

      {/* Koncerter og repertoire */}
      <div className="bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700">
        <section className="grid mx-auto xl:max-w-screen-xl lg:grid lg:grid-cols-2">
          <div className="mx-auto text-center py-12 px-6  dark:text-tdk-green-400 lg:grid lg:col-start-1 lg:col-end-2 lg:mx-0 lg:px-0 lg:text-left">
            <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
              Koncerter og repertoire
            </h3>
            {/* Too many mx-auto classes! */}
            <p className="max-w-prose mx-auto text-base lg:pr-8 lg:text-base lg:mx-0 text-tdk-blue-light-headlines dark:text-tdk-green-400">
              Koret deltager i tjenester i Treenighedskirken og afholder
              koncerter lokalt og nationalt. Samarbejde med andre musikgrupper
              fører til opførelse af større værker. Repertoiret spænder fra
              traditionelt kirkeligt korrepertoire til værker fra moderne
              komponister.
            </p>
          </div>
          <Image
            className="order-1 w-screen lg:absolute lg:right-0 lg:w-1/2"
            src="/images/sangproeven/prototype1.png"
            alt="Boys singing"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* Rejser og fællesoplevelser */}
      <section className="flex flex-col mx-auto lg:grid lg:grid-cols-2 ">
        <Image
          className="order-1 w-screen max-lg:hidden lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
          src="/images/sangproeven/prototype1.png"
          alt="Boys singing"
          width={400}
          height={400}
        />
        <div className="text-center py-12 px-6 bg-tdk-blue-light-background lg:col-start-2 lg:col-end-3 lg:mx-0 lg:px-0 lg:pl-16 lg:text-left dark:bg-tdk-blue-700 relative">
          <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:col-start-2 lg:col-end-7 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
            Rejser og fællesoplevelser
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="max-w-prose mx-auto text-base lg:text-left lg:px-0 lg:mx-0 lg:text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400">
            Rejser i udlandet er en vigtig del af korets fællesoplevelser. Koret
            har optrådt i mange europæiske lande, Canada og USA, i kendte kirker
            og katedraler. Disse ture styrker fællesskabet og giver
            uforglemmelige minder.
          </p>
        </div>
      </section>

      {/* IMG, Lone */}
      {/* Hvid linje? */}
      <Image
        className="w-screen relative"
        src="/images/om/lone.jpg"
        alt="Lone Gislinge"
        width={1920}
        height={1080}
      />
      {/* Lones udtalelse */}
      <section className="col-start-1 col-end-3 py-16 px-6 text-lg lg:text-xl text-center text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 bg-tdk-blue-light-background dark:bg-tdk-blue-700">
        <div className="max-w-prose mx-auto">
          <h3 className="text-3xl font-playfair font-black text-tdk-blue-light-headlines mb-8 lg:text-5xl dark:text-tdk-blue-200">
            Korleder, Lone Gislinge
          </h3>
          <p>
            “Igennem de over 30 år jeg har arbejdet med Drengekoret, er det min
            erfaring, at mange drenge som udgangspunkt er skeptiske overfor det
            at synge i kor. Korsang blandt drenge har ingen høj status!
          </p>
          <br />
          <p>
            Jeg har dog oplevet igen og igen at drengene, når de prøver at synge
            sammen med de andre musikalske drenge på ”1. holdet”, bliver
            overraskede – og optagede af at deltage i korprøver og undervisning
            sammen med det sociale samvær og kammeratskab de hurtigt etablerer.
          </p>
          <br />
          <p>
            Jeg håber derfor at mange drenge fortsat vil give denne enestående
            mulighed for at dyrke- og udvikle sin musikalitet en chance.”
          </p>
        </div>
        <div className="mt-12 mb-4 lg:self-start">
          <Link
            className="py-4 px-6 rounded-md text-tdk-blue-light-background bg-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-700 dark:bg-tdk-yellow-400"
            href="/kontakt"
          >
            Tilmeld dit barn i dag
          </Link>
        </div>
      </section>

      {/* Radio- og TV-optrædener */}
      <div className="bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700">
        <section className="grid mx-auto xl:max-w-screen-xl lg:grid lg:grid-cols-2">
          <div className="mx-auto text-center py-12 px-6  dark:text-tdk-green-400 lg:grid lg:col-start-1 lg:col-end-2 lg:mx-0 lg:px-0 lg:text-left">
            <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
              Radio- og TV-optrædener
            </h3>
            {/* Too many mx-auto classes! */}
            <p className="max-w-prose mx-auto text-base lg:pr-8 lg:text-base lg:mx-0 text-tdk-blue-light-headlines dark:text-tdk-green-400">
              Koret har jævnligt optrådt i dansk radio og tv samt i andre lande.
              Disse optrædener bidrager til korets synlighed og anerkendelse, og
              de bringer musikken ud til et bredere publikum.
            </p>
          </div>
          <Image
            className="order-1 w-screen lg:absolute lg:right-0 lg:w-1/2"
            src="/images/sangproeven/prototype1.png"
            alt="Boys singing"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* Rejser og fællesoplevelser */}
      <section className="flex flex-col mx-auto lg:grid lg:grid-cols-2 ">
        <Image
          className="order-1 w-screen max-lg:hidden lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
          src="/images/sangproeven/prototype1.png"
          alt="Boys singing"
          width={400}
          height={400}
        />
        <div className="text-center py-12 px-6 bg-tdk-blue-light-background lg:col-start-2 lg:col-end-3 lg:mx-0 lg:px-0 lg:pl-16 lg:text-left dark:bg-tdk-blue-700 relative">
          <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:col-start-2 lg:col-end-7 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
            Partnerskaber og samarbejde
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="max-w-prose mx-auto text-base lg:text-left lg:px-0 lg:mx-0 lg:text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400">
            Koret samarbejder med Esbjerg Kommune og Vestjysk
            Musikkonservatorium for at bevare og videreføre korets traditioner.
            Disse partnerskaber sikrer korets fortsatte succes og udvikling.
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;

// Blue background: bg-tdk-blue-light-background dark:bg-tdk-blue-700
// Text on blue background: text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400

// Green background: bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700
// Text on green background: text-tdk-blue-light-buttonsSubheadings dark:text-tdk-green-400
