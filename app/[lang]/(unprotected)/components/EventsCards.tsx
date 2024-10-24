import { useGetAllEvents } from "../utils/server-actions";
import { format } from "date-fns";
import { da } from "date-fns/locale";
import EventsExternal from "./EventsExternal";

const EventsCards = async () => {
  // Fetch all events from the server
  const { events, eventsError } = await useGetAllEvents();

  // Log any errors that occur while fetching events
  if (eventsError) {
    console.log("EventsCards, eventsError", eventsError);
  }

  return (
    <>
      {/* Render the EventsExternal component with the fetched events */}
      <EventsExternal events={events} />
    </>
  );
};

export default EventsCards;
