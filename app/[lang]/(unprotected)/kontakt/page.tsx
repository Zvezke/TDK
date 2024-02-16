import { getDictionary } from "@/get-dictionary";

const Page = async ({ params }: { params: { lang: "da" | "en" } }) => {
  const { contact } = await getDictionary(params.lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-tdk-blue-light-background dark:bg-tdk-blue-700">
      <h2 className=" mb-4 font-playfair text-5xl font-bold text-tdk-blue-light-headlines dark:text-tdk-blue-200 max-lg:text-center lg:text-9xl">
        {contact.comingSoonTitle}
      </h2>
      <p className="px-8 text-center text-base text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400 lg:text-2xl">
        {contact.contactMessage}{" "}
        <a
          className="text-[#B25A1E] dark:text-tdk-yellow-400"
          href={
            params.lang === "da"
              ? "mailto:lonegislinge@gmail.com?subject=Ang.%20tilmelding%20til%20Treenighedskirkens%20drengekor"
              : "mailto:lonegislinge@gmail.com?subject=Regarding%20Trinity%20Church%27s%20Boys%20and%20Men%20Choir"
          }
          target={"_blank"}
        >
          {contact.contactLink}
        </a>{" "}
        {/* eller{" "}
        <a className="text-[#B25A1E] dark:text-tdk-orange-400" href="#">
          ringe.
        </a> */}
      </p>
    </main>
  );
};

export default Page;
