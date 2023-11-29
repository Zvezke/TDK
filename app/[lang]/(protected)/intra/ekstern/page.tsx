"use client";

// React
import { useEffect, useLayoutEffect } from "react";

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
import DatePicker from "@/app/[lang]/components/datePicker";
import Events from "@/app/[lang]/components/events";

// Hooks
import { useRefresh } from "@/pocketbase/auth";
import { is } from "date-fns/locale";

export default function External() {
  return (
    <main className="py-10 lg:pl-72">
      <div className="grid grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="mb-4 text-2xl">Tilføj begivenhed</h2>
          <DatePicker />
        </div>

        <div>
          <h2 className="mb-4 text-2xl">Begivenhederne</h2>
          <Events />
        </div>
      </div>
    </main>
  );
}
