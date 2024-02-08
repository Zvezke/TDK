/**
 * An array of month names.
 */
export const monthNames = [
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

/**
 * Subtracts the specified number of hours from a given time string.
 * @param timeString - The time string in the format "HH:mm".
 * @param hoursToSubtract - The number of hours to subtract.
 * @returns The new time string after subtracting the hours.
 */
export function subtractedHours(
  timeString: string,
  hoursToSubtract: number
): string {
  const [hour, minute] = timeString.split(":").map(Number);
  const newHour = hour - hoursToSubtract;
  // Ensure the hour wraps correctly if it goes below 0.
  const adjustedHour = newHour >= 0 ? newHour : 24 + newHour;
  return `${String(adjustedHour).padStart(2, "0")}:${String(minute).padStart(
    2,
    "0"
  )}`;
}

/**
 * Adds a leading zero to each part of a date string.
 * @param dateString - The date string in the format "YYYY-MM-DD".
 * @returns The formatted date string with leading zeros.
 */
export function addLeadingZeroToDate(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);
  const formattedDatePart = `${year}-${String(month).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;
  const formattedDateString = formattedDatePart;
  return formattedDateString;
}

/**
 * Creates a date-time string in the format "YYYY-MM-DD HH:mm:00.000Z" for use with Supabase.
 * @param year - The year part of the date.
 * @param month - The month part of the date.
 * @param day - The day part of the date.
 * @param daytime - The time string in the format "HH:mm".
 * @returns The formatted date-time string.
 */
export function createDateTimeForSupabase(
  year: string,
  month: string,
  day: string,
  daytime: string
): string {
  const monthNumber = monthNames.indexOf(month) + 1;
  const dateForDstCheck = new Date(
    parseInt(year),
    monthNumber - 1,
    parseInt(day)
  );
  // const isDst = isDaylightSavingTime(dateForDstCheck);

  // console.log("dateForDstCheck", dateForDstCheck);

  // Get the timezone offset in minutes.
  // const offset = dateForDstCheck.getTimezoneOffset();
  // Convert the offset to hours.
  // const offsetHours = offset / 60;

  // Subtract the offset from the input time.
  // const adjustedTime = subtractedHours(daytime, offsetHours);

  // console.log("adjustedTime", adjustedTime);

  // const newTimeString = adjustForDaylightSaving(daytime, isDst);
  const formattedDateString = addLeadingZeroToDate(
    `${year}-${monthNumber}-${day}`
  );
  console.log("formattedDateString", formattedDateString);
  console.log("daytime", daytime);
  return `${formattedDateString} ${daytime}:00.000Z`;
  // return `${formattedDateString} ${newTimeString}:00.000Z`;
}

// /**
//  * Calculates the last Sunday of a given month in a given year.
//  * @param month - The month (1-12).
//  * @param year - The year.
//  * @returns The date of the last Sunday of the specified month.
//  */
// export function getLastSunday(month: number, year: number): Date {
//   const date = new Date(year, month, 0); // Last day of the month
//   date.setDate(date.getDate() - date.getDay()); // Adjust to the previous Sunday
//   return date;
// }

// /**
//  * Checks if a given date is in daylight saving time.
//  * @param date - The date to check.
//  * @returns True if the date is in daylight saving time, false otherwise.
//  */
// export function isDaylightSavingTime(date: Date): boolean {
//   const year = date.getFullYear();
//   const lastSundayMarch = getLastSunday(3, year);
//   const lastSundayOctober = getLastSunday(10, year);

//   return date > lastSundayMarch && date < lastSundayOctober;
// }

// /**
//  * Adjusts a time string for daylight saving time.
//  * @param timeString - The time string in the format "HH:mm".
//  * @param isDst - A boolean indicating whether daylight saving time is in effect.
//  * @returns The adjusted time string.
//  */
// export function adjustForDaylightSaving(
//   timeString: string,
//   isDst: boolean
// ): string {
//   const hoursToAdjust = isDst ? 0 : 1; // Adjust by 1 hour for DST, otherwise 2
//   return subtractedHours(timeString, hoursToAdjust);
// }

const monthMapping: { [key: string]: number } = {
  Januar: 0,
  Februar: 1,
  Marts: 2,
  April: 3,
  Maj: 4,
  Juni: 5,
  Juli: 6,
  August: 7,
  September: 8,
  Oktober: 9,
  November: 10,
  December: 11,
};

export const createDate = (year: string, month: string, day: string) => {
  const monthNumber = monthMapping[month] + 1; // Months are 1-indexed in date strings
  const dateStr = `${year}-${monthNumber
    .toString()
    .padStart(2, "0")}-${day.padStart(2, "0")}`;
  const date = new Date(dateStr);
  return date;
};
