"use client";

// import EventSourcePolyfill from "eventsource";
// (global as any).EventSource = EventSourcePolyfill;

// Import React components
import { Fragment, Suspense, useEffect, useState } from "react";

// Next
// import { useRouter } from "next/navigation";

// Server actions
// import { useDeleteEvent } from "../server-actions";

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

// Import the Loading component
// import Loading from "../../../../components/loading";
// import CardHeading from "../../../../components/cardHeadings";
import EventsDeleteModal from "./TravelsDeleteModal";

interface EventProps {
  eventId: string | null;
}

const EventsPreferences = ({ eventId }: EventProps) => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-tdk-blue-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                            className="mr-3 h-5 w-5 text-tdk-blue-700"
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
                            className="mr-3 h-5 w-5 text-tdk-blue-700"
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
