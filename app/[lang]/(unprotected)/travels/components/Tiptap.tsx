"use client";

import { useState } from "react";

import PocketBase from "pocketbase";
// import { }
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Heading from "@tiptap/extension-heading";

// Hiv data ud som props

// const pb = new PocketBase("https://pocketbase-development.up.railway.app");

const Tiptap = () => {
  const [title, setTitle] = useState("");

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

  const handleData = async () => {
    console.log(editor.getJSON());

    // const { data, error } = await supabase
    // .from('travels')
    // .insert([
    //   { some_column: 'someValue', other_column: 'otherValue' },
    // ])
    // .select()

    // console.log(editor.getHTML());

    // const html = editor.getHTML();
    // // example create data
    // const data = {
    //   titel: title,
    //   text: html,
    // };

    // const record = await pb.collection("concert_tours_json").create(data);
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
      <button onClick={handleData}>Gem</button>
    </div>
  );
};

export default Tiptap;
