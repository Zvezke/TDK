import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { revalidatePath } from "next/cache";

// import { revalidatePath, revalidateTag } from "next/cache";

export default function ModalAddTitle({ open, setOpen }: any) {
  const [title, setTitle] = useState("");
  // async function addTodo(formData: FormData) {
  //   "use server";

  //   // post todo to api
  //   let data: { [key: string]: any } = {};
  //   for (const [key, value] of formData) {
  //     data[key] = value;
  //   }

  //   await fetch("http://localhost:3001/api/todo/add", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });

  //   revalidateTag("todo-items");

  //   // revalidatePath("/todo");
  // }

  // async function getTodos() {
  //   let todos = await fetch("http://localhost:3001/api/todo/list", {
  //     next: { tags: ["todo-items"], revalidate: 3600 },
  //   });

  //   return todos.json();
  // }

  // let { todos } = await getTodos();

  const addTitle = async (e: any) => {
    e.preventDefault(); // prevent form submission
    // if title is empty or only contains whitespace
    if (!title.trim()) {
      return;
    }
    // ... else fetch POST request to add title
    await fetch("http://localhost:3000/da/intra/oevestemmer/add-song", {
      method: "POST",
      body: JSON.stringify({ title: title }),
    });
    // revalidatePath("http://localhost:3000/da/intra/oevestemmer/get-song");

    // ... finally close modal
    setOpen(false);
  };

  const handleInputChange = (e: any) => {
    setTitle(e.target.value); // update title state when input changes
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="flex gap-4 items-center">
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
                      value={title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="justify-center rounded-md bg-tdk-blue-800 px-3 py-1.5 text-sm font-semibold text-tdk-blue-200 shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={addTitle}
                  >
                    Tilføj
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
