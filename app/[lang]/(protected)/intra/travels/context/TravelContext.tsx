"use client";

import { createContext, useContext, useState } from "react";

type TravelContextProps = {
  imageUrl: string | null;
  setImageUrl: (setId: string | null) => void;
};

type TravelProviderProps = {
  children: React.ReactNode;
};

const TravelContext = createContext<TravelContextProps>({
  imageUrl: "",
  setImageUrl: () => {},
});

export const TravelProvider = ({ children }: TravelProviderProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  imageUrl && console.log("TravelContext, imageUrl", imageUrl);

  return (
    <TravelContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </TravelContext.Provider>
  );
};

export const useTravel = () => {
  const context = useContext(TravelContext);

  if (context === undefined) {
    throw new Error("useTravel must be used within a TravelProvider");
  }

  return context;
};
