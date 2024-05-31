"use client";

// Måske bruge 'With title and pill actions' - https://tailwindui.com/components/application-ui/forms/textareas#component-c8189b6993ca18e9955b370f741b763b

import {
  useSelectedEvent,
  useEvents,
  // useTestEvent,
} from "@/app/[lang]/(protected)/intra/external/context/EventsContext";
import { useState, useEffect } from "react";

import { createDateTimeForSupabase } from "../utils/timeUtils";

// Libraries
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Supabase
import { useCreateEvent } from "../server-actions";

// Types
type FormValues = {
  year: string;
  month: string;
  day: string;
  daytime: string;
  title: string;
  body: string;
};

const schema = z.object({
  year: z.string(),
  month: z.string(),
  day: z.string(),
  daytime: z.string(),
  title: z.string(),
  body: z.string(),
});

const monthNames = [
  "Januar",
  "Februar",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "December",
];

const DatePicker = () => {
  const [testString, setTestString] = useState<string>("Test string");
  const [selectedEvent] = useSelectedEvent();
  // const [events, setEvents] = useEvents();
  const [events, setEvents] = useEvents();
  // const [testEvent, setTestEvent] = useTestEvent();
  const currentDate = new Date();
  const defaultValues = selectedEvent
    ? {
        year: "",
        month: "",
        day: "",
        daytime: "",
        title: "",
        body: "",
      }
    : {
        year: currentDate.getFullYear().toString(),
        month: monthNames[currentDate.getMonth()],
        day: currentDate.getDate().toString(),
        daytime: "15:00",
        title: "",
        body: "",
      };

  const { register, handleSubmit, reset, setValue, formState } =
    useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues,
    });

  // Populate form with selected event data if available
  useEffect(() => {
    if (selectedEvent) {
      const date = new Date(selectedEvent.date as string);
      setValue("year", date.getFullYear().toString());
      setValue("month", monthNames[date.getMonth()]);
      setValue("day", date.getDate().toString());
      setValue("daytime", date.toTimeString().substring(0, 5));
      setValue("title", selectedEvent.title as string);
      setValue("body", selectedEvent.body as string);
    }
  }, [selectedEvent, setValue]);

  const onSubmit = async (data: FormValues) => {
    const { year, month, day, daytime, title, body } = data;

    const dateForSupabase = createDateTimeForSupabase(
      year,
      month,
      day,
      daytime,
    );

    try {
      const eventData = {
        id: selectedEvent?.id as string,
        created_at: selectedEvent?.created_at as string,
        title,
        body,
        date: dateForSupabase,
      };

      const { supabaseEventError } = await useCreateEvent(eventData);
      if (!supabaseEventError) {
        setEvents((prevEvents) => {
          if (selectedEvent) {
            return prevEvents.map((e) =>
              e.id === selectedEvent.id ? eventData : e,
            );
          } else {
            return [...prevEvents, eventData];
          }
        });
        // setTestString("Test string updated");
        // console.log("DatePicker, supabaseEvent", supabaseEvent);
        // setTestEvent({ body: "2" });
        // setEvents((prevEvents) => {
        //   if (selectedEvent) {
        //     return prevEvents.map((e) => (e.id === events?.id ? events : e));
        //   } else {
        //     return [...prevEvents, events];
        //   }
        // });
      }
      //   // Update the events state with the new or updated event
      //   setEvents((prevEvents) => {
      //     const updatedEvents = selectedEvent
      //       ? prevEvents.map((e) => (e.id === event.id ? event : e))
      //       : [...prevEvents, event];

      //     return updatedEvents;
      //   });
      // }
      console.warn("DatePicker, eventError", supabaseEventError);
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  const { errors } = formState;

  return (
    <div className="">
      <form className="grid" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-start gap-4">
          {/* Month */}
          <div className="flex flex-col">
            <label
              htmlFor="Month"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Måned
            </label>
            {/* <div>{testString}</div> */}
            <select
              id="Month"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
              {...register("month")}
            >
              <option>Januar</option>
              <option>Februar</option>
              <option>Marts</option>
              <option>April</option>
              <option>Maj</option>
              <option>Juni</option>
              <option>Juli</option>
              <option>August</option>
              <option>September</option>
              <option>Oktober</option>
              <option>November</option>
              <option>December</option>
            </select>
            {errors.month && <span>{errors.month.message}</span>}
          </div>

          {/* Day */}
          <div className="flex flex-col">
            <label
              htmlFor="Day"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Dag
            </label>
            <select
              id="Day"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
              {...register("day")}
            >
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            {errors.day && <span>{errors.day.message}</span>}
          </div>

          {/* Year */}
          <div className="flex flex-col">
            <label
              htmlFor="year"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              År
            </label>
            <select
              id="year"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
              {...register("year")}
            >
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
            {errors.year && <span>{errors.year.message}</span>}
          </div>

          {/* Daytime */}
          <div className="flex flex-col">
            <label
              htmlFor="daytime"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Tidspunkt
            </label>
            <select
              id="daytime"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
              {...register("daytime")}
            >
              {Array.from({ length: 24 }, (_, i) => [
                `${i.toString().padStart(2, "0")}:00`,
                `${i.toString().padStart(2, "0")}:15`,
                `${i.toString().padStart(2, "0")}:30`,
                `${i.toString().padStart(2, "0")}:45`,
              ])
                .flat()
                .map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
            </select>
            {errors.daytime && <span>{errors.daytime.message}</span>}
          </div>
        </div>

        {/* Title */}
        <label
          htmlFor="title"
          className="mt-4 block text-sm font-medium leading-6 text-gray-900"
        >
          Titel
        </label>
        <input
          type="text"
          id="title"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
          {...register("title")}
          required
        />
        {errors.title && <span>{errors.title.message}</span>}

        {/* Body */}
        <label
          htmlFor="body"
          className="mt-4 block text-sm font-medium leading-6 text-gray-900"
        >
          Beskrivelse
        </label>
        <textarea
          id="body"
          className="mt-2 block h-48 w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
          {...register("body")}
          required
        ></textarea>
        {errors.body && <span>{errors.body.message}</span>}

        {/* Submit button */}
        <button
          className="mt-6 rounded-md bg-tdk-orange-400 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          type="submit"
        >
          {selectedEvent ? "Opdater begivenhed" : "Tilføj begivenhed"}
        </button>
        {/* <button
          className="mt-6 rounded-md bg-tdk-orange-400 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          onClick={() => setTestEvent({ body: "1" })}
        >
          Update TestEvent
        </button> */}
      </form>
    </div>
  );
};

export default DatePicker;
