"use client";

// Måske bruge 'With title and pill actions' - https://tailwindui.com/components/application-ui/forms/textareas#component-c8189b6993ca18e9955b370f741b763b

import { useState, useRef } from "react";

// Context
import { useTravel } from "../context/TravelContext";

// Utils
// import { createDateTimeForSupabase } from "../utils/timeUtils";
import { createDate } from "../utils/timeUtils";

// Libraries
// import { useForm } from "react-hook-form";
// import { z, ZodType } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// Components
import UploadImage from "./UploadImage";
import { useCreateTravel } from "../lib/server-actions";
import Tiptap from "./Tiptap";

// Supabase
// import { useCreateEvent } from "../server-actions";

// Types
// type FormValues = {
//   // year: string;
//   // month: string;
//   // day: string;
//   // imageUrl: string;
//   // title: string;
//   // richText: string;
// };

// const schema = z.object({
//   // year: z.string(),
//   // month: z.string(),
//   // day: z.string(),
//   // imageUrl: z.string().optional(),
//   // title: z.string(),
//   // // body: z.string(),
//   // richText: z.string(),
// });

const AddTravel = () => {
  // const [test, setTest] = useState<string>("");
  const [year, setYear] = useState<string>("2024");
  const [month, setMonth] = useState<string>("Januar");
  // const [day, setDay] = useState<string>("1");
  const [title, setTitle] = useState<string>("");
  const { imageUrl, setImageUrl } = useTravel();
  const [richText, setRichText] = useState<string>("");

  const editorRef = useRef<any>();

  // const { register, handleSubmit, reset, formState } = useForm<FormValues>({
  //   resolver: zodResolver(schema),
  // });

  const handleSubmission = async () => {
    const dateForSupabase = createDate(year, month);
    // const dateForSupabase = createDate(year, month, day);
    console.log("dateForSupabase", dateForSupabase);

    try {
      const travelData = {
        title,
        rich_text: richText,
        date: dateForSupabase,
        image_url: imageUrl,
      };
      console.log("dataForSupabase", travelData);
      const { travelError } = await useCreateTravel(travelData);
      if (travelError) {
        console.log("AddTravel, travelError", travelError);
        return;
      }
      setImageUrl(null);
      setRichText("");
      setTitle("");
      setYear("2024");
      setMonth("Januar");
      // setDay("1");
      editorRef.current.resetEditor();
    } catch (error) {
    } finally {
      // reset();
    }
  };

  return (
    <>
      {/* <DatePicker setDate={setDate} /> */}
      <div className="">
        <div className="grid">
          <div className="flex gap-2">
            {/* <div className="flex justify-between"> */}
            {/* Month */}
            <div className="flex flex-1 flex-col">
              <label
                htmlFor="Month"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Måned
              </label>
              <select
                id="Month"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
                // Set default value to current month
                // defaultValue="Januar"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
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
              {/* {errors.month && <span>{errors.month.message}</span>} */}
            </div>

            {/* Day
            <div className="flex flex-1 flex-col">
              <label
                htmlFor="Day"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dag
              </label>
              <select
                id="Day"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
                // Set default value to current day
                // defaultValue="1"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                // {...register("day")}
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
            </div> */}

            {/* Year */}
            <div className="flex flex-1 flex-col">
              <label
                htmlFor="year"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                År
              </label>
              <select
                id="year"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
                // Set default value to current year
                // defaultValue="2023"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                // {...register("year")}
              >
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
              {/* {errors.year && <span>{errors.year.message}</span>} */}
            </div>
          </div>

          {/* Title */}
          <label
            htmlFor="title"
            className="mt-4 block text-sm font-medium leading-6 text-gray-900"
          >
            Titel
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
            />
            <UploadImage />
          </div>

          {/* Body */}
          <label
            htmlFor="body"
            className="mt-4 block text-sm font-medium leading-6 text-gray-900"
          >
            Dagbogen
          </label>

          {/* Rich text editor */}
          <Tiptap setRichText={setRichText} ref={editorRef} />

          {/* Button to submit */}
          <button
            className="mt-6 rounded-md bg-tdk-orange-400 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            onClick={handleSubmission}
          >
            Tilføj koncertrejse
          </button>
          {/* <button onClick={handleDeleteTravel}>useDeleteTravel</button> */}
        </div>
      </div>
    </>
  );
};

export default AddTravel;
