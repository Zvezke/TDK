"use client";

import { type Editor } from "@tiptap/react";
import { Bold, Heading2 } from "lucide-react";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-slate-300 bg-white sticky top-3 left-0 right-0 z-10 flex flex-wrap gap-0.5 rounded-lg border p-5">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`editor-btn font-extrabold ${
          editor.isActive("heading", { level: 2 }) && "active-editor-btn"
        }`}
      >
        H2
      </button>
    </div>
  );
};

export default Toolbar;
