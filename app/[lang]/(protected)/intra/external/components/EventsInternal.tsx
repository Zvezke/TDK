// Import React components
import { Suspense } from "react";

// Import dependencies
import { da } from "date-fns/locale";
import { utcToZonedTime, format } from "date-fns-tz";

// Import the Loading component
import EventsPreferences from "./EventsPreferences";
import { add } from "date-fns";

const formatDate = (inputDate: string) => {
  const utcDate = new Date(inputDate);
  const zonedDate = utcToZonedTime(utcDate, "Europe/Copenhagen");

  // Subtract two hours (DST)
  const adjustedDate = add(zonedDate, { hours: -2 });

  return format(adjustedDate, "dd. MMMM, 'kl.' HH:mm", { locale: da });
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
        // console.log("event", event),
        // <Suspense fallback={<p>Henter begivenheder ...</p>}>
        <div
          key={event.id}
          className="mb-4 flex items-center justify-between rounded-md border-2 px-4 py-2"
        >
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              {event?.title}
            </h3>
            <time className="text-xs text-gray-500">
              {formatDate(event?.date as string)}
            </time>
            <p className="mb-1 mt-2 max-w-prose text-xs text-gray-900">
              {event?.body}
            </p>
          </div>
          <EventsPreferences eventId={event.id} />
        </div>
        // </Suspense>
      ))}
    </>
  );
};

export default Events;
