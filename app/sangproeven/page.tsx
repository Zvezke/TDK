import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      {/* 1. sektion - Sangprøven */}
      <div className="bg-tdk-blue-700 relative -z-20">
        <section className="grid lg:grid-cols-2 mx-auto xl:max-w-screen-xl">
          <div className="flex flex-col justify-center items-center min-h-screen -z-20 text-center order-1 container lg:col-start-1 lg:col-end-2 lg:text-left">
            <h2 className="text-[3.5rem] font-playfair font-black pb-4 lg:text-8xl lg:pb-8 lg:mt-12 lg:self-start dark:text-tdk-blue-200">
              Sangprøven
            </h2>
            <p className="px-8 max-w-prose lg:text-xl lg:pr-12 lg:px-0 dark:text-tdk-blue-400">
              Bliv en del af vores musikalske fællesskab gennem en enkel
              sangprøve. Vi søger drenge, der elsker at synge og har den
              nødvendige musikalitet for at skabe vidunderlige musikoplevelser
              sammen.
            </p>
            <div className="my-10 lg:self-start">
              <Link
                className="py-4 px-6 rounded-md dark:bg-tdk-yellow-400"
                href="/kontakt"
              >
                Tilmeld dit barn i dag
              </Link>
            </div>
          </div>
          <Image
            // Fix billedet
            className="order-2 lg:col-start-2 lg:col-end-3 lg:absolute lg:right-0 lg:-top-12 lg:-z-10 lg:w-1/2"
            src="/images/sangproeven/boySinging.png"
            alt="Boy singing"
            width={400}
            height={400}
          />
        </section>
      </div>
      {/* 2. sektion - Under stemmeprøven ... */}
      <section className="py-12 px-8 col-start-1 col-end-3 lg:text-xl dark:bg-tdk-green-700 text-tdk-green-400">
        <p className="mx-auto max-w-prose text-center">
          Under stemmeprøven vil vi lytte efter drenge med lyse stemmer og en
          god sans for musik, herunder rytmik. Du vil blive bedt om at synge et
          vers fra en sang, du kender, for eksempel "I østen stiger solen op".
          Derefter vil du skulle eftersynge forskellige tonekombinationer, synge
          i høje og lave tonelejer og synge uden støtte fra klaveret.
        </p>
        <br />
        <p className="mx-auto max-w-prose text-center">
          Hvis du ikke bliver udvalgt, er det ikke et udtryk for manglende
          talent, men snarere et spørgsmål om at finde den rette stemmetype til
          vores kor.
        </p>
      </section>
      {/* 3. sektion - Alderstrin og forskolen */}
      {/* <section className="py-12 text-xl dark:bg-tdk-green-700 text-tdk-green-400">
        <p className="mx-auto max-w-prose text-center">
          Vi har brug for drenge, der er mellem 8 og 12 år, og som har lyst til
          at synge i et kor. Det er vigtigt, at du har lyst til at synge og
          gerne vil øve dig. Det er også vigtigt, at du har lyst til at deltage
          i en række koncerter og arrangementer.
        </p>
        <br />
        <p className="mx-auto max-w-prose text-center">
          Vi har brug for drenge, der er mellem 8 og 12 år, og som har lyst til
          at synge i et kor. Det er vigtigt, at du har lyst til at synge og
          gerne vil øve dig. Det er også vigtigt, at du har lyst til at deltage
          i en række koncerter og arrangementer.
        </p>
      </section> */}
    </>
  );
};

export default Page;
