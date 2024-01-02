"use client";

// import EventSourcePolyfill from "eventsource";
// (global as any).EventSource = EventSourcePolyfill;

// Import React components
import { Fragment, Suspense, useEffect, useState } from "react";

// Next
// import { useRouter } from "next/navigation";

// Server actions
import { useDeleteEvent } from "../server-actions";

// Import dependencies
import { format, parseISO } from "date-fns";
import { da } from "date-fns/locale";

// Import Tailwind components
import { Menu, Transition } from "@headlessui/react";
import {
  CodeBracketIcon,
  EllipsisVerticalIcon,
  FlagIcon,
  PencilSquareIcon,
  MinusCircleIcon,
} from "@heroicons/react/20/solid";

// Import Pocketbase
// import pb from "@/pocketbase/config";

// Import the Loading component
import Loading from "../../../../components/loading";
import CardHeading from "../../../../components/cardHeadings";
import EventsDeleteModal from "./EventsDeleteModal";

// Define the interface for a record
// interface IRecord {
//   id: string;
//   title: string;
//   body: string;
//   date: string;
// }

// Define a function to fetch the records from Pocketbase
// const fetchData = async () => {
//   pb.autoCancellation(false);
//   const records = await pb.collection("events").getFullList({
//     sort: "-date",
//   });
//   // console.log("records", records);
//   const mappedRecords = records.map((record) => {
//     return {
//       id: record.id,
//       title: record.title,
//       body: record.body,
//       date: record.date,
//     };
//   });
//   return mappedRecords;
// };

// const formatDate = (inputDate: string) => {
//   const date = parseISO(inputDate);
//   // console.log("date", date);
//   return format(date, "d. MMMM, 'kl.' HH:mm", { locale: da });
// };

// interface Event {
//   body: string | null;
//   created_at: string;
//   date: string | null;
//   id: string;
//   title: string | null;
// }

// interface EventsProps {
//   events: Event[] | null;
// }

interface EventProps {
  eventId: string | null;
}

// interface EventsProps {
//   events: Events | null;
// }

const EventsPreferences = ({ eventId }: EventProps) => {
  const [open, setOpen] = useState(false);
  console.log("eventId", eventId);

  const handleCloseModal = () => {
    setOpen(false);
  };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  //   return (
  //     <>
  //       {events?.map((event) => (
  //         <Suspense fallback={<p>Henter begivenheder ...</p>}>
  //           <div>
  //             <h3 className="text-sm font-semibold leading-6 text-gray-900">
  //               {event?.title} -{" "}
  //               <span className="mt-1 text-xs leading-5 text-gray-500">
  //                 {formatDate(event?.date as string)}
  //               </span>
  //             </h3>
  //             <p className="mt-1 truncate text-xs leading-5 text-gray-900">
  //               {event.body}
  //             </p>
  //           </div>
  //         </Suspense>
  //       ))}
  //     </>
  //   );
  // };

  // Define the state for the snapshot and records
  // const [snapshot, setSnapshot] = useState<IRecord | null>(null);
  // const [records, setRecords] = useState<IRecord[]>([]);

  // const router = useRouter();

  // Unsubscribe from the Pocketbase collection when the component unmounts
  // useEffect(() => {
  //   return () => {
  //     // console.log("Unsubscribing");
  //     pb.collection("events").unsubscribe("*");
  //   };
  // }, []);

  // // Fetch the records from Pocketbase when the component mounts
  // useEffect(() => {
  //   const fetchRecords = async () => {
  //     const mappedRecords = await fetchData();
  //     setRecords(mappedRecords);
  //     // console.log("mappedRecords", mappedRecords);
  //   };
  //   fetchRecords();
  // }, []);

  // Subscribe to the Pocketbase collection and update the state with new records
  // // pb.collection("events").subscribe("*", function (e) {
  // //   console.log("Subscribing", e.record);
  // //   if ("title" in e.record && "body" in e.record && "date" in e.record) {
  // //     setSnapshot(e.record as unknown as IRecord);
  // //   }
  // //   setRecords((prevRecords) => {
  // //     const index = prevRecords.findIndex(
  // //       (record) => record.title === e.record.title
  // //     );
  // //     if (index === -1) {
  // //       return [...prevRecords, e.record as unknown as IRecord];
  // //     } else {
  // //       const newRecords = [...prevRecords];
  // //       newRecords[index] = e.record as unknown as IRecord;
  // //       return newRecords;
  // //     }
  // //   });
  // //   console.log("Subscription, snapshot", snapshot);
  // // });

  return (
    <>
      {/* <div className="bg-white px-4 py-5 sm:px-6"> */}
      <div>
        {/* <div className="bg-white px-4 py-5 sm:px-6"> */}
        <div className="flex space-x-3">
          <div className="flex flex-shrink-0 self-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-tdk-blue-cardBg hover:text-tdk-blue-800">
                  <span className="sr-only">Åben menu</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="ring-black absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-tdk-blue-200 shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-tdk-blue-400 text-tdk-blue-800"
                              : "text-tdk-blue-700",
                            "flex px-4 py-2 text-sm"
                          )}
                        >
                          <PencilSquareIcon
                            className="text-tdk-blue-700 mr-3 h-5 w-5"
                            aria-hidden="true"
                          />
                          <span>Rediger</span>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => setOpen(true)}
                          // onClick={async () => {
                          // await useDeleteEvent(eventId as string);
                          // }}
                          href="#"
                          className={classNames(
                            active
                              ? "bg-tdk-blue-400 text-tdk-blue-800"
                              : "text-tdk-blue-700",
                            "flex px-4 py-2 text-sm"
                          )}
                        >
                          <MinusCircleIcon
                            className="text-tdk-blue-700 mr-3 h-5 w-5"
                            aria-hidden="true"
                          />
                          <span>Slet</span>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <EventsDeleteModal
            eventId={eventId as string}
            open={open}
            onClose={handleCloseModal}
          />
        </div>
        <p className="pb-6 text-sm text-tdk-blue-light-buttonsSubheadings">
          {/* <p>{events?.body}</p> */}
        </p>
      </div>
      {/* </div> */}
    </>
  );
};

export default EventsPreferences;
