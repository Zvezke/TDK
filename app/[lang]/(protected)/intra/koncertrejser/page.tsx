// Context
import { TravelProvider } from "./context/TravelContext";

// Components
import AddTravel from "./components/AddTravel";
import TravelsInternal from "./components/TravelsInternal";
import { Suspense } from "react";

const Page = () => {
  return (
    <main className="py-10 lg:pl-72">
      <div className="grid grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="mb-4 text-2xl">Tilføj koncertrejse</h2>
          <TravelProvider>
            <AddTravel />
            {/* <Tiptap /> */}
          </TravelProvider>
        </div>
        <div>
          <h2 className="mb-4 text-2xl">Koncertrejser</h2>
          <Suspense fallback={<div>Henter koncertrejser ...</div>}>
            <TravelsInternal />
          </Suspense>
        </div>
        {/* <button onClick={handleLogout}>Log ud</button> */}
      </div>
    </main>
  );
};

export default Page;
