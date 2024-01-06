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
        Overskrift
      </button>
    </div>
  );
};

export default Toolbar;
