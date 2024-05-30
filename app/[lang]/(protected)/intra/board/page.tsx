import React from "react";

const Page = async () => {
  return (
    <main className="h-screen py-10 lg:pl-72">
      <section className="grid grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="mb-4 text-2xl">Inputs</h2>
          {/* <TravelProvider>
            <AddTravel />
          </TravelProvider> */}
          Inputs
        </div>
        <div>
          <h2 className="mb-4 text-2xl">Oversigt</h2>
          {/* <Suspense fallback={<div>Henter koncertrejser ...</div>}>
            <TravelsInternal />
          </Suspense> */}
          Oversigt
        </div>
      </section>
    </main>
  );
};

export default Page;
