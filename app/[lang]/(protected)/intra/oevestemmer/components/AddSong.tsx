import { revalidatePath } from "next/cache";

const AddSong = async () => {
  const addTitle = async (formData: FormData) => {
    "use server";
    // console.log("formData", formData.get("title"));
    const title = formData.get("title");
    const res = await fetch(
      "http://localhost:3000/da/intra/oevestemmer/add-song",
      {
        method: "POST",
        body: JSON.stringify({ title: title }),
      }
    );
    revalidatePath("http://localhost:3000/da/intra/oevestemmer/get-song");
    // console.log("res", res);
    return res.json();
  };

  return (
    <>
      <form className="flex gap-4" action={addTitle}>
        {/* <div className="flex"> */}
        <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-tdk-blue-700bg-tdk-blue-700 focus-within:ring-1 focus-within:ring-tdk-blue-700bg-tdk-blue-700">
          <label htmlFor="title" className="sr-only">
            Titel
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full border-0 text-lg py-0.5 font-medium placeholder:text-gray-400 focus:ring-0"
            placeholder="Titel"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-tdk-blue-800 px-2.5 py-1.5 text-sm font-semibold text-tdk-blue-200 shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-800"
        >
          Tilføj sang
        </button>
        {/* </div> */}
      </form>
    </>
  );
};

export default AddSong;
