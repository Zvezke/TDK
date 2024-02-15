// NextJS
import Image from "next/image";

// Utils
import {
  convertRichTextToHtml,
  RichTextDoc,
} from "@/app/[lang]/(protected)/intra/koncertrejser/utils/richTextUtils";
import { formatDate } from "../utils/timeUtils";

// Server actions
import { useGetTravel } from "../lib/server-actions";

export default async function Page({ params }: { params: { id: string } }) {
  const { travel, travelError } = await useGetTravel(params.id);

  if (travelError) {
    console.log("Error fetching travel", travelError);
  }

  return (
    <div className="min-h-screen bg-tdk-blue-light-background dark:bg-tdk-blue-700">
      <section className="">
        <div className="relative h-[90vh] lg:col-start-2 lg:col-end-3">
          {/* <div className="absolute  inset-0 z-10 bg-black opacity-50"></div> */}
          <Image
            className="absolute left-0 top-20 h-[80vh] object-cover"
            src={travel?.image_url as string}
            alt={travel?.title as string}
            width={1920}
            height={1080}
          />
          <div className="flex h-screen w-full items-center justify-center">
            <h2
              className="z-10 px-8 pb-4 text-center font-playfair text-[3.5rem] font-black leading-tight
            text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:pb-8 lg:text-8xl"
            >
              {travel?.title}
            </h2>
          </div>
        </div>
        <div className="row-start-2 mx-auto max-w-2xl items-start gap-x-8 gap-y-16 px-8 sm:gap-y-24 lg:mx-0 lg:max-w-none ">
          <div className="mt-16 flex justify-center">
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <div className="mb-4">
                <h1 className="font-playfair text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {travel?.title}
                </h1>
                <time className="text-xs text-gray-300">
                  {/* {travel?.date} */}
                  {formatDate(travel?.date as string)}
                </time>
              </div>
              <div
                className="rich-text-content-cardtravel max-w-xl pb-16 text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: convertRichTextToHtml(
                    travel?.rich_text as RichTextDoc
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
