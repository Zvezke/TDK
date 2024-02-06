// Import React components
// import { Suspense } from "react";

// Import dependencies
// import { da } from "date-fns/locale";
// import { utcToZonedTime, format } from "date-fns-tz";

// Components
import TravelsPreferences from "./TravelsPreferences";

// Actions
import { useGetTravels } from "../lib/server-actions";

// Utils
import { convertRichTextToHtml, RichTextDoc } from "../utils/richTextUtils";
import Image from "next/image";
// import { add } from "date-fns";

// const formatDate = (inputDate: string) => {
//   const utcDate = new Date(inputDate);
//   const zonedDate = utcToZonedTime(utcDate, "Europe/Copenhagen");

//   // Subtract one hour (DST)
//   const adjustedDate = add(zonedDate, { hours: -1 });

//   return format(adjustedDate, "dd. MMMM, 'kl.' HH:mm", { locale: da });
// };

interface EventsProps {
  events?:
    | {
        body: string | null;
        created_at: string;
        date: string | null;
        id: string;
        title: string | null;
      }[]
    | null;
}

const Travels = async () => {
  const { travels, travelsError } = await useGetTravels();

  // console.log("travels", travels);
  // console.log("travelsError", travelsError);

  if (travelsError) {
    console.log("Error fetching travels", travelsError);
  }

  return (
    <>
      {travels?.map((travel) => (
        // console.log("event", event),
        // <Suspense fallback={<p>Henter begivenheder ...</p>}>
        <div
          key={travel.id}
          className="mb-4 flex items-center justify-between rounded-md border-2 px-4 py-2"
        >
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              {travel?.title}
            </h3>
            <time className="text-xs text-gray-500">
              {travel?.date}
              {/* {formatDate(event?.date as string)} */}
            </time>

            <div
              className="mb-1 mt-2 max-w-prose text-xs text-gray-900"
              dangerouslySetInnerHTML={{
                __html: convertRichTextToHtml(travel?.rich_text as RichTextDoc),
              }}
            />
          </div>
          {travel?.image_url && (
            <Image
              src={travel.image_url as string}
              alt={travel?.title as string}
              width={100}
              height={100}
              objectFit="cover"
              className="rounded-md"
            />
          )}
          <TravelsPreferences eventId={travel.id} />
        </div>
        // </Suspense>
      ))}
    </>
  );
};

export default Travels;
