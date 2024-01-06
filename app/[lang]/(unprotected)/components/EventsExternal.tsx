"use client";

import React, { useState } from "react";
import Link from "next/link";
import EventsModal from "./EventsModal";

import { format } from "date-fns";
import { da } from "date-fns/locale";

const EventsExternal = ({ events }: any) => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const dayAndMonth = (date: string) => {
    const newDate = new Date(date);
    return format(newDate, "dd. MMM", { locale: da });
  };

  const time = (date: string) => {
    const newDate = new Date(date);
    return format(newDate, "HH:mm", { locale: da });
  };

  const handleClick = (eventId: string | null = null) => {
    if (eventId === null || selectedEventId === eventId) {
      setSelectedEventId(null);
    } else {
      setSelectedEventId(eventId);
    }
  };

  return (
    <>
      {events &&
        events?.map((event: Events) => (
          <>
            <Link
              href={"#"}
              className="cursor-pointer"
              onClick={() => handleClick(event?.id as string)}
              scroll={false}
            >
              <div
                key={event.id}
                className="mb-4 grid grid-cols-12 gap-4 overflow-hidden rounded-md dark:bg-tdk-blue-cardBg max-md:mx-2"
              >
                <div className="col-start-1 col-end-5 flex flex-col justify-center bg-tdk-blue-300 pl-6 dark:bg-tdk-blue-400 dark:text-tdk-blue-700 lg:col-end-4 lg:pl-8">
                  <p className="font-bold leading-8">
                    {dayAndMonth(event?.date as string)}
                  </p>
                  <p className="text-base lg:text-sm">
                    {time(event?.date as string)}
                  </p>
                </div>
                <div className="col-start-5 col-end-13 px-2 py-4 lg:col-start-4 lg:px-4">
                  <h4 className="truncate font-roboto text-xl font-medium leading-loose text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:text-2xl">
                    {event.title}
                  </h4>
                  <p className="text-sm line-clamp-2">{event.body}</p>
                </div>
              </div>
            </Link>
            <EventsModal
              event={event}
              open={selectedEventId === event.id}
              handleClick={() => handleClick(event?.id as string)}
            />
          </>
        ))}
    </>
  );
};

export default EventsExternal;
