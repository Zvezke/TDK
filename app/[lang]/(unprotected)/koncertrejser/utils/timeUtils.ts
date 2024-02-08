export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };

  let formattedDate = date.toLocaleDateString("da-DK", options);

  formattedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  formattedDate = formattedDate.replace(" ", ", ");

  return formattedDate;
}
