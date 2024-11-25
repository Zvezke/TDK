import Image from "next/image";
import { Suspense } from "react";
import CardTravel from "./components/CardTravel";
import { getDictionary } from "@/get-dictionary";
import { Dictionary } from "@/types/dictionary";

const Page = async ({ params }: { params: { lang: "da" | "en" } }) => {
  const { travels } = (await getDictionary(params.lang)) as Dictionary;

  return (
    <div>
      {/* 1. sektion - Hero */}
      <div className="relative bg-tdk-blue-light-background dark:bg-tdk-blue-700">
        <section className="">
          <div className="relative h-[90vh] lg:col-start-2 lg:col-end-3">
            <Image
              className="absolute left-0 top-20 h-[80vh] object-cover"
              src="/images/travels/koncertrejser.jpg"
              alt="Silhouette of group of people standing on a hill"
              width={1920}
              height={1080}
            />
            <div className="mx-auto flex h-screen flex-col justify-center text-center lg:px-0 lg:text-left xl:max-w-screen-xl">
              <h2 className="z-10 px-8 pb-4 font-playfair text-[3.5rem] font-black leading-tight text-tdk-blue-200 lg:px-0 lg:pb-8 lg:text-8xl">
                {travels.title}
              </h2>
              <p className="z-10 mx-auto max-w-prose px-8 text-tdk-blue-400 lg:mx-0 lg:px-0 lg:pr-12 lg:text-xl">
                {travels.description}
              </p>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <CardTravel />
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default Page;
