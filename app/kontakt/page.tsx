const Page = () => {
  return (
    <main className="flex flex-col  justify-center items-center bg-tdk-blue-light-background dark:bg-tdk-blue-700 min-h-screen">
      <h2 className=" lg:text-9xl text-5xl mb-4 max-lg:text-center text-tdk-blue-light-headlines dark:text-tdk-blue-200 font-playfair font-bold">
        Kommer snart
      </h2>
      <p className="lg:text-2xl text-base px-8 text-center text-tdk-blue-light-buttonsSubheadings dark:text-tdk-blue-400">
        Hvis du ønsker at kontakte korlederen, er du velkommen til at{" "}
        <a
          className="text-[#B25A1E] dark:text-tdk-orange-400"
          href="mailto:lonegislinge@gmail.com?subject=Ang.%20tilmelding%20til%20Treenighedskirkens%20drengekor"
          target={"_blank"}
        >
          sende en email.
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
