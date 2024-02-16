// NextJS
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Track {
  track_number: number;
  title: string;
  songs?: string[]; // Optional property, since it appears only in some tracks
}

interface Album {
  album: string;
  image?: string;
  description: string;
  tracks: Track[];
}

interface CardAlbumProps {
  // key: number;
  album: Album;
}

export default function CardAlbum({ album }: CardAlbumProps) {
  return (
    <div className="sm:py-4 lg:col-start-1 lg:col-end-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 pb-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={album.image as string}
                alt="Album cover"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <div className="mb-4">
                <h2 className="mb-2 font-playfair text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {album.album}
                </h2>
                <p className="mb-4 text-xs text-gray-300">
                  {album.description}
                </p>
                {album.tracks.map((track) => (
                  <li className="text-gray-200" key={track.track_number}>
                    {track.title}
                  </li>
                ))}
              </div>
              {/* <div className="rich-text-content-cardtravel line-clamp-6 max-w-xl text-gray-300" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
