"use client";

// import { useState } from "react";
import React, { forwardRef, useImperativeHandle } from "react";

import { useEditor, EditorContent, Extension, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import { Heading } from "@tiptap/extension-heading";
import { Placeholder } from "@tiptap/extension-placeholder";

interface TiptapProps {
  setRichText: React.Dispatch<React.SetStateAction<string>>;
}

const Tiptap = forwardRef(({ setRichText }: TiptapProps, ref) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold font-roboto",
          levels: [2],
        },
      }) as Extension,
      Placeholder.configure({
        placeholder: "Skriv din tekst her...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "text-gray-900 ring-gray-300 focus:outline-orange-600 mt-2 block min-h-[40vh] w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset sm:text-sm sm:leading-6",
      },
    },
    onUpdate: ({ editor }) => {
      const newRichText = JSON.parse(JSON.stringify(editor?.getJSON()));
      setRichText(newRichText);
    },
  });

  const resetEditor = () => {
    editor?.chain().setContent("").run();
  };

  useImperativeHandle(ref, () => ({
    resetEditor,
  }));

  if (!editor) {
    return null;
  }

  return (
    <div className="flex min-h-full flex-col">
      <Toolbar editor={editor} />
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="flex gap-2">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
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
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </div>
  );
});

export default Tiptap;
