import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }: { params: { lang: "da" | "en" } }) => {
  const { sangproeven } = await getDictionary(params.lang);
  return (
    <>
      {/* 1. sektion - Sangprøven */}
      <div className="relative -z-20 bg-tdk-blue-light-background dark:bg-tdk-blue-700">
        <section className="mx-auto grid lg:grid-cols-2 xl:max-w-screen-xl">
          <div className="container -z-20 flex min-h-screen flex-col items-center justify-center text-center lg:col-start-1 lg:col-end-2 lg:text-left">
            <h2 className="pb-4 font-playfair text-[3.5rem] font-black text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:mt-12 lg:self-start lg:pb-8 lg:text-8xl">
              {sangproeven.sangproevenTitle}
            </h2>
            <p className="max-w-prose px-8 text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:px-0 lg:pr-12 lg:text-xl">
              {sangproeven.sangproevenDescription}
            </p>
            <div className="my-10 lg:self-start">
              <Link
                className="rounded-md bg-tdk-blue-light-buttonsSubheadings py-4 px-6 font-medium text-tdk-blue-light-background dark:bg-tdk-yellow-400 dark:text-tdk-blue-700"
                href="mailto:lonegislinge@gmail.com?subject=Ang.%20tilmelding%20til%20Treenighedskirkens%20drengekor"
                target="_blank"
                rel="noopener noreferrer"
              >
                {sangproeven.sangproevenButton}
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
          {sangproeven.voiceTestIntro}
        </p>
        <br />
        <p className="mx-auto max-w-prose text-center">
          {sangproeven.voiceTestConclusion}
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
            {sangproeven.ageAndPreSchoolTitle}
          </h3>
          {/* Too many mx-auto classes! */}
          <p className="mx-auto max-w-prose text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:mx-0 lg:px-0 lg:text-left lg:text-base">
            {sangproeven.ageAndPreSchoolDescription}
          </p>
        </div>
      </section>
      {/* Musikalsk fællesskab */}
      <div className="bg-tdk-blue-light-backgroundDark dark:bg-tdk-green-700">
        <section className="mx-auto grid lg:grid lg:grid-cols-2 xl:max-w-screen-xl">
          <div className="mx-auto py-12 px-6 text-center  dark:text-tdk-green-400 lg:col-start-1 lg:col-end-2 lg:mx-0 lg:grid lg:px-0 lg:text-left">
            <h3 className="mb-6 font-playfair text-4xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:text-left lg:text-5xl">
              {sangproeven.musicalCommunityTitle}
            </h3>
            {/* Too many mx-auto classes! */}
            <p className="mx-auto max-w-prose text-base text-tdk-blue-light-headlines dark:text-tdk-green-400 lg:mx-0 lg:pr-8 lg:text-base">
              {sangproeven.musicalCommunityDescription}
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
          {sangproeven.whereAndWhenTitle}
        </h3>
        <p className="mb-8 max-w-prose text-center text-base">
          {sangproeven.whereAndWhenDescription}
        </p>
        <Link
          className="rounded-md bg-tdk-blue-light-buttonsSubheadings py-4 px-6 text-base font-medium text-tdk-blue-light-background dark:bg-tdk-yellow-400 dark:text-tdk-blue-700"
          href="mailto:lonegislinge@gmail.com?subject=Ang.%20tilmelding%20til%20Treenighedskirkens%20drengekor"
          target="_blank"
          rel="noopener noreferrer"
        >
          {sangproeven.whereAndWhenButton}
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
