"use client";

// Måske bruge 'With title and pill actions' - https://tailwindui.com/components/application-ui/forms/textareas#component-c8189b6993ca18e9955b370f741b763b

import { createDateTimeForSupabase } from "../utils/timeUtils";

// Libraries
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
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

const DatePicker = () => {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    const { year, month, day, daytime, title, body } = data;

    const dateForSupabase = createDateTimeForSupabase(
      year,
      month,
      day,
      daytime
    );

    try {
      const dataForSupabase = {
        title: title,
        body: body,
        date: dateForSupabase,
      };
      const { eventError } = await useCreateEvent(dataForSupabase);
      console.warn("DatePicker, eventError", eventError);
    } catch (error) {
    } finally {
      reset();
    }
  };

  const { errors } = formState;

  return (
    <div className="">
      <form className="grid" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          {/* Month */}
          <div className="flex flex-col">
            <label
              htmlFor="Month"
              className="text-gray-900 block text-sm font-medium leading-6"
            >
              Måned
            </label>
            <select
              id="Month"
              className="text-gray-900 ring-gray-300 focus:ring-orange-600 mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6"
              // Set default value to current month
              defaultValue="Januar"
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
              className="text-gray-900 block text-sm font-medium leading-6"
            >
              Dag
            </label>
            <select
              id="Day"
              className="text-gray-900 ring-gray-300 focus:ring-orange-600 mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6"
              // Set default value to current day
              defaultValue="1"
              {...register("day")}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
            {errors.day && <span>{errors.day.message}</span>}
          </div>

          {/* Year */}
          <div className="flex flex-col">
            <label
              htmlFor="year"
              className="text-gray-900 block text-sm font-medium leading-6"
            >
              År
            </label>
            <select
              id="year"
              className="text-gray-900 ring-gray-300 focus:ring-orange-600 mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6"
              // Set default value to current year
              defaultValue="2023"
              {...register("year")}
            >
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
              className="text-gray-900 block text-sm font-medium leading-6"
            >
              Tidspunkt
            </label>
            <select
              id="daytime"
              className="text-gray-900 ring-gray-300 focus:ring-orange-600 mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6"
              defaultValue="12:00"
              {...register("daytime")}
            >
              <option>00:00</option>
              <option>00:15</option>
              <option>00:30</option>
              <option>00:45</option>
              <option>01:00</option>
              <option>01:15</option>
              <option>01:30</option>
              <option>01:45</option>
              <option>02:00</option>
              <option>02:15</option>
              <option>02:30</option>
              <option>02:45</option>
              <option>03:00</option>
              <option>03:15</option>
              <option>03:30</option>
              <option>03:45</option>
              <option>04:00</option>
              <option>04:15</option>
              <option>04:30</option>
              <option>04:45</option>
              <option>05:00</option>
              <option>05:15</option>
              <option>05:30</option>
              <option>05:45</option>
              <option>06:00</option>
              <option>06:15</option>
              <option>06:30</option>
              <option>06:45</option>
              <option>07:00</option>
              <option>07:15</option>
              <option>07:30</option>
              <option>07:45</option>
              <option>08:00</option>
              <option>08:15</option>
              <option>08:30</option>
              <option>08:45</option>
              <option>09:00</option>
              <option>09:15</option>
              <option>09:30</option>
              <option>09:45</option>
              <option>10:00</option>
              <option>10:15</option>
              <option>10:30</option>
              <option>10:45</option>
              <option>11:00</option>
              <option>11:15</option>
              <option>11:30</option>
              <option>11:45</option>
              <option>12:00</option>
              <option>12:15</option>
              <option>12:30</option>
              <option>12:45</option>
              <option>13:00</option>
              <option>13:15</option>
              <option>13:30</option>
              <option>13:45</option>
              <option>14:00</option>
              <option>14:15</option>
              <option>14:30</option>
              <option>14:45</option>
              <option>15:00</option>
              <option>15:15</option>
              <option>15:30</option>
              <option>15:45</option>
              <option>16:00</option>
              <option>16:15</option>
              <option>16:30</option>
              <option>16:45</option>
              <option>17:00</option>
              <option>17:15</option>
              <option>17:30</option>
              <option>17:45</option>
              <option>18:00</option>
              <option>18:15</option>
              <option>18:30</option>
              <option>18:45</option>
              <option>19:00</option>
              <option>19:15</option>
              <option>19:30</option>
              <option>19:45</option>
              <option>20:00</option>
              <option>20:15</option>
              <option>20:30</option>
              <option>20:45</option>
              <option>21:00</option>
              <option>21:15</option>
              <option>21:30</option>
              <option>21:45</option>
              <option>22:00</option>
              <option>22:15</option>
              <option>22:30</option>
              <option>22:45</option>
              <option>23:00</option>
              <option>23:15</option>
              <option>23:30</option>
              <option>23:45</option>
            </select>
          </div>
        </div>

        {/* Title */}
        <label
          htmlFor="title"
          className="text-gray-900 mt-4 block text-sm font-medium leading-6"
        >
          Titel
        </label>
        <input
          type="text"
          id="title"
          className="text-gray-900 ring-gray-300 focus:ring-orange-600 mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6"
          {...register("title")}
          required
        />
        {errors.title && <span>{errors.title.message}</span>}

        {/* Body */}
        <label
          htmlFor="body"
          className="text-gray-900 mt-4 block text-sm font-medium leading-6"
        >
          Beskrivelse
        </label>
        <textarea
          id="body"
          className="text-gray-900 ring-gray-300 focus:ring-orange-600 mt-2 block h-48 w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6"
          {...register("body")}
          required
        ></textarea>
        {errors.body && <span>{errors.body.message}</span>}

        {/* Submit button */}
        <button
          className="text-white hover:bg-orange-500 focus-visible:outline-orange-600 mt-6 rounded-md bg-tdk-orange-400 px-2.5 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          type="submit"
        >
          Tilføj begivenhed
        </button>
      </form>
    </div>
  );
};

export default DatePicker;
