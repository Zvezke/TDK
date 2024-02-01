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
    <div className="">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`editor-btn font-extrabold ${
          editor.isActive("heading", { level: 2 }) && "active-editor-btn"
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`editor-btn ${
          editor.isActive("bold") && "active-editor-btn"
        }`}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`editor-btn ${
          editor.isActive("italic") && "active-editor-btn"
        }`}
      >
        I
      </button>
    </div>
  );
};

export default Toolbar;
