import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import { Suspense } from "react";
import CardAlbum from "./components/CardAlbum";
import albumsData from "./lib/albums.json";
// import CardTravel from "./components/CardTravel";

const Page = async ({ params }: { params: { lang: "da" | "en" } }) => {
  const { discography } = await getDictionary(params.lang);
  return (
    <div>
      {/* 1. sektion - Hero */}
      <div className="relative bg-tdk-blue-light-background dark:bg-tdk-blue-700">
        <section className="">
          <div className="relative h-[90vh] lg:col-start-2 lg:col-end-3">
            <Image
              className="absolute left-0 top-20 h-[80vh] object-cover"
              src="/images/discography/albumstore.jpg"
              alt="Album store"
              width={1920}
              height={1080}
            />
            <div className="mx-auto flex h-screen flex-col justify-center text-center lg:px-0 lg:text-left xl:max-w-screen-xl">
              <h2
                className="z-10 px-8 pb-4 font-playfair text-[3.5rem] font-black leading-tight text-tdk-blue-light-headlines
            dark:text-tdk-blue-200 lg:px-0 lg:pb-8 lg:text-8xl"
              >
                {discography.title}
              </h2>
              <p className="z-10 mx-auto max-w-prose px-8 text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:mx-0 lg:px-0 lg:pr-12 lg:text-xl">
                {discography.description}
              </p>
            </div>
          </div>

          {/* <div className="relative h-[90vh] lg:col-start-2 lg:col-end-3">
            <h2 className="z-10 pb-4 font-playfair text-[3.5rem] font-black text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:mt-12 lg:self-start lg:pb-8 lg:text-8xl">
              {discography.title}
            </h2>
            <p className="z-10 max-w-prose px-8 text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:px-0 lg:pr-12 lg:text-xl">
              {discography.description}
            </p>
            <Image
              className="absolute lg:right-0"
              src="/images/discography/albumstore.jpg"
              alt="Album store"
              width={1920}
              height={1080}
            />
          </div> */}

          <div className="py-16">
            {albumsData.map((album, index) => (
              <CardAlbum key={index} album={album} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
