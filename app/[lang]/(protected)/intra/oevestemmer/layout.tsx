"use client";

// Next
import { usePathname, redirect } from "next/navigation";

// Types and interfaces
import { AuthRecord, IAuthStore, NavbarProps } from "@/types/interfaces";

// Pocketbase
import pb from "@/pocketbase/config";

// Context
import { useAuth } from "@/context/AuthContext";

// Dependencies
import { Fragment, Suspense, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  // ChartPieIcon,
  // DocumentDuplicateIcon,
  // FolderIcon,
  // HomeIcon,
  // UsersIcon,
  XMarkIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import DatePicker from "@/app/[lang]/(protected)/intra/external/components/DatePicker";
import Events from "@/app/[lang]/(protected)/intra/external/components/Events";

// Hooks
import { useRefresh } from "@/pocketbase/auth";
import { is } from "date-fns/locale";

// const navigation = [
//   { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
//   { name: "Team", href: "#", icon: UsersIcon, current: false },
//   { name: "Projects", href: "#", icon: FolderIcon, current: false },
//   { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
//   { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
//   { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
//   { name: "Reports", href: "#", icon: WindowIcon, current: false },
// ];
// const teams = [
//   { id: 1, name: "Heroicons", href: "#", icon: WindowIcon, current: false },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ExternalLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // const [isLogged, setIsLogged] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [authData, setAuthData] = useState<AuthRecord | null | undefined>(null);
  // const [authStore, setAuthStore] = useState<IAuthStore | null | undefined>(
  //   null
  // );

  const currentRoute = usePathname();

  // const { isLoggedIn, setIsLoggedIn } = useAuth();

  // useEffect(() => {
  //   const fetchAuthData = async () => {
  //     const { authRefresh, pbAuthStore } = await useRefresh();
  //     // console.log("pbAuthStore", pbAuthStore);
  //     setAuthData(authRefresh?.record as unknown as AuthRecord | null);
  //     setAuthStore(pbAuthStore as unknown as IAuthStore | null);
  //     pbAuthStore?.isValid && setIsLoggedIn(true);
  //     // console.log(isLoggedIn);
  //   };
  //   fetchAuthData();
  // }, []);

  // console.log("isLoggedIn", isLoggedIn);
  // !isLoggedIn && redirect("/");

  // useEffect(() => {
  //   !isLoggedIn && redirect("/");
  // }, [isLoggedIn]);

  return (
    <>
      {/* {isLoggedIn && ( */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="bg-gray-900/80 fixed inset-0" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-tdk-blue-200"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="bg-gray-900 ring-white/10 flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-2 ring-1">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {/* {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-tdk-blue-cardBg text-tdk-blue-200"
                                      : "text-tdk-blue-400 hover:bg-tdk-blue-cardBg hover:text-tdk-blue-200",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))} */}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-tdk-blue-400">
                            Your teams
                          </div>
                          {/* <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-tdk-blue-cardBg text-tdk-blue-200"
                                      : "text-tdk-blue-400 hover:bg-tdk-blue-cardBg hover:text-tdk-blue-200",
                                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                  )}
                                >
                                  <span className="border-gray-700 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-tdk-blue-800 text-[0.625rem] font-medium text-tdk-blue-400 group-hover:text-tdk-blue-200">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul> */}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-tdk-blue-800 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="/images/church.svg"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    <Link
                      href="/da/intra/ekstern"
                      className={
                        currentRoute === "/da/intra/ekstern"
                          ? "group flex gap-x-3 rounded-md bg-tdk-blue-cardBg p-2 text-sm font-semibold leading-6 text-tdk-blue-200"
                          : "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-tdk-blue-400 hover:bg-tdk-blue-cardBg hover:text-tdk-blue-200"
                      }
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-tdk-blue-800 text-[0.625rem] font-medium text-tdk-blue-400 group-hover:text-tdk-blue-200">
                        <CalendarIcon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="truncate">Begivenheder</span>
                    </Link>
                    {/* <Link
                      href="/da/intra/intern"
                      className={
                        currentRoute === "da/intra/intern"
                          ? "group flex gap-x-3 rounded-md bg-tdk-blue-cardBg p-2 text-sm font-semibold leading-6 text-tdk-blue-200"
                          : "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-tdk-blue-400 hover:bg-tdk-blue-cardBg hover:text-tdk-blue-200"
                      }
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-tdk-blue-800 text-[0.625rem] font-medium text-tdk-blue-400 group-hover:text-tdk-blue-200">
                        <CalendarIcon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="truncate">Aktiviteter (Intern)</span>
                    </Link> */}
                    <Link
                      href="/da/intra/oevestemmer"
                      className={
                        currentRoute === "/da/intra/oevestemmer"
                          ? "group flex gap-x-3 rounded-md bg-tdk-blue-cardBg p-2 text-sm font-semibold leading-6 text-tdk-blue-200"
                          : "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-tdk-blue-400 hover:bg-tdk-blue-cardBg hover:text-tdk-blue-200"
                      }
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-transparent text-[0.625rem] font-medium text-tdk-blue-200">
                        <CalendarIcon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="truncate">Øvestemmer</span>
                    </Link>
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-tdk-blue-400">
                    Hjemmesiden
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    <li>
                      <Link
                        href="/"
                        className="group flex gap-x-3
                        rounded-md p-2 text-sm font-semibold leading-6 text-tdk-blue-400 hover:bg-tdk-blue-cardBg hover:text-tdk-blue-200"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-tdk-blue-800 text-[0.625rem] font-medium text-tdk-blue-400 group-hover:text-tdk-blue-200">
                          <WindowIcon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="truncate">Hjem</span>
                      </Link>
                      <Link
                        href="#"
                        className="group flex gap-x-3
                        rounded-md p-2 text-sm font-semibold leading-6 text-tdk-blue-400 hover:bg-tdk-blue-cardBg hover:text-tdk-blue-200"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-tdk-blue-800 text-[0.625rem] font-medium text-tdk-blue-400 group-hover:text-tdk-blue-200">
                          <WindowIcon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="truncate">Om</span>
                      </Link>
                      <Link
                        href="#"
                        className="group flex gap-x-3
                        rounded-md p-2 text-sm font-semibold leading-6 text-tdk-blue-400 hover:bg-tdk-blue-cardBg hover:text-tdk-blue-200"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-tdk-blue-800 text-[0.625rem] font-medium text-tdk-blue-400 group-hover:text-tdk-blue-200">
                          <WindowIcon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="truncate">Sangprøven</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="-mx-6 mt-auto"></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile */}
        <div className="bg-gray-900 sticky top-0 z-40 flex items-center gap-x-6 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-tdk-blue-400 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 bg-tdk-blue-cardBg text-sm font-semibold leading-6 text-tdk-blue-200">
            Dashboard
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
