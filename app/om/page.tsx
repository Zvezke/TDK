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
              Historien om Treenighedskirkens Drenge- &amp; mandskor går tilbage
              til 1964, hvor organist Per Günther grundlagde koret. Det opnåede
              hurtigt stor koncert- og rejsevirksomhed og virkede samtidig som
              fast kor ved kirkens gudstjenester. I 1989 overtog Lone Gislinge
              ledelsen af koret, som ud over koncerter og rejser synger ved
              højtiderne, samt et begrænset antal gudstjenester i
              Treenighedskirken.
              <br />
              <br />I Danmark findes ikke mange drengekor og Treenighedskirkens
              Drenge- og Mandskor er således medvirkende til at bevare en
              speciel kortradition som er unik for hele den sydvestlige region i
              Danmark.
            </p>
          </div>
          <Image
            className="order-1 w-screen lg:object-cover lg:absolute lg:right-0 lg:w-1/2"
            src="/images/om/koretsHistorieSoftLight.png"
            alt="Boys singing"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* Organisation og uddannelse */}
      {/* Mobil */}
      <div className="flex flex-col items-center justify-between text-center w-full h-full bg-tdk-blue-light-background lg:hidden dark:bg-tdk-blue-700 ">
        <div className="text-center py-12 px-6">
          <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines lg:text-5xl dark:text-tdk-blue-200">
            Organisation og uddannelse
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="max-w-prose text-base lg:px-0 lg:mx-0 lg:text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400">
            Korets sammensætning består af cirka 20-25 drenge i soprangruppen og
            20 herrestemmer i mandskoret. Drengene starter i forskolen, hvor de
            undervises i stemmetræning, hørelære og teori, inden de optages i
            koret. Nogle fortsætter i mandskoret efter stemmeovergangen.
          </p>
        </div>
        <Image
          className="w-screen lg:hidden"
          src="/images/om/koropstilling2.jpg"
          alt="Koropstilling"
          width={1920}
          height={1080}
        />
      </div>
      {/* Desktop */}
      <div className="max-lg:hidden relative top-0 left-0 flex flex-col items-center justify-between text-center w-full h-full">
        <section className="flex flex-col">
          <Image
            className="w-screen"
            src="/images/om/koropstilling2.jpg"
            // src="/images/sangproeven/prototype1.png"
            alt="Koropstilling"
            width={1920}
            height={1080}
          />
        </section>
        <section className="flex flex-col justify-between items-center absolute top-0 left-0 text-center py-12 px-6 h-full w-full text-tdk-blue-400">
          <h3 className="font-playfair font-bold text-5xl mb-6 ">
            Organisation og uddannelse
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="max-w-prose mx-auto text-base lg:text-base text-tdk-blue-400">
            Korets sammensætning består af cirka 20-25 drenge i soprangruppen og
            20 herrestemmer i mandskoret. Drengene starter i forskolen, hvor de
            undervises i stemmetræning, hørelære og teori, inden de optages i
            koret. Nogle fortsætter i mandskoret efter stemmeovergangen.
          </p>
        </section>
      </div>
      {/* IMG, Koropstilling2 */}

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
              koncerter lokalt og nationalt. Med hovedvægten lagt på et
              traditionelt korrepertoire suppleret med danske salmer og sange og
              en forkærlighed for engelsk kormusik – netop komponeret for
              drengekor – giver samarbejde med bl.a. Konservatoriets Pigekor og
              Esbjerg Ensemble ligeledes mulighed for opførelser af større
              værker.
            </p>
          </div>
          <Image
            className="order-1 w-screen lg:absolute lg:right-0 lg:w-1/2 object-top"
            src="/images/om/koncerterRepertoireHardLight.png"
            alt="Koncert med kor og ensemble"
            width={640}
            height={426}
          />
        </section>
      </div>
      {/* Rejser og fællesoplevelser */}
      <section className="flex flex-col mx-auto lg:grid lg:grid-cols-2 ">
        <Image
          className="order-1 w-screen max-lg:hidden lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
          src="/images/om/rejserFællesoplevelser.png"
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
            har rejst i det meste af Europa, Canada, USA, Kina og Australien
            Ofte med koncerter i kendte kirker og katedraler. Disse ture styrker
            fællesskabet og giver uforglemmelige minder.
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
            positivt overraskede – og optagede af at deltage i korprøver og
            undervisning. Sammen med det sociale samvær og det kammeratskab de
            hurtigt etablerer, skaber det et solidt fundament for både at
            udvikle stemmens formåen og for at styrke musikglæden.
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
            href="mailto:lonegislinge@gmail.com"
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
              Koret har jævnligt optrådt i dansk radio og tv. Bl.a. har DR-tv
              optaget og genudsendt 60 afsnit af programmet ”Før Søndagen”. På
              koncertrejser samt i andre lande er flere koncerter blevet
              transmitteret ligesom optagelser fra plade/CD-indspilninger er
              blevet sendt som optakt til koncerter. Disse udsendelser bidrager
              til korets synlighed og bringer musikken ud til et bredere
              publikum.
            </p>
          </div>
          <Image
            className="order-1 w-screen lg:absolute lg:right-0 lg:w-1/2"
            src="/images/om/boysSinging.png"
            alt="Syngende drenge"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* Rejser og fællesoplevelser */}
      <section className="flex flex-col mx-auto lg:grid lg:grid-cols-2 ">
        <Image
          className="order-1 w-screen max-lg:hidden lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
          src="/images/om/partnerskaberSamarbejde.jpg"
          alt="Koropstilling i Treenighedskirken"
          width={960}
          height={304}
        />
        <div className="text-center py-12 px-6 bg-tdk-blue-light-background lg:col-start-2 lg:col-end-3 lg:mx-0 lg:px-0 lg:pl-16 lg:text-left dark:bg-tdk-blue-700 relative">
          <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:col-start-2 lg:col-end-7 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
            Partnerskaber og samarbejde
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="max-w-prose mx-auto text-base lg:text-left lg:px-0 lg:mx-0 lg:text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400">
            Koret samarbejder - og modtager driftstilskud fra Esbjerg Kommune og
            Treenighedskirken for at bevare og videreføre korets traditioner.
            Med disse partnerskaber sikres korets fortsatte succes og udvikling.
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
