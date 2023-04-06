import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="grid grid-cols-2 mx-auto 2xl:max-w-screen-xl">
      <div className="flex flex-col justify-center col-start-1 col-end-2 min-h-screen ">
        <h2 className="mt-12 font-playfair text-8xl font-black pb-8 dark:text-tdk-blue-200">
          Sangprøven
        </h2>
        <p className="pr-12 text-xl dark:text-tdk-blue-400">
          Bliv en del af vores musikalske fællesskab gennem en enkel sangprøve.
          Vi søger drenge, der elsker at synge og har den nødvendige musikalitet
          for at skabe vidunderlige musikoplevelser sammen.
        </p>

        <div className="my-10">
          <Link
            className="py-4 px-6 rounded-md dark:bg-tdk-yellow-400"
            href="/kontakt"
          >
            Tilmeld dit barn i dag
          </Link>
        </div>
        {/* <div className="">
        </div> */}
      </div>
      <Image
        className="col-start-2 col-end-3 absolute right-0 -top-12 -z-10 w-1/2"
        src="/images/sangproeven/boySinging.png"
        alt="Boy singing"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Page;
