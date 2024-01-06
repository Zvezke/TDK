import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { format } from "date-fns";
import { da } from "date-fns/locale";

interface EventsModalProps {
  event: Events;
  open: boolean;
  handleClick: () => void;
}

const EventsModal = ({ event, open, handleClick }: EventsModalProps) => {
  const cancelButtonRef = useRef(null);

  const dayAndMonth = (date: string) => {
    const newDate = new Date(date);
    return format(newDate, "dd. MMM", { locale: da });
  };

  const time = (date: string) => {
    const newDate = new Date(date);
    return format(newDate, "HH:mm", { locale: da });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => handleClick()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-tdk-blue-700 bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center font-roboto sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-6 text-gray-900"
                    >
                      {event.title}
                    </Dialog.Title>
                    <div className="text-sm mt-1 text-gray-600">
                      {dayAndMonth(event?.date as string)}, kl.{" "}
                      {time(event?.date as string)}
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-700">
                        {event.body}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EventsModal;
