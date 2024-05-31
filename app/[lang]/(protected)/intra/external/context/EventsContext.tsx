"use client";

import { createContext, useContext, useState } from "react";

type EventProps = {
  id: string;
  created_at: string;
  title: string | null;
  body: string | null;
  date: string | null;
};

type SelectedEventProps = EventProps | null;

const useSelectedEventState = (initialEvent: SelectedEventProps) =>
  useState<SelectedEventProps>(initialEvent ?? null);

const useEventsState = (initialEvents: EventProps[]) =>
  useState<EventProps[]>(initialEvents);

export const SelectedEventContext = createContext<
  ReturnType<typeof useSelectedEventState>
>([null, () => null]);

export const EventsContext = createContext<ReturnType<typeof useEventsState>>([
  [],
  () => null,
]);

export const useEvents = () => {
  const events = useContext(EventsContext);

  if (!events) {
    throw new Error("useEvent must be used within a EventProvider");
  }
  return events;
};

export const useSelectedEvent = () => {
  const selectedEvent = useContext(SelectedEventContext);

  if (!selectedEvent) {
    throw new Error("useSelectedEvent must be used within a EventProvider");
  }
  return selectedEvent;
};

const EventsProvider = ({
  children,
  events: initialEvents,
}: {
  children: React.ReactNode;
  events: EventProps[];
}) => {
  const [events, setEvents] = useEventsState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useSelectedEventState(null);

  return (
    <EventsContext.Provider value={[events, setEvents]}>
      <SelectedEventContext.Provider value={[selectedEvent, setSelectedEvent]}>
        {children}
      </SelectedEventContext.Provider>
    </EventsContext.Provider>
  );
};

export default EventsProvider;
