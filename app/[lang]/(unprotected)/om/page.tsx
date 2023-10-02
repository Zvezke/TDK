import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }: { params: { lang: "da" | "en" } }) => {
  const { aboutPage } = await getDictionary(params.lang);
  return (
    <>
      {/* 1. sektion - Hero section */}
      <section>
        <div className="relative flex items-end justify-center">
          {/* TODO: Fix the image positioning */}
          <Image
            className="h-screen w-screen object-cover"
            src="/images/om/heroKoropstilling.png"
            alt="Koropstilling"
            width={1920}
            height={1080}
          />
          <div className="absolute px-2 pb-12 xl:max-w-screen-xl">
            <div className="grid place-content-end max-md:text-center md:grid-cols-2">
              <h2 className="font-playfair text-3xl font-black text-tdk-blue-200 max-md:mb-12 lg:text-5xl">
                {aboutPage.title}
              </h2>
              <p className="place-self-end font-roboto text-lg text-tdk-blue-200 lg:text-xl">
                {aboutPage.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Korets historie */}
      <div className="bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700">
        <section className="mx-auto grid lg:grid lg:grid-cols-2 xl:max-w-screen-xl">
          <div className="mx-auto py-12 px-6 text-center  dark:text-tdk-green-400 lg:col-start-1 lg:col-end-2 lg:mx-0 lg:grid lg:px-0 lg:text-left">
            <h3 className="mb-6 font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:text-left lg:text-5xl">
              {aboutPage.historyTitle}
            </h3>
            {/* Too many mx-auto classes! */}
            <p className="mx-auto max-w-prose text-base text-tdk-blue-light-headlines dark:text-tdk-green-400 lg:mx-0 lg:pr-8 lg:text-base">
              {aboutPage.historyDescription}
              <br />
              <br />
              {aboutPage.historyDescriptionContinued}
            </p>
          </div>
          <Image
            className="order-1 w-screen lg:absolute lg:right-0 lg:w-1/2 lg:object-cover"
            src="/images/om/koretsHistorieSoftLight.png"
            alt="Korets historie"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* Organisation og uddannelse */}
      {/* Mobil */}
      <div className="flex h-full w-full flex-col items-center justify-between bg-tdk-blue-light-background text-center dark:bg-tdk-blue-700 lg:hidden ">
        <div className="py-12 px-6 text-center">
          <h3 className="font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:text-5xl">
            {aboutPage.organizationTitle}
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="max-w-prose text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:mx-0 lg:px-0 lg:text-base">
            {aboutPage.organizationDescription}
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
      <div className="relative top-0 left-0 flex h-full w-full flex-col items-center justify-between text-center max-lg:hidden">
        <section className="flex flex-col">
          <Image
            className="w-screen"
            src="/images/om/koropstilling2.jpg"
            alt="Koropstilling"
            width={1920}
            height={1080}
          />
        </section>
        <section className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-between py-12 px-6 text-center text-tdk-blue-400">
          <h3 className="mb-6 font-playfair text-5xl font-bold ">
            {aboutPage.organizationTitle}
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="mx-auto max-w-prose text-base text-tdk-blue-400 lg:text-base">
            {aboutPage.organizationDescription}
          </p>
        </section>
      </div>
      {/* IMG, Koropstilling2 */}

      {/* Koncerter og repertoire */}
      <div className="bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700">
        <section className="mx-auto grid lg:grid lg:grid-cols-2 xl:max-w-screen-xl">
          <div className="mx-auto py-12 px-6 text-center  dark:text-tdk-green-400 lg:col-start-1 lg:col-end-2 lg:mx-0 lg:grid lg:px-0 lg:text-left">
            <h3 className="mb-6 font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:text-left lg:text-5xl">
              {aboutPage.concertsTitle}
            </h3>
            {/* Too many mx-auto classes! */}
            <p className="mx-auto max-w-prose text-base text-tdk-blue-light-headlines dark:text-tdk-green-400 lg:mx-0 lg:pr-8 lg:text-base">
              {aboutPage.concertsDescription}
            </p>
          </div>
          <Image
            className="order-1 w-screen object-top lg:absolute lg:right-0 lg:w-1/2"
            src="/images/om/koncerterRepertoireHardLight.png"
            alt="Koncert med kor og ensemble"
            width={640}
            height={426}
          />
        </section>
      </div>

      {/* Rejser og fællesoplevelser */}
      <section className="mx-auto flex flex-col lg:grid lg:grid-cols-2 ">
        <Image
          className="order-1 w-screen max-lg:hidden lg:absolute lg:left-0 lg:-z-10 lg:w-1/2"
          src="/images/om/rejserFaellesoplevelser.png"
          alt="Koret på tur"
          width={1000}
          height={667}
        />
        <Image
          className="order-1 w-screen lg:hidden"
          src="/images/om/rejserFaellesoplevelserMobil.png"
          alt="Koret på tur"
          width={1000}
          height={667}
        />
        <div className="relative bg-tdk-blue-light-background py-12 px-6 text-center dark:bg-tdk-blue-700 lg:col-start-2 lg:col-end-3 lg:mx-0 lg:px-0 lg:pl-16 lg:text-left">
          <h3 className="mb-6 font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:col-start-2 lg:col-end-7 lg:text-left lg:text-5xl">
            {aboutPage.travelTitle}
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="mx-auto max-w-prose text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:mx-0 lg:px-0 lg:text-left lg:text-base">
            {aboutPage.travelDescription}
          </p>
        </div>
        {/* <Image
          // className="order-1 w-screen lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
          className="order-1 w-screen lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
          src="/images/om/partnerskaberSamarbejde.jpg"
          alt="Koropstilling i Treenighedskirken"
          width={960}
          height={304}
        /> */}
      </section>

      {/* Lones udtalelse */}
      <section className="relative col-start-1 col-end-3 bg-tdk-blue-light-backgroundDark py-12 px-6 text-center text-lg dark:bg-tdk-green-700 lg:text-xl">
        <div className="mx-auto max-w-prose">
          <h3 className="mb-6 font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-green-300 lg:text-5xl">
            {aboutPage.lonesStatementTitle}
          </h3>
          <div className="text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-green-400">
            <p>{aboutPage.lonesStatement}</p>
            <br />
            <p>{aboutPage.lonesStatementContinued}</p>
            <br />
            <p>{aboutPage.lonesStatementFinal}</p>
          </div>
        </div>
        <div className="mt-12 mb-4 lg:self-start">
          {/* <Link
            className="py-2 lg:py-4 lg:mr-8 px-4 lg:px-6 rounded-md text-tdk-blue-light-backgroundDark bg-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-700 dark:bg-tdk-yellow-400"
            href="mailto:lonegislinge@gmail.com?subject=Ang.%20tilmelding%20til%20Treenighedskirkens%20drengekor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tilmeld dit barn i dag
          </Link> */}
          <Link
            className="rounded-md border-2 border-tdk-blue-light-buttonsSubheadings bg-tdk-blue-light-buttonsSubheadings py-2 px-4 text-sm font-medium text-tdk-blue-light-background dark:border-tdk-orange-400 dark:bg-tdk-orange-400 dark:text-tdk-green-700 lg:py-4 lg:px-6"
            href="mailto:lonegislinge@gmail.com?subject=Ang.%20tilmelding%20til%20Treenighedskirkens%20drengekor"
            target="_blank"
            rel="noopener noreferrer"
          >
            {aboutPage.lonesStatementButton}
          </Link>
        </div>
      </section>

      {/* Lone og CV */}
      <section className="mx-auto flex flex-col lg:grid lg:grid-cols-2 ">
        <Image
          className="w-screen lg:absolute lg:left-0 lg:-z-10 lg:h-full lg:w-1/2 lg:object-cover"
          src="/images/om/lone.jpg"
          alt="Lone Gislinge"
          width={1920}
          height={1080}
        />
        <div className="relative bg-tdk-blue-light-background py-12 px-6 text-center dark:bg-tdk-blue-700 lg:col-start-2 lg:col-end-3 lg:mx-0 lg:px-0 lg:pl-16 lg:text-left">
          {/* <h3 className="font-playfair font-bold text-4xl text-tdk-blue-light-headlines mb-6 lg:col-start-2 lg:col-end-7 lg:text-left lg:text-5xl dark:text-tdk-blue-200">
            CV, Lone Gislinge
          </h3> */}
          {/* Too many mx-auto classes! */}
          <p className="mx-auto max-w-prose text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:mx-0 lg:px-0 lg:text-left lg:text-base">
            {aboutPage.loneGislingeDescription}
            <br />
            <br />
            {aboutPage.loneGislingeDescriptionContinued1}
            <br />
            <br />
            {aboutPage.loneGislingeDescriptionContinued2}
            <br />
            <br />
            {aboutPage.loneGislingeDescriptionFinal}
          </p>
        </div>
      </section>

      {/* Radio- og TV-optrædener */}
      <div className="bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700">
        <section className="mx-auto grid lg:grid lg:grid-cols-2 xl:max-w-screen-xl">
          <Image
            // className="order-1 w-screen lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
            className="w-screen lg:absolute lg:left-0 lg:-z-10 lg:hidden lg:w-1/2"
            src="/images/om/partnerskaberSamarbejdeMobil.jpg"
            alt="Koropstilling i Treenighedskirken"
            width={960}
            height={594}
          />
          <div className="mx-auto py-12 px-6 text-center  dark:text-tdk-green-400 lg:col-start-1 lg:col-end-2 lg:mx-0 lg:grid lg:px-0 lg:text-left">
            <h3 className="mb-6 font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:text-left lg:text-5xl">
              {aboutPage.radioTVTitle}
            </h3>
            {/* Too many mx-auto classes! */}
            <p className="mx-auto max-w-prose text-base text-tdk-blue-light-headlines dark:text-tdk-green-400 lg:mx-0 lg:pr-8 lg:text-base">
              {aboutPage.radioTVDescription}
            </p>
          </div>
          <Image
            className="order-1 w-screen lg:absolute lg:right-0 lg:w-1/2"
            src="/images/om/boysSinging.png"
            alt="Syngende drenge"
            width={813}
            height={350}
          />
        </section>
      </div>
      {/* Partnerskaber og samarbejde */}
      <section className="mx-auto flex flex-col lg:grid lg:grid-cols-2 ">
        <Image
          // className="order-1 w-screen lg:absolute lg:left-0 lg:w-1/2 lg:-z-10"
          className="order-1 w-screen max-lg:hidden lg:absolute lg:left-0 lg:-z-10 lg:w-1/2"
          src="/images/om/partnerskaberSamarbejde.jpg"
          alt="Koropstilling i Treenighedskirken"
          width={960}
          height={304}
        />
        <div className="relative bg-tdk-blue-light-background py-12 px-6 text-center dark:bg-tdk-blue-700 lg:col-start-2 lg:col-end-3 lg:mx-0 lg:px-0 lg:pl-16 lg:text-left">
          <h3 className="mb-6 font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:col-start-2 lg:col-end-7 lg:text-left lg:text-5xl">
            {aboutPage.partnershipsTitle}
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="mx-auto max-w-prose text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:mx-0 lg:px-0 lg:text-left lg:text-base">
            {aboutPage.partnershipsDescription}
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
