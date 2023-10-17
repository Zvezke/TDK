"use client";

import { useState } from "react";

import PocketBase from "pocketbase";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";

// Hiv data ud som props

const pb = new PocketBase("https://pocketbase-development.up.railway.app");

const Tiptap = () => {
  const [title, setTitle] = useState("");
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Brødtekst ...</p>",
  });

  if (!editor) {
    return null;
  }

  const handleData = async () => {
    console.log(editor.getJSON());

    const html = editor.getHTML();
    // example create data
    const data = {
      titel: title,
      text: html,
    };

    const record = await pb.collection("concert_tours_json").create(data);
  };

  return (
    <div className="flex min-h-[250px] flex-col justify-items-stretch">
      <label>Title</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={handleData}>Gem</button>
    </div>
  );
};

export default Tiptap;
