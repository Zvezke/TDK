// "use client";

// import { useState } from "react";

// Components
import AddTravel from "./components/AddTravel";
import Tiptap from "./components/Tiptap";
import UploadImage from "./components/UploadImage";

// import PocketBase from "pocketbase";

// const pb = new PocketBase("https://pocketbase-development.up.railway.app");

const Page = () => {
  // const [data, setData] = useState([]);
  // const displayData = async () => {
  //   // Fetch all records at once via getFullList
  //   const records = await pb.collection("concert_tours").getFullList({
  //     sort: "-created",
  //   });
  //   console.log("Koncertrejser, records", records);
  //   setData(records);
  // };
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <AddTravel />
      {/* <UploadImage imageTitle="test" /> */}
      <Tiptap />
      {/* <button>Vis data</button> */}
      {/* <button onClick={displayData}>Vis data</button> */}
    </div>
  );
};

export default Page;

// const [data, setData] = useState([]);
// const displayData = async () => {
//   // Fetch all records at once via getFullList
//   const records = await pb.collection("concert_tours").getFullList({
//     sort: "-created",
//   });
//   console.log("Koncertrejser, records", records);
//   setData(records);
// };
// return (
//   <div className="flex h-screen flex-col items-center justify-center">
//     <Tiptap />
//     <button onClick={displayData}>Vis data</button>
//     <div>
//       {/* Showing data from PocketBase */}
//       {data.map((item) => (
//         <div key={item.id}>
//           <h2>{item.titel}</h2>
//           <div dangerouslySetInnerHTML={{ __html: item.text }} />
//         </div>
//       ))}
//     </div>
//   </div>
// );
