"use client";

import { useState } from "react";

import { useCreateTravel } from "../lib/server-actions";
// import { useGetTravels } from "../_lib/server-actions";
import { useEditor, EditorContent, Extension } from "@tiptap/react";
// import { StarterKit, Heading } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Heading from "@tiptap/extension-heading";
import { Placeholder } from "@tiptap/extension-placeholder";

type Props = {
  setRichText: React.Dispatch<React.SetStateAction<string>>;
};

const Tiptap = ({ setRichText }: Props) => {
  // const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      // StarterKit.configure({
      //   bold: {
      //     HTMLAttributes: {
      //       class: "font-bold",
      //     },
      //   },
      //   italic: {
      //     HTMLAttributes: {
      //       class: "italic",
      //     },
      //   },
      //   strike: {
      //     HTMLAttributes: {
      //       class: "line-through",
      //     },
      //   },
      //   code: {
      //     HTMLAttributes: {
      //       class: "font-mono",
      //     },
      //   },
      // }),

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
          "text-gray-900 ring-gray-300 focus:ring-orange-600 mt-2 block min-h-[40vh] w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6",
      },
    },
    onUpdate: ({ editor }) => {
      const richText = JSON.parse(JSON.stringify(editor.getJSON()));
      setRichText(richText);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex min-h-full flex-col">
      <Toolbar editor={editor} />
      {/* Tjek BubbleMenu: https://tiptap.dev/docs/editor/api/extensions/bubble-menu */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
