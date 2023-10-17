"use client";

import { useState } from "react";

import Tiptap from "../../components/tiptap";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase-development.up.railway.app");

const Page = () => {
  const [data, setData] = useState([]);

  const displayData = async () => {
    // Fetch all records at once via getFullList
    const records = await pb.collection("concert_tours_json").getFullList({
      sort: "-created",
    });
    console.log("Koncertrejser, records", records);
    setData(records);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Tiptap />
      <button onClick={displayData}>Vis data</button>

      <div>
        {/* Showing data from PocketBase */}
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.titel}</h2>
            <div dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
