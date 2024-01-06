"use client";

import { useEffect, useState } from "react";

import { getResultList } from "@/pocketbase/getUsers";
// import { useGetAllEvents } from "../_utils/server-actions";
import { format } from "date-fns";
import { da } from "date-fns/locale";

import { IRecord } from "@/types/interfaces";

const EventsCards = () => {
  const [resultList, setResultList] = useState<IRecord[] | null>(null);

  const dayAndMonth = (date: string) => {
    const newDate = new Date(date);
    return format(newDate, "dd. MMM", { locale: da });
  };

  const time = (date: string) => {
    const newDate = new Date(date);
    return format(newDate, "HH:mm", { locale: da });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { mappedResultList } = await getResultList();
      setResultList(mappedResultList);
    };
    fetchData();
  }, []);

  // const { events, eventsError } = await useGetAllEvents();
  // console.log("events", events);

  // console.log(resultList);

  return (
    <>
      {resultList &&
        resultList?.map((result) => (
          <div
            key={result.id}
            className="mb-4 grid grid-cols-12 gap-4 overflow-hidden rounded-md dark:bg-tdk-blue-cardBg max-md:mx-2"
          >
            <div className="col-start-1 col-end-5 flex flex-col justify-center bg-tdk-blue-300 pl-6 dark:bg-tdk-blue-400 dark:text-tdk-blue-700 lg:col-end-4 lg:px-8">
              <p className="font-bold leading-8">{dayAndMonth(result.date)}</p>
              <p className="text-base lg:text-sm">{time(result.date)}</p>
            </div>
            <div className="col-start-5 col-end-13 px-2 py-4 lg:col-start-4 lg:px-4">
              <h4 className="truncate font-roboto text-xl font-medium leading-loose text-tdk-blue-light-headlines dark:text-tdk-blue-200 lg:text-2xl">
                {result.title}
              </h4>
              <p className="text-sm line-clamp-2">{result.body}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default EventsCards;
