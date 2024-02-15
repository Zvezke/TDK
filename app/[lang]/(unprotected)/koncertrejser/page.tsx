import Image from "next/image";
import { Suspense } from "react";
import CardTravel from "./components/CardTravel";

const Page = () => {
  return (
    <div>
      {/* 1. sektion - Hero */}
      <div className="relative bg-tdk-blue-light-background dark:bg-tdk-blue-700">
        <section className="mx-auto grid lg:grid-cols-2 xl:max-w-screen-xl">
          <div className="container flex min-h-screen flex-col justify-center text-center lg:col-start-1 lg:col-end-2 lg:text-left">
            <h2 className="z-10 pb-4 font-playfair text-[3.5rem] font-black text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:mt-12 lg:self-start lg:pb-8 lg:text-8xl">
              Koncertrejser
            </h2>
            <p className="z-10 max-w-prose px-8 text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:px-0 lg:pr-12 lg:text-xl">
              Læs om vores koncertrejser. Læs om internationale optrædener og
              musikalske fællesskab. Kom med og skab uforglemmelige musikalske
              minder.
            </p>
            <Image
              className="absolute lg:right-0"
              src="/images/travels/koncertrejser.jpg"
              alt="Boy singing"
              width={1920}
              height={1080}
            />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            {/*@ts-expect-error Async Server Component*/}
            <CardTravel />
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default Page;
