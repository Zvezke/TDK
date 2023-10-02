import EventSourcePolyfill from "eventsource";
(global as any).EventSource = EventSourcePolyfill;

// Import React components
import { Fragment, Suspense, useEffect, useState } from "react";

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
import pb from "@/pocketbase/config";
import { set } from "date-fns";

// Import the Loading component
import Loading from "./loading";
import { de } from "date-fns/locale";

// Define the interface for a record
interface IRecord {
  title: string;
  body: string;
  date: string;
}

// Define a function to fetch the records from Pocketbase
const fetchData = async () => {
  pb.autoCancellation(false);
  const records = await pb.collection("events").getFullList({
    sort: "date",
  });
  console.log("records", records);
  const mappedRecords = records.map((record) => {
    return {
      title: record.title,
      body: record.body,
      date: record.date,
    };
  });
  return mappedRecords;
};

const formatDate = (inputDate: string) => {
  const date = parseISO(inputDate);
  return format(date, "d. MMMM, 'kl.' HH:mm", { locale: da });
};

const Events = () => {
  // Define the state for the snapshot and records
  const [snapshot, setSnapshot] = useState<IRecord | null>(null);
  const [records, setRecords] = useState<IRecord[]>([]);

  // Unsubscribe from the Pocketbase collection when the component unmounts
  useEffect(() => {
    return () => {
      console.log("Unsubscribing");
      pb.collection("events").unsubscribe("*");
    };
  }, []);

  // Fetch the records from Pocketbase when the component mounts
  useEffect(() => {
    const fetchRecords = async () => {
      const mappedRecords = await fetchData();
      setRecords(mappedRecords);
      console.log("mappedRecords", mappedRecords);
    };
    fetchRecords();
  }, []);

  // Subscribe to the Pocketbase collection and update the state with new records
  pb.collection("events").subscribe("*", function (e) {
    console.log("Subscribing", e.record);
    if ("title" in e.record && "body" in e.record && "date" in e.record) {
      setSnapshot(e.record as unknown as IRecord);
    }
    setRecords((prevRecords) => {
      const index = prevRecords.findIndex(
        (record) => record.title === e.record.title
      );
      if (index === -1) {
        return [...prevRecords, e.record as unknown as IRecord];
      } else {
        const newRecords = [...prevRecords];
        newRecords[index] = e.record as unknown as IRecord;
        return newRecords;
      }
    });
    console.log("Subscription, snapshot", snapshot);
  });

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {records.map((record: IRecord) => {
        return (
          <div className="bg-white px-4 py-5 sm:px-6">
            <div className="flex space-x-3">
              {/* <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div> */}
              <div className="min-w-0 flex-1">
                <p className="text-gray-900 text-sm font-semibold">
                  <a href="#" className="hover:underline">
                    {record.title}
                  </a>
                </p>
                <p className="text-gray-500 text-sm">
                  <a href="#" className="hover:underline">
                    {formatDate(record.date)}
                    {/* {record.date} */}
                  </a>
                </p>
              </div>
              <div className="flex flex-shrink-0 self-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="text-gray-400 hover:text-gray-600 -m-2 flex items-center rounded-full p-2">
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
                    <Menu.Items className="bg-white ring-black absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "flex px-4 py-2 text-sm"
                              )}
                            >
                              <PencilSquareIcon
                                className="text-gray-400 mr-3 h-5 w-5"
                                aria-hidden="true"
                              />
                              <span>Rediger</span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "flex px-4 py-2 text-sm"
                              )}
                            >
                              <MinusCircleIcon
                                className="text-gray-400 mr-3 h-5 w-5"
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
            </div>
          </div>
        );
      })}
    </>
  );

  // return (
  //   // <div>
  //   //   <Suspense fallback={<Loading />}>
  //   //     {records.map((record: IRecord) => {
  //   //       return (
  //   //         <div>
  //   //           <h2>{record.title}</h2>
  //   //           <p>{record.body}</p>
  //   //           <p>{record.date}</p>
  //   //         </div>
  //   //       );
  //   //     })}
  //   //   </Suspense>
  //   // </div>
  // );
};

export default Events;
