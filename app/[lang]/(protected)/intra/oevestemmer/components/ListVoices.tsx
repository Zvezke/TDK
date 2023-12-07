import React from "react";

interface Metadata {
  eTag: string;
  size: number;
  mimetype: string;
  cacheControl: string;
  lastModified: string;
  contentLength: number;
  httpStatusCode: number;
}

interface Voice {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: Metadata;
}

interface Voices {
  list: Voice[];
}

const ListVoices = ({ voices }: { voices: Voices }) => {
  return (
    <div className="mt-4">
      <ul className="flex flex-col gap-2">
        {voices &&
          voices?.list?.map((voice) => (
            <li
              key={voice.id}
              className="px-2 py-1 text-xs font-normal text-tdk-blue-800 bg-gray-100 rounded-md"
            >
              {voice.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListVoices;
