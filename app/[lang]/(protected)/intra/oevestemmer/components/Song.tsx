import React from "react";

const Song = ({ songs }: any) => {
  console.log("songs", songs);
  return (
    <div className="col-span-1">
      <h2 className="mb-4 text-xl">Sang 2</h2>
    </div>
  );
};

export default Song;
