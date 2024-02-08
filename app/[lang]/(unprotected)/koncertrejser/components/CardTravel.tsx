// NextJS
import Image from "next/image";
import Link from "next/link";

// Server actions
import { useGetTravels } from "../lib/server-actions";

// Utils
import {
  convertRichTextToHtml,
  RichTextDoc,
} from "@/app/[lang]/(protected)/intra/travels/utils/richTextUtils";
import { formatDate } from "../utils/timeUtils";

// function formatDate(dateString: string): string {
//   const date = new Date(dateString);

//   const options: Intl.DateTimeFormatOptions = {
//     month: "long",
//     year: "numeric",
//   };

//   let formattedDate = date.toLocaleDateString("da-DK", options);

//   formattedDate =
//     formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
//   formattedDate = formattedDate.replace(" ", ", ");

//   return formattedDate;
// }

export default async function CardTravel() {
  const { travels, travelsError } = await useGetTravels();

  if (travelsError) {
    console.log("Error fetching travels", travelsError);
  }

  return (
    <div className="py-24 sm:py-32 lg:col-start-1 lg:col-end-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* {console.log(travels)} */}

        {travels?.map((travel) => (
          <Link
            key={travel.id}
            className="cursor-pointer"
            href={`/koncertrejser/${travel.id}`}
          >
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                  {travel?.image_url && (
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src={travel?.image_url}
                      alt="Group of people on a hill"
                      layout="fill"
                    />
                  )}
                </div>
              </div>
              <div>
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
                    className="rich-text-content-cardtravel line-clamp-6 max-w-xl text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: convertRichTextToHtml(
                        travel?.rich_text as RichTextDoc
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
