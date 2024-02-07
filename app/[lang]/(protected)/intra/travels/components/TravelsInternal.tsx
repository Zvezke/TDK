// Components
import TravelsPreferences from "./TravelsPreferences";

// Actions
import { useGetTravels } from "../lib/server-actions";

// Utils
import { convertRichTextToHtml, RichTextDoc } from "../utils/richTextUtils";
import Image from "next/image";

const Travels = async () => {
  const { travels, travelsError } = await useGetTravels();

  // console.log("travels", travels);
  // console.log("travelsError", travelsError);

  if (travelsError) {
    console.log("Error fetching travels", travelsError);
  }

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString("da-DK", options);
  };

  return (
    <>
      {travels?.map((travel) => (
        <div key={travel.id} className="mb-4 rounded-md border-2 px-4 py-4">
          <div>
            <div className="mb-6 flex justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {travel?.title}
                </h3>
                <time className="text-xs text-gray-500">
                  {/* {travel?.date} */}
                  {formatDate(travel?.date as string)}
                </time>
              </div>
              <div className="flex items-center">
                {travel?.image_url && (
                  <Image
                    src={travel.image_url}
                    alt={travel?.title as string}
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="rounded-md"
                  />
                )}
                <TravelsPreferences
                  travelId={travel.id}
                  travelImageUrl={travel.image_url}
                />
              </div>
            </div>

            <div
              className="rich-text-content mb-1 mt-2 font-roboto text-xs text-gray-900"
              dangerouslySetInnerHTML={{
                __html: convertRichTextToHtml(travel?.rich_text as RichTextDoc),
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Travels;
