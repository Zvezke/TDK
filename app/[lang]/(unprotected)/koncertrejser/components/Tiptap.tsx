"use client";

import { useState } from "react";

import { useCreateTravel } from "../lib/server-actions";
// import { useGetTravels } from "../_lib/server-actions";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Heading from "@tiptap/extension-heading";

// Tiptap component for creating and editing travel content
const Tiptap = () => {
  const [title, setTitle] = useState("");

  // Initialize the editor with extensions and default content
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold font-roboto",
          levels: [2],
        },
      }),
    ],
    content: "<p>Brødtekst ...</p>",
  });

  if (!editor) {
    return null;
  }

  // Handle data submission to create a new travel entry
  const handleData = async () => {
    const rich_text = JSON.parse(JSON.stringify(editor.getJSON()));
    const data = {
      title,
      rich_text,
    };

    const { travel, travelError } = await useCreateTravel(data);
    // const { travels, travelsError } = await useGetTravels();
  };

  return (
    <div className="flex min-h-[250px] flex-col">
      <label>Title</label>
      <input
        className="border-2 border-gray-700"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={async () => await handleData()}>Gem</button>
    </div>
  );
};

export default Tiptap;
