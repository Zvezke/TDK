// Import React components
import { Suspense } from "react";

// Import dependencies
import { format, parseISO } from "date-fns";
import { da } from "date-fns/locale";

// Import the Loading component
import Loading from "../../../../components/loading";
import CardHeading from "../../../../components/cardHeadings";
import EventsPreferences from "./EventsPreferences";

const formatDate = (inputDate: string) => {
  const date = parseISO(inputDate);
  return format(date, "d. MMMM, 'kl.' HH:mm", { locale: da });
};

interface EventsProps {
  events:
    | {
        body: string | null;
        created_at: string;
        date: string | null;
        id: string;
        title: string | null;
      }[]
    | null;
}

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <>
      {events?.map((event) => (
        <Suspense fallback={<p>Henter begivenheder ...</p>}>
          <div className="flex border-2 px-4 py-2 rounded-md justify-between items-center mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {event?.title}
              </h3>
              <time className="text-xs text-gray-500">
                {formatDate(event?.date as string)}
              </time>
              <p className="text-xs mt-2 mb-1 text-gray-900 max-w-prose">
                {event?.body}
              </p>
            </div>
            <EventsPreferences eventId={event.id} />
          </div>
        </Suspense>
      ))}
    </>
  );
};

export default Events;
