"use client";

import { type Editor } from "@tiptap/react";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "rounded bg-tdk-blue-800 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-700"
            : "rounded bg-tdk-blue-400 px-2 py-1 text-xs font-semibold text-tdk-blue-800 shadow-sm hover:bg-tdk-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-700"
        }
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "rounded bg-tdk-blue-800 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-700"
            : "rounded bg-tdk-blue-400 px-2 py-1 text-xs font-semibold text-tdk-blue-800 shadow-sm hover:bg-tdk-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-700"
        }
      >
        Fed
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "rounded bg-tdk-blue-800 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-700"
            : "rounded bg-tdk-blue-400 px-2 py-1 text-xs font-semibold text-tdk-blue-800 shadow-sm hover:bg-tdk-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-700"
        }
      >
        Kursiv
      </button>
    </div>
  );
};

export default Toolbar;
